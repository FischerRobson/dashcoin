import { getCustomRepository } from "typeorm";
import { CriptosRepositories } from "../repositories/CriptosRepositories";

export class UpdateCriptosService {
  async execute(initials: string, value: number) {
    const criptosRepositories = getCustomRepository(CriptosRepositories);

    if (!initials || !value) return;

    const cripto = await criptosRepositories.findOne({ initials });

    console.log(`Updating ${initials}: ${value}`);

    return criptosRepositories.save({
      ...cripto,
      value
    });
  }
}
