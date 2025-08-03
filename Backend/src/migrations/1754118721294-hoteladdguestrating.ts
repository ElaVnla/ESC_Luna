import { MigrationInterface, QueryRunner } from "typeorm";

export class Hoteladdguestrating1754118721294 implements MigrationInterface {
    name = 'Hoteladdguestrating1754118721294'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`hotels\` 
            ADD COLUMN \`star_rating\` DECIMAL(2,1) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`hotels\` 
            ADD COLUMN \`guest_rating\` DECIMAL(2,1) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`hotels\` 
            DROP COLUMN \`rating\`
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`hotels\` 
            DROP COLUMN \`star_rating\` DECIMAL(2,1) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`hotels\` 
            DROP COLUMN \`guest_rating\` DECIMAL(2,1) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`hotels\` 
            ADD COLUMN \`rating\` DECIMAL(2,1) NOT NULL
        `);
    }

}
