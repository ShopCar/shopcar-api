import { MigrationInterface, QueryRunner } from "typeorm";

export class Imagenewbase1683808733624 implements MigrationInterface {
    name = 'Imagenewbase1683808733624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "imagesBase64" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cover" boolean NOT NULL, "imagemBase64" text NOT NULL, "carId" uuid, CONSTRAINT "PK_e6129f9ed5223d15a56e2b464cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "imagesBase64" ADD CONSTRAINT "FK_b92136eec735f9ec1b6298c5482" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imagesBase64" DROP CONSTRAINT "FK_b92136eec735f9ec1b6298c5482"`);
        await queryRunner.query(`DROP TABLE "imagesBase64"`);
    }

}
