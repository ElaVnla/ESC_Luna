import { Router } from 'express';
import { Database } from '../Database';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Payment API is working!' });
});

export default router;