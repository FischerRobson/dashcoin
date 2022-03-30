import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

// To be solved
interface IGetUserServiceProps {
  name: any;
  lastName: any;
  email: any;
  cpf: any;
}

export class GetUserService {
  async execute({
    cpf, email, lastName, name,
  }: IGetUserServiceProps) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    console.log(name);

    const user = await usersRepositories.findOne({
      where: [
        { name },
        { lastName },
        { cpf },
        { email },
      ],
    });

    return user;
  }
}
