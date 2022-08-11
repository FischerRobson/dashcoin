import { Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class Transaction {
  @PrimaryColumn()
  readonly id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
