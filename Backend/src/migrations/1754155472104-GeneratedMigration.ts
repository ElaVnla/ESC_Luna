import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratedMigration1754155472104 implements MigrationInterface {
    name = 'GeneratedMigration1754155472104'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`guests\` (\`id\` int NOT NULL AUTO_INCREMENT, \`booking_id\` varchar(200) NOT NULL, \`guest_type\` enum ('adult', 'child') NOT NULL, \`salutation\` varchar(10) NOT NULL, \`first_name\` varchar(100) NOT NULL, \`last_name\` varchar(100) NOT NULL, \`phone_number\` varchar(20) NOT NULL, \`email\` varchar(100) NOT NULL, \`country\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`destinations\` (\`uid\` varchar(255) NOT NULL, \`term\` varchar(300) NOT NULL, \`lat\` decimal(10,7) NULL, \`lng\` decimal(10,7) NULL, \`type\` varchar(50) NOT NULL, \`state\` varchar(300) NULL, PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`booking_id\` varchar(20) NOT NULL, \`payment_reference\` varchar(255) NOT NULL, \`masked_card_number\` varchar(20) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hotels\` (\`id\` varchar(10) COLLATE "utf8mb4_bin" NOT NULL, \`name\` varchar(255) NOT NULL, \`address\` text NULL, \`rating\` decimal(2,1) NULL, \`latitude\` decimal(10,7) NULL, \`longitude\` decimal(10,7) NULL, \`phone_number\` varchar(50) NULL, \`contact_email\` varchar(100) NULL, \`fax_number\` varchar(50) NULL, \`price\` decimal(10,2) NULL, \`amenities\` text NULL, \`description\` text NULL, \`postal_code\` varchar(20) NULL, \`city\` varchar(100) NULL, \`state\` varchar(100) NULL, \`country_code\` varchar(2) NULL, \`image_count\` int NULL, \`primary_destination_id\` varchar(10) NULL, \`img_baseurl\` varchar(100) NULL, \`default_img_index\` int NULL, \`img_suffix\` varchar(5) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bookings\` (\`id\` varchar(255) NOT NULL, \`destination_id\` varchar(100) NOT NULL, \`hotel_id\` varchar(100) NOT NULL, \`room_id\` varchar(200) NOT NULL, \`start_date\` date NOT NULL, \`end_date\` date NOT NULL, \`adults\` int NOT NULL, \`children\` int NOT NULL, \`message_to_hotel\` text NULL, \`num_nights\` int NOT NULL, \`price\` decimal(10,2) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rooms\` (\`id\` varchar(255) NOT NULL, \`hotel_id\` varchar(10) NOT NULL, \`room_type\` varchar(255) NOT NULL, \`normalized_description\` text NULL, \`description\` text NULL, \`long_description\` text NULL, \`amenities\` text NULL, \`price\` decimal(10,2) NULL, \`images\` text NULL, \`booking_key\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`salutation\` varchar(10) NULL, \`first_name\` varchar(100) NOT NULL, \`last_name\` varchar(100) NOT NULL, \`phone_number\` varchar(20) NOT NULL, \`email\` varchar(100) NOT NULL, \`booking_id\` varchar(20) NOT NULL, \`billing_address\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`customers\``);
        await queryRunner.query(`DROP TABLE \`rooms\``);
        await queryRunner.query(`DROP TABLE \`bookings\``);
        await queryRunner.query(`DROP TABLE \`hotels\``);
        await queryRunner.query(`DROP TABLE \`payments\``);
        await queryRunner.query(`DROP TABLE \`destinations\``);
        await queryRunner.query(`DROP TABLE \`guests\``);
    }

}
