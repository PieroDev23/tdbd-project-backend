import { MigrationInterface, QueryRunner } from "typeorm";

export class InitTables1714847943883 implements MigrationInterface {
    name = 'InitTables1714847943883'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`weapons\` (\`weapon_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`weapon_type\` enum ('ASSAULT_RIFFLE', 'PISTOL', 'SNIPER') NOT NULL, \`price\` int NOT NULL, \`damage\` int NOT NULL, \`rate_of_fire\` int NOT NULL, \`accuracy\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`weapon_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`agents\` (\`agent_id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`agent_role\` enum ('DUELIST', 'INTIATORS', 'SENTINELS', 'CONTROLLERS') NOT NULL, \`primary_skill\` varchar(255) NOT NULL, \`secondary_skill\` varchar(255) NOT NULL, \`tertiary_skill\` varchar(255) NOT NULL, \`ultimate\` varchar(255) NOT NULL, PRIMARY KEY (\`agent_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`players_profiles\` (\`profile_id\` varchar(255) NOT NULL, \`region\` varchar(255) NOT NULL, \`profile_image_url\` varchar(255) NOT NULL, \`global_rank\` int NOT NULL, \`regional_rank\` int NOT NULL, \`league\` enum ('UNRAKEND', 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND', 'IMMORTAL', 'RADIANT') NOT NULL DEFAULT 'UNRAKEND', \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`main_character\` varchar(36) NULL, \`main_weapon\` varchar(36) NULL, UNIQUE INDEX \`REL_8c8401821ca5e3d8651822108d\` (\`main_character\`), UNIQUE INDEX \`REL_682f33562537892b9b1846e449\` (\`main_weapon\`), PRIMARY KEY (\`profile_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`players\` (\`player_id\` varchar(36) NOT NULL, \`nickname\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`profile_id\` varchar(36) NULL, UNIQUE INDEX \`REL_ce407ccc96418cd7fa857edead\` (\`profile_id\`), PRIMARY KEY (\`player_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`teams\` (\`team_id\` varchar(36) NOT NULL, \`team_color\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`team_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`matches\` (\`match_id\` varchar(36) NOT NULL, \`date_ini\` datetime NOT NULL, \`date_end\` datetime NOT NULL, \`game_mode\` enum ('DTM', 'RNK', 'CUS') NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`match_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`stadistics\` (\`stadisctic_id\` varchar(36) NOT NULL, \`deaths\` int NOT NULL DEFAULT '0', \`kills\` int NOT NULL DEFAULT '0', \`assistances\` int NOT NULL DEFAULT '0', \`money\` int NOT NULL DEFAULT '0', \`winning_rounds\` int NOT NULL DEFAULT '0', \`loosing_rounds\` int NOT NULL DEFAULT '0', \`player_behavior\` enum ('CHEATER', 'NORMAL') NOT NULL DEFAULT 'NORMAL', \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`player_id\` varchar(36) NULL, \`match_id\` varchar(36) NULL, UNIQUE INDEX \`REL_b2e60684d04ad1eb4218ca7dec\` (\`player_id\`), UNIQUE INDEX \`REL_b57058ddeae39f5a66312df1a4\` (\`match_id\`), PRIMARY KEY (\`stadisctic_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`black_list\` (\`register_id\` varchar(36) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`player_id\` varchar(36) NULL, UNIQUE INDEX \`REL_c4a66639f834c80d8784234775\` (\`player_id\`), PRIMARY KEY (\`register_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`maps\` (\`map_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`map_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`team_players\` (\`team_id\` varchar(36) NOT NULL, \`player_id\` varchar(36) NOT NULL, INDEX \`IDX_d1c561e231a8067e2f7a403426\` (\`team_id\`), INDEX \`IDX_187fdfeb2ca268cf6b93e89ce1\` (\`player_id\`), PRIMARY KEY (\`team_id\`, \`player_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`players_profiles\` ADD CONSTRAINT \`FK_8c8401821ca5e3d8651822108de\` FOREIGN KEY (\`main_character\`) REFERENCES \`agents\`(\`agent_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`players_profiles\` ADD CONSTRAINT \`FK_682f33562537892b9b1846e4495\` FOREIGN KEY (\`main_weapon\`) REFERENCES \`weapons\`(\`weapon_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`players\` ADD CONSTRAINT \`FK_ce407ccc96418cd7fa857edead8\` FOREIGN KEY (\`profile_id\`) REFERENCES \`players_profiles\`(\`profile_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stadistics\` ADD CONSTRAINT \`FK_b2e60684d04ad1eb4218ca7dec4\` FOREIGN KEY (\`player_id\`) REFERENCES \`players\`(\`player_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stadistics\` ADD CONSTRAINT \`FK_b57058ddeae39f5a66312df1a41\` FOREIGN KEY (\`match_id\`) REFERENCES \`matches\`(\`match_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`black_list\` ADD CONSTRAINT \`FK_c4a66639f834c80d8784234775d\` FOREIGN KEY (\`player_id\`) REFERENCES \`players\`(\`player_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`team_players\` ADD CONSTRAINT \`FK_d1c561e231a8067e2f7a403426c\` FOREIGN KEY (\`team_id\`) REFERENCES \`teams\`(\`team_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`team_players\` ADD CONSTRAINT \`FK_187fdfeb2ca268cf6b93e89ce12\` FOREIGN KEY (\`player_id\`) REFERENCES \`players\`(\`player_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`team_players\` DROP FOREIGN KEY \`FK_187fdfeb2ca268cf6b93e89ce12\``);
        await queryRunner.query(`ALTER TABLE \`team_players\` DROP FOREIGN KEY \`FK_d1c561e231a8067e2f7a403426c\``);
        await queryRunner.query(`ALTER TABLE \`black_list\` DROP FOREIGN KEY \`FK_c4a66639f834c80d8784234775d\``);
        await queryRunner.query(`ALTER TABLE \`stadistics\` DROP FOREIGN KEY \`FK_b57058ddeae39f5a66312df1a41\``);
        await queryRunner.query(`ALTER TABLE \`stadistics\` DROP FOREIGN KEY \`FK_b2e60684d04ad1eb4218ca7dec4\``);
        await queryRunner.query(`ALTER TABLE \`players\` DROP FOREIGN KEY \`FK_ce407ccc96418cd7fa857edead8\``);
        await queryRunner.query(`ALTER TABLE \`players_profiles\` DROP FOREIGN KEY \`FK_682f33562537892b9b1846e4495\``);
        await queryRunner.query(`ALTER TABLE \`players_profiles\` DROP FOREIGN KEY \`FK_8c8401821ca5e3d8651822108de\``);
        await queryRunner.query(`DROP INDEX \`IDX_187fdfeb2ca268cf6b93e89ce1\` ON \`team_players\``);
        await queryRunner.query(`DROP INDEX \`IDX_d1c561e231a8067e2f7a403426\` ON \`team_players\``);
        await queryRunner.query(`DROP TABLE \`team_players\``);
        await queryRunner.query(`DROP TABLE \`maps\``);
        await queryRunner.query(`DROP INDEX \`REL_c4a66639f834c80d8784234775\` ON \`black_list\``);
        await queryRunner.query(`DROP TABLE \`black_list\``);
        await queryRunner.query(`DROP INDEX \`REL_b57058ddeae39f5a66312df1a4\` ON \`stadistics\``);
        await queryRunner.query(`DROP INDEX \`REL_b2e60684d04ad1eb4218ca7dec\` ON \`stadistics\``);
        await queryRunner.query(`DROP TABLE \`stadistics\``);
        await queryRunner.query(`DROP TABLE \`matches\``);
        await queryRunner.query(`DROP TABLE \`teams\``);
        await queryRunner.query(`DROP INDEX \`REL_ce407ccc96418cd7fa857edead\` ON \`players\``);
        await queryRunner.query(`DROP TABLE \`players\``);
        await queryRunner.query(`DROP INDEX \`REL_682f33562537892b9b1846e449\` ON \`players_profiles\``);
        await queryRunner.query(`DROP INDEX \`REL_8c8401821ca5e3d8651822108d\` ON \`players_profiles\``);
        await queryRunner.query(`DROP TABLE \`players_profiles\``);
        await queryRunner.query(`DROP TABLE \`agents\``);
        await queryRunner.query(`DROP TABLE \`weapons\``);
    }

}
