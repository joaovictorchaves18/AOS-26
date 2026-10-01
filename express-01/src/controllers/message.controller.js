import { messageService } from '../services/messageService.js';
import { AppError } from '../utils/appError.js';

export const updateMessage = async (req, res) => {
  const { messageId } = req.params;
  const { content } = req.body;
  
  if (!content) {
    throw new AppError('Conteúdo (content) é obrigatório', 400);
  }

  const updatedMessage = await messageService.updateMessage(messageId, { content });
  res.status(200).json({ message: 'Mensagem atualizada', data: updatedMessage });
};
