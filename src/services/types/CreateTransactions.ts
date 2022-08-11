/* eslint-disable no-unused-vars */
export interface CreateTransactionData {
  value: number;
}

export interface CreateTransactions {
  execute: (data: CreateTransactionData) => Promise<void>;
}
