import { MigrationInterface, QueryRunner } from "typeorm";

export class Amendbooking1754280114029 implements MigrationInterface {
  name = 'Amendbooking1754280114029';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE \`bookings\`
      ADD COLUMN \`currency\` VARCHAR(10) NOT NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE \`bookings\`
      DROP COLUMN \`currency\`
    `);
  }
}
