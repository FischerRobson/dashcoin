import { EntityRepository, Repository } from 'typeorm';
import { Transaction } from '../entities/Transaction';


@EntityRepository(Transaction);
export class TransactionsRepositories extends Repository<Transaction> {

}
