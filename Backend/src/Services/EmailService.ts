import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

export async function sendOTPEmail(toEmail: string, otp: string) {
  const mailOptions = {
    from: `"Hotel Booking" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: 'Your Booking OTP Code',
    html: `<p>Your OTP code is: <strong>${otp}</strong></p>`,
  };
  await transporter.sendMail(mailOptions);
}

type EmailGuest = {
  salutation?: string;
  first_name?: string;
  last_name?: string;
  country?: string;
  date_of_birth?: string; // YYYY-MM-DD
};

export async function sendConfirmationEmail(booking: any) {
  // accept either mainGuest or legacy customer field
  const main =
    booking.mainGuest ??
    booking.customer ??
    {};

  const toEmail = main?.email || booking.customer?.email;
  if (!toEmail) throw new Error('Missing customer email');

  const totalGuests: number =
    Number(booking.guests?.total) ||
    Number(booking.booking?.guests_total) ||
    1;

  // accept either otherGuests or legacy list
  const listGuests: EmailGuest[] =
    (booking.guests?.otherGuests as EmailGuest[] | undefined) ??
    (booking.guests?.list as EmailGuest[] | undefined) ??
    [];

  const guestLines =
    listGuests.length
      ? `<ul>${listGuests
          .map((g, i) => {
            const name = [g.salutation, g.first_name, g.last_name].filter(Boolean).join(' ');
            const country = g.country ? ` (${g.country})` : '';
            const dob = g.date_of_birth ? ` — DOB: ${g.date_of_birth}` : '';
            return `<li>${i + 1}. ${name || 'Guest'}${country}${dob}</li>`;
          })
          .join('')}</ul>`
      : '<p>No guests indicated</p>';

  const amount = booking.price?.totalPaid ?? '0.00';
  const currency = (booking.price?.currency || '').toString().toUpperCase();

  const emailHTML = `
    <h2>🎉 Booking Confirmed!</h2>
    <p><strong>Hotel:</strong> ${booking.hotel?.name || 'Hotel Name'}</p>
    <p><strong>Address:</strong> ${booking.hotel?.address || 'Address not provided'}</p>
    <p><strong>Check-in:</strong> ${booking.booking?.start_date}</p>
    <p><strong>Check-out:</strong> ${booking.booking?.end_date}</p>
    <p><strong>Total Guests:</strong> ${totalGuests}</p>
    <p><strong>Total Paid:</strong> ${currency ? currency + ' ' : ''}${amount}</p>
    <p><strong>Booking Ref:</strong> ${booking.booking_reference || 'N/A'}</p>

    <hr/>
    <h4>Main Guest</h4>
    <p>First Name: ${main.first_name || 'N/A'}</p>
    <p>Last Name: ${main.last_name || 'N/A'}</p>
    <p>Number: ${main.phone_number || 'N/A'}</p>

    <h4>Other Guest(s)</h4>
    ${guestLines}

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
