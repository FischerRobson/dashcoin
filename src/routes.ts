import { Router } from 'express';
import { CreateCriptoController } from './controllers/CreateCriptoController';
import { ListCriptosController } from './controllers/ListCriptosController';
import { MonitoringController } from './controllers/MonitoringController';

import { RequestMonitoringMiddleware } from './middlewares/RequestsMonitoringMiddleware';

export const router = Router();

const createCriptoController = new CreateCriptoController();
const listCriptosController = new ListCriptosController();
const monitoringController = new MonitoringController();

router.post('/criptos', RequestMonitoringMiddleware, createCriptoController.handle);
router.get('/criptos', RequestMonitoringMiddleware, listCriptosController.handle);
router.get('/health', RequestMonitoringMiddleware, monitoringController.getMonitoringInformation);
