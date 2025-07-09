import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("bookings")
export class Booking {
    @PrimaryColumn()
    id!: string;

    @Column({ length: 10 })
    destination_id!: string;

    @Column({ length: 10 })
    hotel_id!: string;

    @Column({ length: 20 })
    room_id!: string;

    @Column({ type: "date" })
    start_date!: Date;

    @Column({ type: "date" })
    end_date!: Date;

    @Column({ type: "int" })
    adults!: number;

    @Column({ type: "int" })
    children!: number;

    @Column({ type: "text", nullable: true })
    message_to_hotel!: string;

    @Column({ type: "int" })
    num_nights!: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    price!: number;
}
