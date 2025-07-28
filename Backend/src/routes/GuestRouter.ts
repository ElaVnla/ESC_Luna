// src/Routes/GuestRouter.ts
import { Router } from 'express';
import { insertGuests, getGuestsByBookingId } from '../Services/GuestService';
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

export default router;
