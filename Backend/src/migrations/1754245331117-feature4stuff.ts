import { MigrationInterface, QueryRunner } from "typeorm";

export class Feature4stuff1754245331117 implements MigrationInterface {
    name = 'Feature4stuff1754245331117';

    public async up(queryRunner: QueryRunner): Promise<void> {
        // payments table: drop old column
        await queryRunner.query(`
            ALTER TABLE \`payments\`
            DROP COLUMN \`masked_card_number\`
        `);

        // add encrypted fields
        await queryRunner.query(`
            ALTER TABLE \`payments\`
            ADD COLUMN \`encrypted_card_number\` text NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`payments\`
            ADD COLUMN \`encrypted_expiry\` text NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`payments\`
            ADD COLUMN \`encrypted_cardholder_name\` text NOT NULL
        `);

        // rooms table: update column length
        await queryRunner.query(`
            ALTER TABLE \`rooms\`
            MODIFY COLUMN \`room_type\` varchar(255) NOT NULL
        `);

        // bookings table
        await queryRunner.query(`
            ALTER TABLE \`bookings\`
            MODIFY COLUMN \`destination_id\` varchar(100) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`bookings\`
            MODIFY COLUMN \`hotel_id\` varchar(100) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`bookings\`
            MODIFY COLUMN \`room_id\` varchar(200) NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // rollback bookings
        await queryRunner.query(`
            ALTER TABLE \`bookings\`
            MODIFY COLUMN \`room_id\` varchar(20) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`bookings\`
            MODIFY COLUMN \`hotel_id\` varchar(10) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`bookings\`
            MODIFY COLUMN \`destination_id\` varchar(10) NOT NULL
        `);

        // rollback rooms: revert room_type length
        await queryRunner.query(`
            ALTER TABLE \`rooms\`
            MODIFY COLUMN \`room_type\` varchar(100) NOT NULL
        `);

        // rollback payments: remove encrypted fields
        await queryRunner.query(`
            ALTER TABLE \`payments\`
            DROP COLUMN \`encrypted_cardholder_name\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`payments\`
            DROP COLUMN \`encrypted_expiry\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`payments\`
            DROP COLUMN \`encrypted_card_number\`
        `);

        // restore masked_card_number (if you want to undo the drop)
        await queryRunner.query(`
            ALTER TABLE \`payments\`
            ADD COLUMN \`masked_card_number\` varchar(255) NOT NULL
        `);
    }
}
