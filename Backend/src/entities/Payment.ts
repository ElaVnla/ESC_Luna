import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("payments")
export class Payment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 20 })
  booking_id!: string;

  @Column({ length: 255 })
  payment_reference!: string;

  @Column({ type: 'text' }) // long encrypted strings
  encrypted_card_number!: string;

  @Column({ type: 'text' })
  encrypted_expiry!: string;

  @Column({ type: 'text' })
  encrypted_cardholder_name!: string;
}
