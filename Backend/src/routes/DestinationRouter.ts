import { Router } from 'express';
import { Database } from '../Database';
import { getAllDestinations } from '../Services/TestService';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Destination API is working!' });
});

router.get('/getAllDestinations', async (req, res) => {
  try {
    const destinations = await getAllDestinations();
    res.json(destinations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
});

export default router;