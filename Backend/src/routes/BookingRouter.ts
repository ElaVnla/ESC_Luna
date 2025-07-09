import { Router } from 'express';
import { Database } from '../Database';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Booking API is working!' });
});

export default router;