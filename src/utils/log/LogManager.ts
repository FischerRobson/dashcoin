import { dateTime } from '../date/DateTime';

const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'logs.json');

class LogManager {
  resetLogsJSON() {
    fs.writeFileSync(FILE_PATH, JSON.stringify({}), { flag: 'w' });
  }

  writeLog(log: any) {
    const logDate = dateTime.getNowDateTime();
    let logs = this.readLogs();
    logs = logs === [] ? '' : logs;
    const newLogs = [
      ...logs,
      {
        date: logDate,
        log,
      },
    ];
    try {
      fs.appendFileSync(FILE_PATH, JSON.stringify(newLogs), { flag: 'w' });
    } catch (err) {
      console.error(err);
      throw new Error('Error while writing logs!');
    }
  }

  readLogs() {
    let result = [];
    try {
      result = JSON.parse(fs.readFileSync(FILE_PATH));
    } catch (err) {
      console.error(err);
      throw new Error('Error while reading logs!');
    }
    return result;
  }
}

export const logManager = new LogManager();
