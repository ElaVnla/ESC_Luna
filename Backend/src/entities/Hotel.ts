import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("hotels")
export class Hotel {
    @PrimaryColumn({ type: 'varchar', length: 10, collation: 'utf8mb4_bin' })
    id!: string;

    @Column({ type: "varchar", length: 255 }) // explicitly add type    
    name!: string;


    @Column({ type: "text", nullable: true })
    address!: string;

    @Column({ type: "decimal", precision: 2, scale: 1, nullable: true })
    star_rating!: number;

    @Column({ type: "decimal", precision: 2, scale: 1, nullable: true })
    guest_rating!: number;

    @Column({ type: "decimal", precision: 10, scale: 7, nullable: true })
    latitude!: number;

    @Column({ type: "decimal", precision: 10, scale: 7, nullable: true })
    longitude!: number;

    @Column({ type: "varchar", length: 50, nullable: true })
    phone_number!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    contact_email!: string;

    @Column({ type: "varchar", length: 50, nullable: true })
    fax_number!: string;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
    price!: number;

    @Column({ type: "text", nullable: true })
    amenities!: string;

    @Column({ type: "text", nullable: true })
    description!: string;

    @Column({type: "varchar", length: 20, nullable: true })
    postal_code!: string;

    @Column({type: "varchar", length: 100, nullable: true })
    city!: string;

    @Column({type: "varchar", length: 100, nullable: true })
    state!: string;

    @Column({type: "varchar", length: 2, nullable: true })
    country_code!: string;

    @Column({ type: "int", nullable: true })
    image_count!: number;

    @Column({type: "varchar", length: 10, nullable: true })
    primary_destination_id!: string;
    
    @Column({type: "varchar", length: 100, nullable: true })
    img_baseurl!: string;

    @Column({ type: "int", nullable: true })
    default_img_index!: number;

    @Column({type: "varchar", length: 5, nullable: true })
    img_suffix!: string;
    

}
