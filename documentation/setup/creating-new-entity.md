# Creating New Entity

To create a new entity in TypeORM, fist you will creata a migration, run: 

```sh
yarn typeorm migration:create -n MigrationName
```

> Remember, all files must be in ther correspondent folders

After this, two methods will be generated in the migration:

```ts
export class CreateUser1647558925166 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }
```

On *up* you will create all columns for the table, and on *down* drop table if up fails.

```ts
  export class CreateUser1647558925166 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          /* NEXT COLUMNS */
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('Users');
  }
}
```

After this, you need to create your entity:

```sh
yarn typeorm entity:create -n EntityName
```

Then make your Entity according with the migration:

```ts
@Entity('users')
export class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
```

Then, you need to create a Repository, like this: 

```ts
@EntityRepository(User)
export class UsersRepositories extends Repository<User> {

}

```

After this, you need to create the Controller and Service for new entity.

On Service, all the rules, validations and operations is implemented.
Something like that:

```ts
export class CreateUserService {
  async execute(requestUser: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    missingPropWarning(userProps, requestUser);

    const {
      name, lastName, email, birthday, cpf, gender,
    } = requestUser;

    if (!validateCpf(cpf)) throw new Error('Cpf invalid!');

    if (!validateEmail(email)) throw new Error('E-mail invalid!');

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
```
 
On Controller, is implemented the Request and Response handling.
Like this:

```ts
export class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserService = new CreateUserService();

    const {
      name, lastName, email, birthday, gender, cpf,
    } = req.body;

    const user = await createUserService.execute({
      name,
      lastName,
      email,
      birthday,
      gender,
      cpf,
    });

    return res.json(user);
  }
}
```

Last, you run:

```sh
yarn typeorm migration:run
```

The table will be created in DataBase, and you can test it!

*Don't forget to create unit and integrations tests and generate documentation in Insomnia or Postman*
