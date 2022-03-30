import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { objectEmptyValuesCleaner } from '../utils/objectEmptyValuesCleaner';

// To be solved
interface IGetUserServiceProps {
  name: any;
  lastName: any;
  email: any;
  cpf: any;
}

export class GetUserService {
  async execute(getUserServiceProps: IGetUserServiceProps) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const findParams = objectEmptyValuesCleaner(getUserServiceProps);

    const user = await usersRepositories.find({
      where: [
        {
          ...findParams,
        },
      ],
    });

    return user;
  }
}
