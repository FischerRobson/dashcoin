import axios from 'axios';
import cron from 'node-cron';
import { URL } from '../constants/urls';
import { ListCriptosService } from '../services/ListCritposService';
import { UpdateCriptosService } from '../services/UpdateCriptoService';

const listCriptosService = new ListCriptosService();
const updateCriptosService = new UpdateCriptosService();

const getValue = async (initials: string) => {
  if (initials === 'TET') return;
  await axios.get(URL.MERCADO_BITCOIN(initials))
    .then((res) => {
      const { last } = res.data.ticker;
      updateCriptosService.execute(initials, last);
    })
    .catch((err) => console.log(`Error while updating ${initials}`));
};

export const updateCriptosValueJob = cron.schedule('* * * * *', async () => {
  console.log('');
  console.log('Updating critpos...');

  const criptos = await listCriptosService.execute();

  const initials = criptos.map((cripto) => cripto.initials);

  initials.map(getValue);
});
