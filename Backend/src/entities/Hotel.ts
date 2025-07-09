import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("hotels")
export class Hotel {
    @PrimaryColumn()
    id!: string;

    @Column({ length: 255 })
    name!: string;

    @Column({ type: "text", nullable: true })
    address!: string;

    @Column({ type: "decimal", precision: 2, scale: 1, nullable: true })
    rating!: number;

    @Column({ type: "decimal", precision: 10, scale: 7, nullable: true })
    latitude!: number;

    @Column({ type: "decimal", precision: 10, scale: 7, nullable: true })
    longitude!: number;

    @Column({ length: 50, nullable: true })
    phone_number!: string;

    @Column({ length: 100, nullable: true })
    contact_email!: string;

    @Column({ length: 50, nullable: true })
    fax_number!: string;

    @Column({ type: "text", nullable: true })
    amenities!: string;

    @Column({ type: "text", nullable: true })
    description!: string;

    @Column({ length: 20, nullable: true })
    postal_code!: string;

    @Column({ length: 100, nullable: true })
    city!: string;

    @Column({ length: 100, nullable: true })
    state!: string;

    @Column({ length: 2, nullable: true })
    country_code!: string;

    @Column({ type: "int", nullable: true })
    image_count!: number;

    @Column({ length: 10, nullable: true })
    primary_destination_id!: string;
}
