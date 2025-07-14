import { Router } from 'express';
import { Database } from '../Database';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'API router is working!' });
});

router.get('/hotels/:id', async (req, res) => {
  const { id } = req.params;
  console.log(`Fetching hotel with id: ${id}`);
  try {
    const response = await fetch(`https://hotelapi.loyalty.dev/api/hotels/${id}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching hotel data:', err);
    res.status(500).json({ error: 'Failed to fetch hotel data' });
  }
});


export default router;