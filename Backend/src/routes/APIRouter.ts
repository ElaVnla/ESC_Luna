import { Router } from 'express';
import { Database } from '../Database';
import { storeHotels } from '../Services/HotelService';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'API router is working!' });
});

router.get('/hotels/sync/:id', async (req, res) => {
  const { id } = req.params;
  console.log(`Fetching hotel with id: ${id}`);
  try {
    const response = await fetch(`http://hotelapi.loyalty.dev/api/hotels?destination_id=${id}`);
    const data = await response.json();

    await storeHotels(data); // sync to DB

    res.json(data);
  } catch (err) {
    console.error('Error syncing hotels:', err);
    res.status(500).json({ error: 'Failed to sync hotels from API' });
  }
});

router.get('/hotels/:id', async (req, res) => {
  const { id } = req.params;
  console.log(`Fetching hotel with id: ${id}`);
  try {
    const response = await fetch(`http://hotelapi.loyalty.dev/api/hotels/${id}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching hotel data:', err);
    res.status(500).json({ error: 'Failed to fetch hotel data' });
  }
});
router.get('/hotels/:id/price', async (req, res) => {
  const { id } = req.params;
  const queryParams = new URLSearchParams(req.query as Record<string, string>).toString();
  console.log(`Fetching hotel with id: ${id} and ${queryParams}`);
  try {
    const response = await fetch(`https://hotelapi.loyalty.dev/api/hotels/${id}/price?${queryParams}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching hotel data:', err);
    res.status(500).json({ error: 'Failed to fetch hotel data' });
  }
});


export default router;