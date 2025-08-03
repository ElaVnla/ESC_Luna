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
    from: `"Hotel Booking" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: 'Your Booking OTP Code',
    text: `Your OTP code is: ${otp}`,
    html: `<p>Your OTP code is: <strong>${otp}</strong></p>`,
  };

  await transporter.sendMail(mailOptions);
}

export async function sendConfirmationEmail(booking: any) {
  const toEmail = booking.mainGuest?.email || booking.customer?.email;
  if (!toEmail) throw new Error('Missing customer email');
  console.log("NUMBER OF ADULTS:", booking.guests?.adults);
  console.log("NUMBER OF CHILDREN:", booking.guests?.children);

  const emailHTML = `
    <h2>🎉 Booking Confirmed!</h2>
    <p><strong>Hotel:</strong> ${booking.hotel?.name || 'Hotel Name'}</p>
    <p><strong>Address:</strong> ${booking.hotel?.address || 'Address not provided'}</p>
    <p><strong>Check-in:</strong> ${booking.booking?.start_date}</p>
    <p><strong>Check-out:</strong> ${booking.booking?.end_date}</p>
    <p><strong>Guests:</strong> ${booking.guests?.adults || 1} Adults, ${booking.guests?.children || 0} Children</p>
    <p><strong>Total Paid:</strong> $${booking.price?.totalPaid || '0.00'}</p>
    <p><strong>Booking Ref:</strong> ${booking.booking_reference || 'N/A'}</p>
    <hr/>
    <p>Thank you for booking with <strong>LUNA Hotels</strong>. We look forward to welcoming you!</p>
  `;

  const mailOptions = {
    from: `"LUNA Hotel" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: 'Booking Confirmation - LUNA Hotel',
    html: emailHTML,
  };

  await transporter.sendMail(mailOptions);
}
