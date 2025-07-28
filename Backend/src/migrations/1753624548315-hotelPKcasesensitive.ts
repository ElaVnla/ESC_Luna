import { MigrationInterface, QueryRunner } from "typeorm";

export class HotelPKcasesensitive1753624548315 implements MigrationInterface {
    name = 'HotelPKcasesensitive1753624548315'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Change collation of `id` column to utf8mb4_bin
        await queryRunner.query(`
            ALTER TABLE \`hotels\` 
            MODIFY COLUMN \`id\` VARCHAR(10) COLLATE utf8mb4_bin NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // (Optional) Revert back to the previous collation
        await queryRunner.query(`
            ALTER TABLE \`hotels\` 
            MODIFY COLUMN \`id\` VARCHAR(10) COLLATE utf8mb4_general_ci NOT NULL
        `);
    }
}