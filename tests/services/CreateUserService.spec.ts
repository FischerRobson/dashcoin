import { CreateUserService } from '../../src/services/CreateUserService';

describe(`${CreateUserService.name}`, () => {
  let createUserService: CreateUserService;

  beforeEach(() => {
    createUserService = new CreateUserService();
  });

  it('Should throw error on missing props', async () => {
    const user = {
      name: 'Jhon',
      lastName: 'Doe',
      email: 'jhondoe@mail.com',
      birthday: new Date(),
      gender: 'M',
      cpf: '',
    };

    expect(async () => createUserService.execute(user)).toThrow(new Error('Missing props: cpf'));
  });
});
