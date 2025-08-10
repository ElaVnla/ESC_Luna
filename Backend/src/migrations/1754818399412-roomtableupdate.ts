import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterRoomsMatchEntity1754820000000 implements MigrationInterface {
  name = 'AlterRoomsMatchEntity1754820000000'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE \`rooms\`
      MODIFY \`id\` varchar(100) NOT NULL,
      MODIFY \`hotel_id\` varchar(200) NULL,
      MODIFY \`room_type\` varchar(255) NULL,
      MODIFY \`normalized_description\` longtext NULL,
      MODIFY \`description\` text NULL,
      MODIFY \`long_description\` longtext NULL,
      MODIFY \`amenities\` longtext NULL,
      MODIFY \`price\` decimal(10,2) NULL,
      MODIFY \`images\` longtext NULL,
      MODIFY \`booking_key\` varchar(255) NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    /* revert to your previous rooms schema */
    await queryRunner.query(`
      ALTER TABLE \`rooms\`
      MODIFY \`id\` varchar(36) NOT NULL,
      MODIFY \`hotel_id\` varchar(10) NOT NULL,
      MODIFY \`room_type\` varchar(255) NOT NULL,
      MODIFY \`normalized_description\` longtext NULL,
      MODIFY \`description\` text NULL,
      MODIFY \`long_description\` longtext NULL,
      MODIFY \`amenities\` text NULL,
      MODIFY \`price\` decimal(10,2) NULL,
      MODIFY \`images\` text NULL,
      MODIFY \`booking_key\` varchar(64) NULL
    `);
  }
}
