import { Database } from '../Database';

// booking = { id, destination_id, hotel_id, room_id, start_date, end_date, message_to_hotel, num_nights, price, currency, guests_total }
export async function createBooking(
  booking: any,
  customer: any,
  guests: any[] = []
) {
  const db = Database;

  // 1) Insert booking — ❗️use guests_total (no adults/children)
  await db.query(
    `INSERT INTO bookings (
      id, destination_id, hotel_id, room_id,
      start_date, end_date,
      message_to_hotel, num_nights, price, currency,
      guests_total
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      booking.id,
      booking.destination_id,
      booking.hotel_id,
      booking.room_id,
      booking.start_date,
      booking.end_date,
      booking.message_to_hotel ?? null,
      booking.num_nights ?? null,
      booking.price,
      booking.currency,
      booking.guests_total ?? 1,
    ]
  );

  // 2) Insert main customer — ✅ add country, date_of_birth
  await db.query(
    `INSERT INTO customers (
      salutation, first_name, last_name,
      phone_number, email, booking_id, billing_address,
      country, date_of_birth
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      customer.salutation ?? null,
      customer.first_name,
      customer.last_name,
      customer.phone_number ?? null,
      customer.email,
      booking.id,
      customer.billing_address ?? null,
      customer.country ?? null,         // ✅ NEW
      customer.date_of_birth ?? null,   // ✅ NEW (YYYY-MM-DD)
    ]
  );

  // 3) DO NOT insert payments here; payments are written by /payments/create after Stripe success

  // 4) Insert remaining guests — ✅ include date_of_birth & country
  console.log('Inserting guests BACKEND:', guests);
  for (const guest of guests) {
    await db.query(
      `INSERT INTO guests (
        booking_id, guest_type, salutation, first_name,
        last_name, phone_number, email, date_of_birth, country
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        booking.id,
        guest.guest_type ?? 'guest',
        guest.salutation ?? null,
        guest.first_name ?? null,
        guest.last_name ?? null,
        guest.phone_number ?? null,
        guest.email ?? null,
        guest.date_of_birth ?? null, // ✅ NEW
        guest.country ?? null,       // ✅ ensure set
      ]
    );
  }

  return booking.id;
}

export async function cancelBooking(bookingId: string) {
  const db = Database;
  await db.query(`DELETE FROM guests WHERE booking_id = ?`, [bookingId]);
  await db.query(`DELETE FROM payments WHERE booking_id = ?`, [bookingId]);
  await db.query(`DELETE FROM customers WHERE booking_id = ?`, [bookingId]);
  await db.query(`DELETE FROM bookings WHERE id = ?`, [bookingId]);
}

export async function getHotelIdFromBooking(bookingId: string): Promise<string | null> {
  const db = Database;
  const result = await db.query(`SELECT hotel_id FROM bookings WHERE id = ?`, [bookingId]);
  return result.length > 0 ? result[0].hotel_id : null;
}

export async function getBookedRoomId(hotelId: string, checkIn: string, checkOut: string): Promise<string[] | null> {
  const db = Database;
  const roomIds = await db.query(
    `SELECT room_id FROM bookings WHERE hotel_id = ? AND NOT (end_date <= ? OR start_date >= ?)`,
    [hotelId, checkIn, checkOut]
  );
  return roomIds;
}
