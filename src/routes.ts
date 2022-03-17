import { Router } from 'express';
import { CreateCriptoController } from './controllers/CreateCriptoController';
import { ListCriptosController } from './controllers/ListCriptosController';

import { RequestMonitoringMiddleware } from './middlewares/RequestsMonitoringMiddleware';

export const router = Router();

const createCriptoController = new CreateCriptoController();
const listCriptosController = new ListCriptosController();

router.post('/criptos', RequestMonitoringMiddleware, createCriptoController.handle);
router.get('/criptos', RequestMonitoringMiddleware, listCriptosController.handle);
