import { Database } from '../Database';
import { PaymentModel } from '../models/PaymentModel';

export async function createPayment(payment: PaymentModel) {
  const db = Database;

  await db.query(
    `INSERT INTO payments (
      booking_id,
      payment_reference,
      encrypted_card_number,
      encrypted_expiry,
      encrypted_cardholder_name
    ) VALUES (?, ?, ?, ?, ?)`,
    [
      payment.booking_id,
      payment.payment_reference,
      payment.encrypted_card_number,
      payment.encrypted_expiry,
      payment.encrypted_cardholder_name
    ]
  );
}


// Optional: Fetch payments for a specific booking
export async function getPaymentsByBookingId(booking_id: string): Promise<PaymentModel[]> {
  const db = Database;

  const rows = await db.query(
    `SELECT * FROM payments WHERE booking_id = ?`,
    [booking_id]
  );

  return rows as PaymentModel[];
}
