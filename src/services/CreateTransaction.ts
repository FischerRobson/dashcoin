import { Repository } from 'typeorm';
import { Transaction } from '../entities/Transaction';
import { CreateTransactionData, CreateTransactions } from './types/CreateTransactions';

export class CreateTransactionService implements CreateTransactions {
  constructor(private transactionsRepository: Repository<Transaction>) {
    this.transactionsRepository = transactionsRepository;
  }

  async execute({ value }: CreateTransactionData): Promise<void> {
    const newValue = value;

    const transaction = this.transactionsRepository.create({});
    await this.transactionsRepository.save(transaction);
  }
}
