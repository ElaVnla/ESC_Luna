import { Entity, Column, PrimaryColumn, Unique } from "typeorm";

@Entity("hotel_prices")
export class HotelPrices {
    @PrimaryColumn({ type: 'varchar', length: 10, collation: 'utf8mb4_bin' })
    id!: string;

    @PrimaryColumn({ type: "date" })
    checkin_date!: string;

    @PrimaryColumn({ type: "date" })
    checkout_date!: string;

    @PrimaryColumn({ type: "int" })
    guests!: number;

    @PrimaryColumn({ type: "int" })
    rooms!: number;

    @Column({ type: "varchar", length: 10 })
    currency!: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    total_price!: number;
}
