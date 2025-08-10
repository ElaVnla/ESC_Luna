import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("rooms")
export class Room {
  // store the API room key here (UUID)
  @PrimaryColumn({ type: 'varchar', length: 100 })
  id!: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  hotel_id?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  room_type?: string;

  @Column({ type: 'longtext', nullable: true })
  normalized_description?: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'longtext', nullable: true })
  long_description?: string;

  @Column({ type: 'simple-json', nullable: true })
  amenities?: string[];            // stored as JSON text

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price?: number;

  @Column({ type: 'simple-json', nullable: true })
  images?: any[];                  // stored as JSON text

  @Column({ type: 'varchar', length: 255, nullable: true })
  booking_key?: string;
}
