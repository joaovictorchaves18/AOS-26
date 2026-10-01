import { Router } from 'express';
import { usersController } from '../controllers/index.js'; // Usando o Barrel Pattern

const router = Router();

router.get('/', usersController.getUsers);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);
router.get('/error', usersController.serverError);
router.get('/unauthorized', usersController.unauthorized);
router.get('/forbidden', usersController.forbidden);
router.use(usersController.notFound);

export default router;
