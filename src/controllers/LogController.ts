import { Request, Response } from 'express';
import { logManager } from '../utils/log/LogController';

export class LogController {
  async handle(req: Request, res: Response) {
    const logs = logManager.readLogs();

    return res.json(logs);
  }
}
