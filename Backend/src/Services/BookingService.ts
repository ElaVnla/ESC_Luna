import { Database } from '../Database';

// booking = BookingModel
// customer = CustomerModel
// payment = PaymentModel
// guests = GuestModel[] ← new param!
export async function createBooking(
  booking: any,
  customer: any,
  payment: any,
  guests: any[] = [] // ✅ fallback to empty array
) {
  const db = Database;

  // 1. Insert booking
  await db.query(
    `INSERT INTO bookings (
      id, destination_id, hotel_id, room_id,
      start_date, end_date, adults, children,
      message_to_hotel, num_nights, price
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      booking.id,
      booking.destination_id,
      booking.hotel_id,
      booking.room_id,
      booking.start_date,
      booking.end_date,
      booking.adults,
      booking.children,
      booking.message_to_hotel,
      booking.num_nights,
      booking.price
    ]
  );

  // 2. Insert main customer
  await db.query(
    `INSERT INTO customers (
      salutation, first_name, last_name,
      phone_number, email, booking_id, billing_address
    ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      customer.salutation,
      customer.first_name,
      customer.last_name,
      customer.phone_number,
      customer.email,
      booking.id,
      customer.billing_address
    ]
  );

  // 3. Insert payment
  await db.query(
    `INSERT INTO payments (
      booking_id, payment_reference, masked_card_number
    ) VALUES (?, ?, ?)`,
    [
      booking.id,
      payment.payment_reference,
      payment.masked_card_number
    ]
  );

  // 4. Insert guests
  for (const guest of guests) {
    await db.query(
      `INSERT INTO guests (
        booking_id, guest_type, salutation, first_name,
        last_name, phone_number, email, country
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        booking.id,
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

  return booking.id;
}


export async function cancelBooking(bookingId: string) {
    const db = Database;
  
    // delete related records first (order matters due to FK constraints)
    await db.query(`DELETE FROM guests WHERE booking_id = ?`, [bookingId]);
    await db.query(`DELETE FROM payments WHERE booking_id = ?`, [bookingId]);
    await db.query(`DELETE FROM customers WHERE booking_id = ?`, [bookingId]);
  
    // finally, delete the booking itself
    await db.query(`DELETE FROM bookings WHERE id = ?`, [bookingId]);
  }
  
