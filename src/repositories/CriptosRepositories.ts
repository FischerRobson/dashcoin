import { EntityRepository, Repository } from 'typeorm';
import { Cripto } from '../entities/Cripto';

@EntityRepository(Cripto)
export class CriptosRepositories extends Repository<Cripto> {

}
