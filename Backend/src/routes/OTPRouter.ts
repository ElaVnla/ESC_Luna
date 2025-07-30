// src/routes/OTPRouter.ts
import { Router } from 'express';
import { sendOTPEmail } from '../Services/EmailService';

const router = Router();

// For simplicity, we'll store OTPs in memory for now.
const otpStore: Record<string, string> = {}; // email -> otp

router.post('/send-otp', async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: 'Email is required' });

  const otp = Math.floor(10000 + Math.random() * 90000).toString(); // 5-digit OTP
  otpStore[email] = otp;

  try {
    await sendOTPEmail(email, otp);
    res.json({ message: 'OTP sent to email' });
  } catch (err) {
    console.error('Failed to send OTP:', err);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
});

router.post('/verify', (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] === otp) {
    delete otpStore[email]; // OTP is single-use
    return res.json({ verified: true });
  }

  return res.status(400).json({ verified: false, error: 'Invalid OTP' });
});

export default router;


router.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  const validOtp = otpStore[email];
  if (validOtp && otp === validOtp) {
    // Optionally clear it after use
    delete otpStore[email];
    res.json({ verified: true });
  } else {
    res.status(401).json({ verified: false, error: 'Invalid OTP' });
  }
});
