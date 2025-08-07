import { Router } from 'express';
import { cancelBooking, createBooking, getBookedRoomId, getHotelIdFromBooking  } from '../Services/BookingService';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Booking API is working!' });
});

router.post('/create', async (req, res) => {
  try {
    const { customer, booking, payment, guests } = req.body;

    const bookingRef = await createBooking(booking, customer, payment, guests || []);

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

// ✅ New route to retrieve hotel_id from booking_id
router.get('/:bookingId/hotel-id', async (req, res) => {
  const { bookingId } = req.params;

  try {
    const hotelId = await getHotelIdFromBooking(bookingId);
    if (!hotelId) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json({ hotel_id: hotelId });
  } catch (error) {
    console.error('Error retrieving hotel_id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Retrieving all unavailable rooms for the given hotel and start and end dates
router.get('/unavailable-rooms', async (req, res) => {
    const { hotelId, startDate, endDate } = req.query;
    const roomIds = await getBookedRoomId(hotelId as string, startDate as string, endDate as string);
    res.json(roomIds);
});

export default router;
