import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAddressToUser1739795226860 implements MigrationInterface {
  name = 'AddAddressToUser1739795226860';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "address" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
  }
}
