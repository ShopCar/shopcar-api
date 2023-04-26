import { MigrationInterface, QueryRunner } from "typeorm";

export class AddResetTokenFieldAtUserEntity1682478684162 implements MigrationInterface {
    name = 'AddResetTokenFieldAtUserEntity1682478684162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "deletedAt" TO "resetToken"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "resetToken"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "resetToken" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "resetToken"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "resetToken" date`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "resetToken" TO "deletedAt"`);
    }

}
