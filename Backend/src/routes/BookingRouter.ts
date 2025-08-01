import { Router } from 'express';
import { cancelBooking, createBooking } from '../Services/BookingService';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Booking API is working!' });
});

router.post('/create', async (req, res) => {
  try {
    const { customer, booking, payment, guests } = req.body;

    const bookingRef = await createBooking(booking, customer, payment, guests || []); // ✅ fallback here too

    res.status(201).json({
      message: 'Booking created successfully!',
      booking_reference: bookingRef
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

router.delete('/:bookingId', async (req, res) => {
  const { bookingId } = req.params;

  try {
    await cancelBooking(bookingId);
    res.status(200).json({ message: 'Booking and associated data deleted' });
  } catch (error) {
    console.error('Cancellation error:', error);
    res.status(500).json({ error: 'Failed to cancel booking' });
  }
});


export default router;
