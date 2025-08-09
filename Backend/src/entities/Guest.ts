import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("guests")
export class Guest {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 200 })
  booking_id!: string;

  @Column({ type: "enum", enum: ["adult", "child"] })
  guest_type!: "adult" | "child";

  @Column({ type: "varchar", length: 10 })
  salutation!: string;

  @Column({ type: "varchar", length: 100 })
  first_name!: string;

  @Column({ type: "varchar", length: 100 })
  last_name!: string;

  @Column({ type: "varchar", length: 20 })
  phone_number!: string;

  @Column({ type: "varchar", length: 100 })
  email!: string;

  @Column({ type: "varchar", length: 100 })
  country!: string;  // Added country for the remaining guest

  @Column({ type: "date", nullable: true })
  date_of_birth!: string;  // Added date_of_birth for the remaining guest
}
