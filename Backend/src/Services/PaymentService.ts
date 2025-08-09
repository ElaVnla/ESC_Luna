import { Database } from '../Database';
import { PaymentModel } from '../models/PaymentModel';

export async function createPayment(payment: {
  booking_id: string;
  payment_reference: string;
  stripe_payment_intent_id: string;
  amount?: number;            // smallest unit (e.g., cents)
  currency?: string;          // e.g., 'sgd'
  status?: string;            // e.g., 'succeeded'
  encrypted_cardholder_name?: string | null;
}) {
  const db = Database;

  await db.query(
    `INSERT INTO payments (
      booking_id,
      payment_reference,
      stripe_payment_intent_id,
      amount,
      currency,
      status,
      encrypted_cardholder_name
    ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      payment.booking_id,
      payment.payment_reference,
      payment.stripe_payment_intent_id,
      payment.amount ?? null,
      payment.currency ?? null,
      payment.status ?? null,
      payment.encrypted_cardholder_name ?? null,
    ]
  );
}

export async function getPaymentsByBookingId(booking_id: string): Promise<PaymentModel[]> {
  const db = Database;
  const rows = await db.query(`SELECT * FROM payments WHERE booking_id = ?`, [booking_id]);
  return rows as PaymentModel[];
}
