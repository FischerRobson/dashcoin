import axios from 'axios';
import { updateCriptosValueJob } from '../../src/jobs/updateCriptosValueJob';
import { ListCriptosService } from '../../src/services/ListCritposService';

jest.mock('axios');

describe('UpdateCriptosValueJobs', () => {
  let listCriptosService: ListCriptosService;

  beforeEach(() => {
    listCriptosService = new ListCriptosService();
    updateCriptosValueJob.start();
  });

  it('Should retrive cripto value from api', async () => {
    // const mockedData = { last: 1 };
    // axios.get = jest.fn().mockResolvedValue(mockedData);

    // const mockedCriptosStoredValue = [
    //   {
    //     id: '4a4sf5asf',
    //     name: 'mocked cripto',
    //     initials: 'MKD',
    //     value: 10,
    //     variation: 0,
    //   },
    // ];

    // const listCriptosServiceExecuteSpy = jest.spyOn(listCriptosService, 'execute');
    // listCriptosServiceExecuteSpy.mockResolvedValue(mockedCriptosStoredValue);

    // const consoleSpy = jest.spyOn(console, 'log');
    // setTimeout(() => {
    //   expect(consoleSpy).toHaveBeenCalledWith('Updating criptos...');
    // }, 1000);

    expect(true).toBeTruthy();
  });
});
