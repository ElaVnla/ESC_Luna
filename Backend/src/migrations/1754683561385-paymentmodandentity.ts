import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterPaymentsTable1754760000001 implements MigrationInterface {
  name = 'AlterPaymentsTable1754760000001'

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Remove old columns
    await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`encrypted_card_number\``);
    await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`encrypted_expiry\``);

    // Add new column
    await queryRunner.query(`ALTER TABLE \`payments\` ADD COLUMN \`stripe_payment_intent_id\` varchar(255) NOT NULL`);

    // Modify column to allow nulls
    await queryRunner.query(`ALTER TABLE \`payments\` MODIFY \`encrypted_cardholder_name\` text NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Revert nullable change
    await queryRunner.query(`ALTER TABLE \`payments\` MODIFY \`encrypted_cardholder_name\` text NOT NULL`);

    // Remove new column
    await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`stripe_payment_intent_id\``);

    // Restore removed columns
    await queryRunner.query(`ALTER TABLE \`payments\` ADD COLUMN \`encrypted_card_number\` text NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`payments\` ADD COLUMN \`encrypted_expiry\` text NOT NULL`);
  }
}
