import { MigrationInterface, QueryRunner } from "typeorm";

export class AmendGuestsAndCustomersTable1754640723317 implements MigrationInterface {
    name = 'AmendGuestsAndCustomersTable1754640723317';

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Add country and date_of_birth to `customers`
        await queryRunner.query(`
            ALTER TABLE \`customers\`
            ADD COLUMN \`country\` varchar(100) NULL,
            ADD COLUMN \`date_of_birth\` date NULL;
        `);

        // Add date_of_birth to `guests`
        await queryRunner.query(`
            ALTER TABLE \`guests\`
            ADD COLUMN \`date_of_birth\` date NULL;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop columns if they were added in the up method
        await queryRunner.query(`
            ALTER TABLE \`guests\`
            DROP COLUMN \`date_of_birth\`;
        `);

        await queryRunner.query(`
            ALTER TABLE \`customers\`
            DROP COLUMN \`country\`,
            DROP COLUMN \`date_of_birth\`;
        `);
    }
}
