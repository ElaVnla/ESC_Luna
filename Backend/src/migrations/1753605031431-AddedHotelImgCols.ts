import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedHotelImgCols1753605031431 implements MigrationInterface {
    name = 'AddedHotelImgCols1753605031431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Only add the image columns to existing hotels table
        await queryRunner.query(`ALTER TABLE \`hotels\` ADD COLUMN \`img_baseurl\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`hotels\` ADD COLUMN \`default_img_index\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`hotels\` ADD COLUMN \`img_suffix\` varchar(5) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove the image columns
        await queryRunner.query(`ALTER TABLE \`hotels\` DROP COLUMN \`img_suffix\``);
        await queryRunner.query(`ALTER TABLE \`hotels\` DROP COLUMN \`default_img_index\``);
        await queryRunner.query(`ALTER TABLE \`hotels\` DROP COLUMN \`img_baseurl\``);
    }
}