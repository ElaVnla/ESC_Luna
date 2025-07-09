import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("payments")
export class Payment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 20 })
    booking_id!: string;

    @Column({ length: 255 })
    payment_reference!: string;

    @Column({ length: 20 })
    masked_card_number!: string;
}
