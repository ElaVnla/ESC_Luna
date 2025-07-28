import { Database } from '../Database';
import { PaymentModel } from '../models/PaymentModel';

export async function createPayment(payment: PaymentModel) {
  const db = Database;

  await db.query(
    `INSERT INTO payments (
      booking_id, payment_reference, masked_card_number
    ) VALUES (?, ?, ?)`,
    [payment.booking_id, payment.payment_reference, payment.masked_card_number]
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
