import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordToUser1739797945390 implements MigrationInterface {
    name = 'AddPasswordToUser1739797945390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
