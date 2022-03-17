import { NextFunction, Request, Response } from 'express';
import { getRoute } from '../utils/getRoute';

const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'stats.json');

export const readStats = () => {
  let result = {};
  try {
    result = JSON.parse(fs.readFileSync(FILE_PATH));
  } catch (err) {
    console.error(err);
  }
  return result;
};

const dumpStats = (stats: any) => {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(stats), { flag: 'w+' });
  } catch (err) {
    console.error(err);
  }
};

export const RequestMonitoringMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const stats: any = readStats();
  const event = `${req.method} ${getRoute(req)} `;
  stats[event] = stats[event] ? stats[event] + 1 : 1;
  dumpStats(stats);

  next();
};
