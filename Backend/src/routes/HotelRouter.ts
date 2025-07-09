import { Router } from 'express';
import { Database } from '../Database';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hotel API is working!' });
});

export default router;