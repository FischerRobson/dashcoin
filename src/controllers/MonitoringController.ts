import { Request, Response } from 'express';
import { MonitoringService } from '../services/MonitoringService';

export class MonitoringController {
  getMonitoringInformation(req: Request, res: Response) {
    const monitoringService = new MonitoringService();

    const informations = monitoringService.getHealthInformation();

    return res.json(informations);
  }
}
