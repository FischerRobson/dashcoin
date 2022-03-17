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

