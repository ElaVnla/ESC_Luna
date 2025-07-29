import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get('/send-test-email', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'your_target_email@example.com', // You can use your own email for testing
      subject: 'Test Email from Booking App',
      text: '🎉 This is a test email sent from the backend using nodemailer.',
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

export default router;
