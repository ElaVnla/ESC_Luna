// src/entities/Payment.ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("payments")
export class Payment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  booking_id!: string;

  @Column({ type: "varchar", length: 255 })
  payment_reference!: string;

  @Column({ type: "varchar", length: 255 })
  stripe_payment_intent_id!: string;

  // Amount in the smallest currency unit (e.g., cents).
  // Use string for MySQL BIGINT to avoid precision issues.
  @Column({ type: "bigint", nullable: true })
  amount!: string | null;

  @Column({ type: "varchar", length: 10, nullable: true })
  currency!: string | null;

  @Column({ type: "varchar", length: 32, nullable: true })
  status!: string | null;

  @Column({ type: "text", nullable: true })
  encrypted_cardholder_name!: string | null;
}
