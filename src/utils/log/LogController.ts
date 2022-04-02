import { getNowDate } from '../date/getNowDate';

const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'logs.json');

class LogManager {
  resetLogsJSON() {
    fs.writeFileSync(FILE_PATH, JSON.stringify({}), { flag: 'w' });
  }

  writeLog(log: any) {
    const logDate = getNowDate();
    let logs = this.readLogs();
    logs = logs === {} ? '' : logs;
    const newLogs = {
      ...logs,
      date: logDate,
      log,
    };
    try {
      fs.writeFileSync(FILE_PATH, JSON.stringify(newLogs), { flag: 'w' });
    } catch (err) {
      console.error(err);
    }
  }

  readLogs() {
    let result = {};
    try {
      result = JSON.parse(fs.readFileSync(FILE_PATH));
    } catch (err) {
      console.error(err);
    }
    return result;
  }
}

export const logManager = new LogManager();
