import { Router } from 'express';
import { Database } from '../Database';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Testing API is working!' });
});

// Use this router to manually store the data retrieve from the API into the db, for hardcoding/static purposes


export default router;