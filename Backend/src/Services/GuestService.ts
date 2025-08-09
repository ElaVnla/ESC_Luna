import { Database } from '../Database';
import { GuestModel } from '../models/GuestModel';

export async function insertGuests(guests: GuestModel[]) {
  const db = Database;

  for (const guest of guests) {
    await db.query(
      `INSERT INTO guests (
        booking_id,
        guest_type,
        salutation,
        first_name,
        last_name,
        phone_number,
        email,
        date_of_birth,
        country
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        guest.booking_id,
        guest.guest_type ?? 'guest',
        guest.salutation ?? null,
        guest.first_name ?? null,
        guest.last_name ?? null,
        guest.phone_number ?? null,
        guest.email ?? null,
        (guest as any).date_of_birth ?? null, // ✅ NEW
        guest.country ?? null
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
    row.date_of_birth,
    row.country
  ));
}

export async function getGuestsCountByBookingId(booking_id: string): Promise<number> {
  const db = Database;
  const rows = await db.query(
    `SELECT COUNT(*) AS cnt FROM guests WHERE booking_id = ?`,
    [booking_id]
  );
  return Number(rows?.[0]?.cnt ?? 0);
}

export async function updateGuestsByBookingId(booking_id: string, guests: GuestModel[]) {
  const db = Database;
  await db.query(`DELETE FROM guests WHERE booking_id = ?`, [booking_id]);

  for (const guest of guests) {
    await db.query(
      `INSERT INTO guests (
        booking_id,
        guest_type,
        salutation,
        first_name,
        last_name,
        phone_number,
        email,
        date_of_birth,
        country
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        booking_id,
        guest.guest_type ?? 'guest',
        guest.salutation ?? null,
        guest.first_name ?? null,
        guest.last_name ?? null,
        guest.phone_number ?? null,
        guest.email ?? null,
        (guest as any).date_of_birth ?? null, // ✅ NEW
        guest.country ?? null
      ]
    );
  }

  return { updated: guests.length };
}
