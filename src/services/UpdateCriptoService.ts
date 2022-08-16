/* eslint-disable consistent-return */
import { getCustomRepository } from 'typeorm';
import { CriptosRepositories } from '../repositories/CriptosRepositories';
import { calculatePercentVariation } from '../utils/calculatePercentVariation';

export class UpdateCriptosService {
  async execute(initials: string, value: number) {
    const criptosRepositories = getCustomRepository(CriptosRepositories);

    if (!initials || !value) return;

    const cripto = await criptosRepositories.findOne({ initials });

    if (!cripto) return;

    const variation = calculatePercentVariation(value, cripto.value);
    const printableValue = Number(value);

    console.log(`Updating ${initials}: ${printableValue.toFixed(2)} ${variation.toFixed(2)}%`);

    return criptosRepositories.save({
      ...cripto,
      value,
      variation,
    });
  }
}
