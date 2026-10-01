import { Router } from 'express';
import { messageController } from '../controllers/index.js';

const router = Router();

router.put('/:messageId', messageController.updateMessage);

export default router;
