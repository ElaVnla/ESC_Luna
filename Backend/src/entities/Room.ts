import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("rooms")
export class Room {
    @PrimaryColumn()
    id!: string;

    @Column({ length: 10 })
    hotel_id!: string;

    @Column({ length: 255 })
    room_type!: string;

    @Column({ type: "text", nullable: true })
    normalized_description!: string;

    @Column({ type: "text", nullable: true })
    description!: string;

    @Column({ type: "text", nullable: true })
    long_description!: string;

    @Column({ type: "text", nullable: true })
    amenities!: string;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
    price!: number;

    @Column({ type: "text", nullable: true })
    images!: string;

    @Column({ length: 255, nullable: true })
    booking_key!: string;
}
