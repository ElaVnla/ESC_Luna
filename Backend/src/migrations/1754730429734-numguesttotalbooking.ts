import { MigrationInterface, QueryRunner } from "typeorm";

export class Numguesttotalbooking1754730429734 implements MigrationInterface {
    name = 'Numguesttotalbooking1754730429734'

     public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE bookings ADD COLUMN guests_total INT NOT NULL DEFAULT 1`);
    await queryRunner.query(`ALTER TABLE bookings DROP COLUMN adults`);
    await queryRunner.query(`ALTER TABLE bookings DROP COLUMN children`);
    await queryRunner.query(`ALTER TABLE payments ADD COLUMN amount BIGINT NULL`);
    await queryRunner.query(`ALTER TABLE payments ADD COLUMN currency VARCHAR(10) NULL`);
    await queryRunner.query(`ALTER TABLE payments ADD COLUMN status VARCHAR(32) NULL`);
    await queryRunner.query(`ALTER TABLE bookings MODIFY id VARCHAR(100) NOT NULL`);
    await queryRunner.query(`ALTER TABLE payments MODIFY id VARCHAR(100) NOT NULL`);
    await queryRunner.query(`ALTER TABLE customers MODIFY booking_id VARCHAR(100) NOT NULL`);
    await queryRunner.query(`ALTER TABLE payments MODIFY booking_id VARCHAR(100) NOT NULL`);
    await queryRunner.query(`ALTER TABLE payments MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT`);
    // await queryRunner.query(`ALTER TABLE payments ADD PRIMARY KEY (id)`); // safe if already PK
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE bookings ADD COLUMN adults INT NULL`);
    await queryRunner.query(`ALTER TABLE bookings ADD COLUMN children INT NULL`);
    await queryRunner.query(`ALTER TABLE bookings DROP COLUMN guests_total`);
    await queryRunner.query(`ALTER TABLE payments DROP COLUMN status`);
    await queryRunner.query(`ALTER TABLE payments DROP COLUMN currency`);
    await queryRunner.query(`ALTER TABLE payments DROP COLUMN amount`);
    await queryRunner.query(`ALTER TABLE bookings MODIFY id VARCHAR(20) NOT NULL`);
    await queryRunner.query(`ALTER TABLE payments MODIFY id VARCHAR(20) NOT NULL`);
    await queryRunner.query(`ALTER TABLE customers MODIFY booking_id VARCHAR(20) NOT NULL`);
    await queryRunner.query(`ALTER TABLE payments MODIFY booking_id VARCHAR(20) NOT NULL`);
  }

}
