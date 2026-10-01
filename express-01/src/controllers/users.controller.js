import { userService } from '../services/userService.js';
import { AppError } from '../utils/appError.js';

export const getUsers = async (req, res) => {
  const users = [{ id: 1, name: 'João' }];
  res.status(200).json(users);
};

export const createUser = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    throw new AppError('Nome é obrigatório', 400);
  }
  const user = await userService.createUser({ name });
  res.status(201).json({ message: 'Usuário criado', user });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  // Note: if user not found, userService.updateUser will throw an Error, 
  // we could map it to an AppError there, but let's just let it propagate 
  // or wrap it. For now, it will be caught by Express.
  const user = await userService.updateUser(id, { name });
  res.status(200).json({ message: 'Usuário atualizado', user });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  res.status(204).send();
};

export const notFound = (req, res) => {
  throw new AppError('Recurso não encontrado', 404);
};

export const unauthorized = (req, res) => {
  throw new AppError('Não autorizado', 401);
};

export const forbidden = (req, res) => {
  throw new AppError('Acesso proibido', 403);
};

export const serverError = (req, res) => {
  throw new Error('Erro interno do servidor que não é AppError simulado.');
};
