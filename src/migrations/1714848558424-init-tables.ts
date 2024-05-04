import { MigrationInterface, QueryRunner } from "typeorm";

export class InitTables1714848558424 implements MigrationInterface {
    name = 'InitTables1714848558424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agents\` ADD \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`agents\` ADD \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agents\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`agents\` DROP COLUMN \`created_at\``);
    }

}
