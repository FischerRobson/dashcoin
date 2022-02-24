import { getCustomRepository } from 'typeorm';
import { CriptosRepositories } from '../repositories/CriptosRepositories';

export class ListCriptosService {
  async execute() {
    const criptosRepositories = getCustomRepository(CriptosRepositories);

    const criptos = criptosRepositories.find();

    return criptos;
  }
}
