import { Router } from 'express';
import { sendOTPEmail, sendConfirmationEmail } from '../Services/EmailService';

const router = Router();
const otpStore: Record<string, string> = {}; // Stores OTPs for each email

// Send a 5-digit OTP to the user's email
router.post('/send-otp', async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: 'Email is required' });

  const otp = Math.floor(10000 + Math.random() * 90000).toString(); // Generate OTP
  otpStore[email] = otp;

  try {
    await sendOTPEmail(email, otp);
    res.json({ message: 'OTP sent to email' });
  } catch (err) {
    console.error('Failed to send OTP:', err);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
});

// Verify the OTP entered by the user
router.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  const validOtp = otpStore[email];
  if (validOtp && otp === validOtp) {
    delete otpStore[email]; // Remove OTP after successful verification
    res.json({ verified: true });
  } else {
    res.status(401).json({ verified: false, error: 'Invalid OTP' });
  }
});

// Send booking confirmation email
router.post('/send-confirmation', async (req, res) => {
  try {
    const booking = req.body.booking;

    const email = booking.mainGuest?.email || booking.customer?.email;
    if (!booking || !email) {
      console.error('Missing booking or email info:', booking);
      return res.status(400).json({ message: 'Missing booking or email info.' });
    }

    // Log sending confirmation
    console.log('Sending booking confirmation for:', booking);

    await sendConfirmationEmail(booking);  // booking passed in full
    res.status(200).json({ message: 'Confirmation email sent.' });
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    res.status(500).json({ error: 'Failed to send confirmation email' });
  }
});

export default router;
