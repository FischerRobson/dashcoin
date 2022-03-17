import { readStats } from '../middlewares/RequestsMonitoringMiddleware';
import { formatTime } from '../utils/formatTime';

export class MonitoringService {
  getHealthInformation() {
    const uptime = formatTime(process.uptime());

    const requests = readStats();

    return {
      uptime,
      requests,
    };
  }
}
