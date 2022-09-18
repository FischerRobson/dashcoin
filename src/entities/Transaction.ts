/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import {
  Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Cripto } from './Cripto';
import { User } from './User';

@Entity()
export class Transaction {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  amount: number;

  @CreateDateColumn()
  dateTime: Date;

  @OneToOne((type) => User) @JoinColumn()
  user: User;

  @OneToOne((type) => Cripto) @JoinColumn()
  cripto: Cripto;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
