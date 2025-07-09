import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("customers")
export class Customer {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 10, nullable: true })
    salutation!: string;

    @Column({ length: 100 })
    first_name!: string;

    @Column({ length: 100 })
    last_name!: string;

    @Column({ length: 20 })
    phone_number!: string;

    @Column({ length: 100 })
    email!: string;

    @Column({ length: 20 })
    booking_id!: string;

    @Column({ type: "text", nullable: true })
    billing_address!: string;
}
