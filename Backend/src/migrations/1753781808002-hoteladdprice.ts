import { MigrationInterface, QueryRunner } from "typeorm";

export class Hoteladdprice1753781808002 implements MigrationInterface {
    name = 'Hoteladdprice1753781808002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`hotels\` 
            ADD COLUMN \`price\` DECIMAL(10,2) NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`hotels\` 
            DROP COLUMN \`price\`
        `);
    }
}
