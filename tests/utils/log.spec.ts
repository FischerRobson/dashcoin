import { logManager } from '../../src/utils/log/LogManager';

describe('Log Manager', () => {
  beforeEach(() => {
    logManager.resetLogsJSON();
  });

  it('Should be able to store log and retrive it', () => {
    const data = 'Some data';
    logManager.writeLog(data);
    const restoredLog = logManager.readLogs();
    expect(restoredLog[0]?.log).toBe(data);
  });

  it('Should reset JSON logs', () => {
    const logs = logManager.readLogs();
    expect(logs).toStrictEqual({});
  });
});
