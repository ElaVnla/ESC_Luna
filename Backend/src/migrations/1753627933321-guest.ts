import { MigrationInterface, QueryRunner } from "typeorm";

export class Guest1753627933321 implements MigrationInterface {
    name = 'Guest1753627933321'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`guests\` (\`id\` int NOT NULL AUTO_INCREMENT, \`booking_id\` varchar(100) NOT NULL, \`guest_type\` enum ('adult', 'child') NOT NULL, \`salutation\` varchar(10) NOT NULL, \`first_name\` varchar(50) NOT NULL, \`last_name\` varchar(50) NOT NULL, \`phone_number\` varchar(20) NOT NULL, \`email\` varchar(100) NOT NULL, \`country\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`id\` varchar(255) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`room_type\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`room_type\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rooms\` CHANGE \`price\` \`price\` decimal(10,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`booking_key\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`booking_key\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`hotels\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`hotels\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`hotels\` CHANGE \`latitude\` \`latitude\` decimal(10,7) NULL`);
        await queryRunner.query(`ALTER TABLE \`hotels\` CHANGE \`longitude\` \`longitude\` decimal(10,7) NULL`);
        await queryRunner.query(`ALTER TABLE \`destinations\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`destinations\` DROP COLUMN \`uid\``);
        await queryRunner.query(`ALTER TABLE \`destinations\` ADD \`uid\` varchar(255) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`destinations\` CHANGE \`lat\` \`lat\` decimal(10,7) NULL`);
        await queryRunner.query(`ALTER TABLE \`destinations\` CHANGE \`lng\` \`lng\` decimal(10,7) NULL`);
        await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`payment_reference\``);
        await queryRunner.query(`ALTER TABLE \`payments\` ADD \`payment_reference\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bookings\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`bookings\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`bookings\` ADD \`id\` varchar(255) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`bookings\` CHANGE \`price\` \`price\` decimal(10,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bookings\` CHANGE \`price\` \`price\` decimal NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bookings\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`bookings\` ADD \`id\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bookings\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`payment_reference\``);
        await queryRunner.query(`ALTER TABLE \`payments\` ADD \`payment_reference\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`destinations\` CHANGE \`lng\` \`lng\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`destinations\` CHANGE \`lat\` \`lat\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`destinations\` DROP COLUMN \`uid\``);
        await queryRunner.query(`ALTER TABLE \`destinations\` ADD \`uid\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`destinations\` ADD PRIMARY KEY (\`uid\`)`);
        await queryRunner.query(`ALTER TABLE \`hotels\` CHANGE \`longitude\` \`longitude\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`hotels\` CHANGE \`latitude\` \`latitude\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`hotels\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`hotels\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`booking_key\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`booking_key\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`rooms\` CHANGE \`price\` \`price\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`room_type\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`room_type\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`id\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`DROP TABLE \`guests\``);
    }

}
