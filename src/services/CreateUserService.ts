import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { missingPropWarning } from '../utils/missingPropWarning';
import { validateCpf } from '../utils/validateCpf';

interface IUserRequest {
  name: string;
  lastName: string;
  email: string;
  birthday: Date;
  gender: string;
  cpf: string;
}

const userProps = [
  'name',
  'lastName',
  'email',
  'birthday',
  'gender',
  'cpf',
];

export class CreateUserService {
  async execute(requestUser: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    missingPropWarning(userProps, requestUser);

    const {
      name, lastName, email, birthday, cpf, gender,
    } = requestUser;

    if (!validateCpf(cpf)) throw new Error('Cpf invalid!');

    const userAlreadyExists = await usersRepositories.findOne({ cpf });

    if (userAlreadyExists) throw new Error('This Cpf is linked with other user!');

    const user = usersRepositories.create({
      name,
      lastName,
      email,
      birthday,
      gender,
      cpf,
    });

    await usersRepositories.save(user);

    return user;
  }
}
