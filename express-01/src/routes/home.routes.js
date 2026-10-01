import { Router } from 'express';
import { homeController } from '../controllers/index.js'; // Usando o Barrel Pattern

const router = Router();

router.get('/', homeController.getHome);

export default router;
