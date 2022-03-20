import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { validateCpf } from '../utils/validateCpf';

interface IUserRequest {
  name: string;
  lastName: string;
  birthday: Date;
  gender: string;
  cpf: string;
}

export class CreateUserService {
  async execute({
    name, lastName, birthday, gender, cpf,
  }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    if (!name || !lastName || !birthday || !gender, !cpf) {
      throw new Error('Missing properties');
    }

    if (!validateCpf(cpf)) throw new Error('Cpf invalid!');

    const userAlreadyExists = await usersRepositories.findOne({ cpf });

    if (userAlreadyExists) throw new Error('This Cpf is linked with other user!');

    const user = usersRepositories.create({
      name,
      lastName,
      birthday,
      gender,
      cpf,
    });

    await usersRepositories.save(user);

    return user;
  }
}
