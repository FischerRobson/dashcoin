# Update Criptos Value Job

This job aims to update the value of all critpos based on the last value marketed.<br/>
Its functionality is based on listing all registered cryptos, and from its acronym perform a request by the [Bitcoin Market API](https://www.mercadobitcoin.com.br/api-doc/). From this request, the value 'last' is used, referring to the last value marketed, then the service update of cryptos and called passing as parameters the initial and the value, performing the update of the data.

```typescript
import axios from "axios";
import cron from "node-cron";
import { URL } from "../constants/urls";
import { ListCriptosService } from "../services/ListCritposService";
import { UpdateCriptosService } from "../services/UpdateCriptoService";

const listCriptosService = new ListCriptosService();
const updateCriptosService = new UpdateCriptosService();

const getValue = async (initials: string) => {
  await axios.get(URL.MERCADO_BITCOIN(initials))
    .then(res => {
      const { last } = res.data.ticker;
      updateCriptosService.execute(initials, last);
    })
    .catch(err => console.log(err));
}

export const updateCriptosValueJob = cron.schedule('* * * * *', async () => {
  console.log('');
  console.log('Updating critpos...');

  const criptos = await listCriptosService.execute();

  const initials = criptos.map(cripto => cripto.initials);

  initials.map(getValue);
});
```