import { Router } from 'express';
import { createPayment, getPaymentsByBookingId } from '../Services/PaymentService';
import Stripe from 'stripe';

const router = Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

// Health check for Payment API
router.get('/', (req, res) => {
  res.json({ message: 'Payment API is working!' });
});

// Create a Stripe payment intent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'sgd' } = req.body;
    if (!amount) return res.status(400).json({ error: 'Amount is required' });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    console.error('Error creating PaymentIntent:', error.message);
    res.status(500).json({ error: 'Failed to create PaymentIntent' });
  }
});

// Create a new payment record in DB (after Stripe success)
router.post('/create', async (req, res) => {
  try {
    const payment = req.body; // { booking_id, payment_reference, stripe_payment_intent_id, amount, currency, status, encrypted_cardholder_name }
    await createPayment(payment);
    res.status(201).json({ message: 'Payment created successfully!' });
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'Failed to create payment' });
  }
});

// Get all payments for a specific booking
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
