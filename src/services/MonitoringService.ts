import { readStats } from '../middlewares/RequestsMonitoringMiddleware';
import { dateTime } from '../utils/date/DateTime';

export class MonitoringService {
  getHealthInformation() {
    const uptime = dateTime.formatSecondsToHoursMinutesSeconds(process.uptime());

    const requests = readStats();

    return {
      uptime,
      requests,
    };
  }
}
