// src/Services/EmailService.ts
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendOTPEmail(toEmail: string, otp: string) {
  const mailOptions = {
    from: `"Hotel Booking" <${process.env.SMTP_EMAIL}>`,
    to: toEmail,
    subject: 'Your Booking OTP Code',
    text: `Your OTP code is: ${otp}`,
    html: `<p>Your OTP code is: <strong>${otp}</strong></p>`,
  };

  await transporter.sendMail(mailOptions);
}
