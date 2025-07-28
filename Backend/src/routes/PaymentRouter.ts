import { Router } from 'express';
import { createPayment, getPaymentsByBookingId } from '../Services/PaymentService';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Payment API is working!' });
});

// Create a new payment record
router.post('/create', async (req, res) => {
  try {
    const payment = req.body;
    await createPayment(payment);
    res.status(201).json({ message: 'Payment created successfully!' });
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'Failed to create payment' });
  }
});

// Fetch payment(s) by booking ID
router.get('/booking/:booking_id', async (req, res) => {
  try {
    const booking_id = req.params.booking_id;
    const payments = await getPaymentsByBookingId(booking_id);
    res.json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ error: 'Failed to fetch payments' });
  }
});

export default router;
