import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterCarEntity1681190354565 implements MigrationInterface {
    name = 'AlterCarEntity1681190354565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "stock"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ADD "stock" integer NOT NULL`);
    }

}
