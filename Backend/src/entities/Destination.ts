import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("destinations")
export class Destination {
    @PrimaryColumn()
    uid!: string;

    @Column({ length: 300 })
    term!: string;

    @Column({ type: "decimal", precision: 10, scale: 7, nullable: true })
    lat!: number;

    @Column({ type: "decimal", precision: 10, scale: 7, nullable: true })
    lng!: number;

    @Column({ length: 50 })
    type!: string;

    @Column({ length: 300, nullable: true })
    state!: string;
}
