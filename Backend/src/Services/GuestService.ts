// src/Services/GuestService.ts
import { Database } from '../Database';
import { GuestModel } from '../models/GuestModel';

export async function insertGuests(guests: GuestModel[]) {
  const db = Database;

  for (const guest of guests) {
    console.log("Inserting guest:", guest);
    await db.query(`
      INSERT INTO guests (
        booking_id,
        guest_type,
        salutation,
        first_name,
        last_name,
        phone_number,
        email,
        country
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        guest.booking_id,
        guest.guest_type,
        guest.salutation,
        guest.first_name,
        guest.last_name,
        guest.phone_number,
        guest.email,
        guest.country
      ]
    );
  }
}

export async function getGuestsByBookingId(booking_id: string): Promise<GuestModel[]> {
  const db = Database;
  const rows = await db.query(`SELECT * FROM guests WHERE booking_id = ?`, [booking_id]);
  return rows.map((row: any) => new GuestModel(
    row.id,
    row.booking_id,
    row.guest_type,
    row.salutation,
    row.first_name,
    row.last_name,
    row.phone_number,
    row.email,
    row.country
  ));
}


//FLOW 2 - updating the guest details
export async function updateGuestsByBookingId(booking_id: string, guests: GuestModel[]) {
    const db = Database;
  
    // First delete existing guests for this booking
    await db.query(`DELETE FROM guests WHERE booking_id = ?`, [booking_id]);
  
    // Then re-insert updated list
    for (const guest of guests) {
      await db.query(`
        INSERT INTO guests (
          booking_id,
          guest_type,
          salutation,
          first_name,
          last_name,
          phone_number,
          email,
          country
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          booking_id,
          guest.guest_type,
          guest.salutation,
          guest.first_name,
          guest.last_name,
          guest.phone_number,
          guest.email,
          guest.country
        ]
      );
    }
  
    return { updated: guests.length };
  }
  
