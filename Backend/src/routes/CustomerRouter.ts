// Routes/CustomerRouter.ts
import { Router } from 'express';
import { createCustomer, getCustomerByBookingId, getCustomerByBookingIdAndEmail, updateCustomerByBookingId } from '../Services/CustomerService';
import { Database } from "../Database";


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

//this is for flow 2 - toni
// POST /customers/verify-booking
router.post('/verify-book', async (req, res) => {
  const { bookingId, email } = req.body;

  console.log('📩 Incoming verify-booking request:', { bookingId, email });

  try {
    const customer = await getCustomerByBookingIdAndEmail(bookingId.trim(), email.trim());

    console.log('🎯 DB query result:', customer);

    if (!customer) {
      return res.status(404).json({ message: 'No matching booking found' });
    }

    res.json({ valid: true, customer });
  } catch (err) {
    console.error('Booking verification error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update main guest by booking_id
//this is for flow 2
router.put('/:booking_id', async (req, res) => {
  const { booking_id } = req.params;
  const updatedData = req.body;

  try {
    const result = await updateCustomerByBookingId(booking_id, updatedData);
    res.status(200).json({ message: 'Customer updated', result });
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ error: 'Failed to update customer' });
  }
});


router.post('/create', async (req, res) => {
  try {
    const data = req.body;
    const result = await createCustomer(data);
    res.status(201).json({ message: 'Customer created', result });
  } catch (err) {
    console.error('Create error:', err);
    res.status(500).json({ error: 'Failed to create customer' });
  }
});


export default router;