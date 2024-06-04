import { MigrationInterface, QueryRunner } from "typeorm";

export class Newmigration1717468497554 implements MigrationInterface {
    name = 'Newmigration1717468497554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agents\` ADD \`agent_url\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agents\` DROP COLUMN \`agent_url\``);
    }

}
