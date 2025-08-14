import request from 'supertest';
import express from 'express';
import emailRouter, { otpStore } from '../src/routes/OTPRouter';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// 🛠 Proper nodemailer mock with default export
vi.mock('nodemailer', () => ({
  default: {
    createTransport: vi.fn().mockReturnValue({
      sendMail: vi.fn().mockResolvedValue({}),
    }),
  },
}));

// Create a test express app
const app = express();
app.use(express.json());
app.use('/email', emailRouter);

// === TEST SUITE ===
describe('Email OTP Backend API', () => {
  const testEmail = 'test@example.com';

  beforeEach(() => {
    // Clear stored OTPs before each test
    for (const key in otpStore) delete otpStore[key];
  });

  it('should send OTP successfully', async () => {
    const response = await request(app)
      .post('/email/send-otp')
      .send({ email: testEmail });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('OTP sent to email');
    expect(otpStore[testEmail]).toBeDefined();
  });

  it('should fail to send OTP if email is missing', async () => {
    const response = await request(app)
      .post('/email/send-otp')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Email is required');
  });

  it('should verify correct OTP', async () => {
    // First send OTP
    await request(app)
      .post('/email/send-otp')
      .send({ email: testEmail });

    // Get stored OTP
    const otp = otpStore[testEmail];

    const res = await request(app)
      .post('/email/verify-otp')
      .send({ email: testEmail, otp });

    expect(res.status).toBe(200);
    expect(res.body.verified).toBe(true);
  });

  it('should reject incorrect OTP', async () => {
    const response = await request(app)
      .post('/email/verify-otp')
      .send({ email: testEmail, otp: 'wrongOTP' });

    expect(response.status).toBe(401);
    expect(response.body.verified).toBe(false);
  });
});
