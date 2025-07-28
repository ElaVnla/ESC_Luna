// Routes/CustomerRouter.ts
import { Router } from 'express';
import { getCustomerByBookingId } from '../Services/CustomerService';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Customer API is working!' });
});

// GET /customers/:bookingId - retrieve customer info for a booking
router.get('/:bookingId', async (req, res) => {
  try {
    const { bookingId } = req.params;
    const customer = await getCustomerByBookingId(bookingId);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found for this booking ID' });
    }

    res.json(customer);
  } catch (error) {
    console.error('Error fetching customer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
