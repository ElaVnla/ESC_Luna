// src/Routes/GuestRouter.ts
import { Router } from 'express';
import { insertGuests, getGuestsByBookingId, updateGuestsByBookingId, getGuestsCountByBookingId } from '../Services/GuestService';
import { GuestModel } from '../models/GuestModel';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Guest API is working!' });
});

// 🧾 GET guests for a booking
router.get('/:booking_id', async (req, res) => {
  const { booking_id } = req.params;

  try {
    const guests = await getGuestsByBookingId(booking_id);
    res.status(200).json(guests);
  } catch (err) {
    console.error('Error retrieving guests:', err);
    res.status(500).json({ error: 'Failed to retrieve guests' });
  }
});

//  POST multiple guests
router.post('/create', async (req, res) => {
  const guests: GuestModel[] = req.body.guests;

  try {
    await insertGuests(guests);
    res.status(201).json({ message: 'Guests added successfully' });
  } catch (err) {
    console.error('Error inserting guests:', err);
    res.status(500).json({ error: 'Failed to insert guests' });
  }
});

// PUT update guests by booking_id
//flow 2
router.put('/:booking_id', async (req, res) => {
    const { booking_id } = req.params;
    const guests = req.body.guests;
  
    try {
      const result = await updateGuestsByBookingId(booking_id, guests);
      res.status(200).json({ message: 'Guests updated', result });
    } catch (err) {
      console.error('Guest update error:', err);
      res.status(500).json({ error: 'Failed to update guests' });
    }
  });

  // Count guests for a booking (useful for quick checks / debugging)
router.get('/:booking_id/count', async (req, res) => {
  try {
    const count = await getGuestsCountByBookingId(req.params.booking_id);
    res.json({ booking_id: req.params.booking_id, count });
  } catch (err) {
    console.error('guest count error:', err);
    res.status(500).json({ error: 'Failed to count guests' });
  }
});
  
export default router;
