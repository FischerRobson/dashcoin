/* eslint-disable indent */
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('criptos')
export class Cripto {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  initials: string;

  @Column()
  value: number;

  @Column()
  variation: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
      this.variation = 0;
    }
  }
}
