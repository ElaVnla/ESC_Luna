import { Router } from 'express';
import { Database } from '../Database';
import { getAllHotels } from '../Services/HotelService';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hotel API is working!' });
});

router.get('/getAllHotels', async (req, res) => {
  try {
    const hotels = await getAllHotels();
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch hotels' });
  }
});

export default router;