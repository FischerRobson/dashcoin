import { Router } from 'express';
import { CreateCriptoController } from './controllers/CreateCriptoController';
import { CreateUserController } from './controllers/CreateUserController';
import { GetCriptoController } from './controllers/GetCriptoController';
import { GetUserController } from './controllers/GetUserController';
import { ListCriptosController } from './controllers/ListCriptosController';
import { MonitoringController } from './controllers/MonitoringController';

import { RequestMonitoringMiddleware } from './middlewares/RequestsMonitoringMiddleware';

export const router = Router();

const createCriptoController = new CreateCriptoController();
const listCriptosController = new ListCriptosController();
const monitoringController = new MonitoringController();
const createUserController = new CreateUserController();
const getCriptoController = new GetCriptoController();
const getUserController = new GetUserController();

router.post('/criptos', RequestMonitoringMiddleware, createCriptoController.handle);
router.get('/criptos/:initials', RequestMonitoringMiddleware, getCriptoController.handle);
router.get('/criptos', RequestMonitoringMiddleware, listCriptosController.handle);

router.get('/health', RequestMonitoringMiddleware, monitoringController.getMonitoringInformation);

router.get('/users', RequestMonitoringMiddleware, getUserController.handle);
router.post('/users', RequestMonitoringMiddleware, createUserController.handle);
