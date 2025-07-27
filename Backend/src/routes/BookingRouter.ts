import { Database } from '../Database';
import { Router } from 'express';
import { createBooking } from '../Services/BookingService';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Booking API is working!' });
});

router.post('/create', async (req, res) => {
  try {
    const { customer, booking, payment, guests } = req.body;

    const bookingRef = await createBooking(booking, customer, payment, guests);

    res.status(201).json({
      message: 'Booking created successfully!',
      booking_reference: bookingRef
    });

  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

export default router;
