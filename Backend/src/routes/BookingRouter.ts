//This API will:

//1. Receive guest info, booking info, and payment info from the frontend.
//2. Validate the data.
//3. Insert records into MySQL DB using the models:
    //- `BookingModel`
    //- `CustomerModel`
    //- `PaymentModel`
//4. Return a success message + booking reference.



import { Router } from 'express';
import { Database } from '../Database';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Booking API is working!' });
});

router.post('/create', async (req, res) => {
  try {
    const db = Database;

    const { customer, booking, payment } = req.body;

    // 1. Insert into bookings table
    await db.query(`
      INSERT INTO bookings (
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

    // 2. Insert into customers table
    await db.query(`
      INSERT INTO customers (
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

    // 3. Insert into payments table
    await db.query(`
      INSERT INTO payments (
        booking_id, payment_reference, masked_card_number
      ) VALUES (?, ?, ?)`,
      [
        booking.id,
        payment.payment_reference,
        payment.masked_card_number
      ]
    );

    // 4. Respond with booking reference
    res.status(201).json({
      message: 'Booking created successfully!',
      booking_reference: booking.id
    });

  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

export default router;
