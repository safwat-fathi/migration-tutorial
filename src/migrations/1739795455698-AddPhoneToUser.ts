import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhoneToUser1739795455698 implements MigrationInterface {
    name = 'AddPhoneToUser1739795455698'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    }

}
