import { getCustomRepository } from 'typeorm';
import { CriptosRepositories } from '../repositories/CriptosRepositories';

interface ICriptoRequest {
  name: string;
  initials: string;
  value: number;
}

export class CreateCriptoService {
  async execute({ name, initials, value }: ICriptoRequest) {
    const criptosRepositories = getCustomRepository(CriptosRepositories);

    if (!name || !initials || !value) {
      throw new Error('Invalid infos!');
    }

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
