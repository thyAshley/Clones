import {MigrationInterface, QueryRunner} from "typeorm";

export class createCommentsTable1610548766939 implements MigrationInterface {
    name = 'createCommentsTable1610548766939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subs" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "title" character varying NOT NULL, "description" text, "imageUrl" character varying, "bannerUrl" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "username" character varying, CONSTRAINT "UQ_2ae46b179b70ab8179597adb8c0" UNIQUE ("name"), CONSTRAINT "PK_c2311ff9e741af88151e0aa2299" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c2311ff9e741af88151e0aa229" ON "subs" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_2ae46b179b70ab8179597adb8c" ON "subs" ("name") `);
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "identifier" character varying NOT NULL, "title" character varying NOT NULL, "slug" character varying NOT NULL, "body" text, "subName" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "username" character varying, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2829ac61eff60fcec60d7274b9" ON "posts" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_152316363d20c399f934c4f74b" ON "posts" ("identifier") `);
        await queryRunner.query(`CREATE INDEX "IDX_2d82eb2bb2ddd7a6bfac8804d8" ON "posts" ("title") `);
        await queryRunner.query(`CREATE INDEX "IDX_54ddf9075260407dcfdd724857" ON "posts" ("slug") `);
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "identifier" character varying NOT NULL, "body" character varying NOT NULL, "username" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "postId" integer, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8bf68bc960f2b69e818bdb90dc" ON "comments" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8e7297165a3d53fa13b720bb11" ON "comments" ("identifier") `);
        await queryRunner.query(`ALTER TABLE "users" ADD "postsId" integer`);
        await queryRunner.query(`ALTER TABLE "subs" ADD CONSTRAINT "FK_4520ae7b26f68a13ec3e96dbbba" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_42377e3f89a203ca74d117e5961" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_cca21672314ce54982a6dd5d121" FOREIGN KEY ("subName") REFERENCES "subs"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_7f367199511081e1468b5b7393b" FOREIGN KEY ("postsId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_5d9144e84650ce78f40737e284e" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_5d9144e84650ce78f40737e284e"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_7f367199511081e1468b5b7393b"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_cca21672314ce54982a6dd5d121"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_42377e3f89a203ca74d117e5961"`);
        await queryRunner.query(`ALTER TABLE "subs" DROP CONSTRAINT "FK_4520ae7b26f68a13ec3e96dbbba"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "postsId"`);
        await queryRunner.query(`DROP INDEX "IDX_8e7297165a3d53fa13b720bb11"`);
        await queryRunner.query(`DROP INDEX "IDX_8bf68bc960f2b69e818bdb90dc"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP INDEX "IDX_54ddf9075260407dcfdd724857"`);
        await queryRunner.query(`DROP INDEX "IDX_2d82eb2bb2ddd7a6bfac8804d8"`);
        await queryRunner.query(`DROP INDEX "IDX_152316363d20c399f934c4f74b"`);
        await queryRunner.query(`DROP INDEX "IDX_2829ac61eff60fcec60d7274b9"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP INDEX "IDX_2ae46b179b70ab8179597adb8c"`);
        await queryRunner.query(`DROP INDEX "IDX_c2311ff9e741af88151e0aa229"`);
        await queryRunner.query(`DROP TABLE "subs"`);
    }

}
