import { Router } from 'express';
import { cancelBooking, createBooking, getBookedRoomId, getHotelIdFromBooking, getBookingById } from '../Services/BookingService';

const router = Router();

// Health check for Booking API
router.get('/', (req, res) => {
  res.json({ message: 'Booking API is working!' });
});

// Create a new booking
router.post('/create', async (req, res) => {
  try {
    const { customer, booking, payment, guests } = req.body; 
    const bookingRef = await createBooking(booking, customer, guests || []);
    res.status(201).json({ message: 'Booking created successfully!', booking_reference: bookingRef });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// Get booking details by bookingId
router.get('/:bookingId', async (req, res) => {
  const { bookingId } = req.params;
  try {
    const row = await getBookingById(bookingId);
    if (!row) return res.status(404).json({ error: 'Booking not found' });
    res.json(row);
  } catch (error) {
    console.error('Error retrieving booking:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Cancel a booking by bookingId
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

// Get hotel_id for a booking
router.get('/:bookingId/hotel-id', async (req, res) => {
  const { bookingId } = req.params;
  try {
    const hotelId = await getHotelIdFromBooking(bookingId);
    if (!hotelId) return res.status(404).json({ error: 'Booking not found' });
    res.json({ hotel_id: hotelId });
  } catch (error) {
    console.error('Error retrieving hotel_id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get unavailable room IDs for a hotel in a date range
router.get('/unavailable-rooms', async (req, res) => {
  const { hotelId, startDate, endDate } = req.query;
  const roomIds = await getBookedRoomId(hotelId as string, startDate as string, endDate as string);
  res.json(roomIds);
});

export default router;
