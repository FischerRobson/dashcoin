import { getCustomRepository } from 'typeorm';
import { CriptosRepositories } from '../repositories/CriptosRepositories';
import { missingPropWarning } from '../utils/missingPropWarning';

interface ICriptoRequest {
  name: string;
  initials: string;
  value: number;
}

const criptoProps = ['name', 'initials', 'value'];

export class CreateCriptoService {
  async execute(requestCripto: ICriptoRequest) {
    const criptosRepositories = getCustomRepository(CriptosRepositories);

    missingPropWarning(criptoProps, requestCripto);

    const { name, initials, value } = requestCripto;

    const criptoAlreadyExists = await criptosRepositories.findOne({ initials });

    if (criptoAlreadyExists) throw new Error('Cripto already exists!');

    const cripto = criptosRepositories.create({
      name,
      initials,
      value,
    });

    await criptosRepositories.save(cripto);

    return cripto;
  }
}
