import { getCustomRepository } from 'typeorm';
import { CriptosRepositories } from '../repositories/CriptosRepositories';

export class GetCriptoService {
  async execute(initials: string) {
    const criptosRepositories = getCustomRepository(CriptosRepositories);

    const cripto = await criptosRepositories.findOne({ initials });

    return cripto;
  }
}
