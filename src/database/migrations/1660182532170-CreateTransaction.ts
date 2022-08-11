import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTransaction1660182532170 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Transactions',
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
    queryRunner.dropTable('Transactions');
  }
}
