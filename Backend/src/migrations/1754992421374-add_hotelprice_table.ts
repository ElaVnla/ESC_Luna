import { MigrationInterface, QueryRunner } from "typeorm";

export class AddHotelpriceTable1754992421374 implements MigrationInterface {
    name = 'AddHotelpriceTable1754992421374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`hotel_prices\` (
                \`id\` varchar(10) NOT NULL,
                \`checkin_date\` date NOT NULL,
                \`checkout_date\` date NOT NULL,
                \`guests\` int NOT NULL,
                \`rooms\` int NOT NULL,
                \`currency\` varchar(10) NOT NULL,
                \`total_price\` decimal(10,2) NOT NULL,
                PRIMARY KEY (\`id\`, \`checkin_date\`, \`checkout_date\`, \`guests\`, \`rooms\`)
            )
        `);
        await queryRunner.query(`
            ALTER TABLE \`hotels\` 
            DROP COLUMN \`price\`
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`hotel_prices\``);
        await queryRunner.query(`
            ALTER TABLE \`hotels\` 
            ADD COLUMN \`price\` DECIMAL(10,2) NOT NULL
        `);
    }

}
