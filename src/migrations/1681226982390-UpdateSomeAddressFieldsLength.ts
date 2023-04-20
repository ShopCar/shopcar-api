import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateSomeAddressFieldsLength1681226982390 implements MigrationInterface {
    name = 'UpdateSomeAddressFieldsLength1681226982390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "stock"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "city" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "district"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "district" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "complement"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "complement" character varying(50)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "complement"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "complement" character varying(30)`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "district"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "district" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "city" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "stock" integer NOT NULL`);
    }

}
