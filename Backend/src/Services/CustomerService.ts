import { Database } from '../Database';
import { CustomerModel } from '../models/CustomerModel';

// Create a customer record
export async function createCustomer(customer: CustomerModel) {
  const db = Database;

  const result = await db.query(
    `INSERT INTO customers (
      salutation, first_name, last_name,
      phone_number, email, booking_id, billing_address,
      country, date_of_birth
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      customer.salutation ?? null,
      customer.first_name,
      customer.last_name,
      customer.phone_number ?? null,
      customer.email,
      customer.booking_id,
      customer.billing_address ?? null,
      (customer as any).country ?? null,      
      (customer as any).date_of_birth ?? null,   
    ]
  );

  return result;
}

export async function getCustomerByBookingId(bookingId: string) {
  const db = Database;
  const result = await db.query(`SELECT * FROM customers WHERE booking_id = ?`, [bookingId]);
  return result[0];
}

export async function getCustomerByBookingIdAndEmail(bookingId: string, email: string) {
  const db = Database;
  const result = await db.query(
    `SELECT * FROM customers WHERE booking_id = ? AND email = ?`,
    [bookingId, email]
  );
  return result[0];
}

// Allow updating new fields too
export async function updateCustomerByBookingId(booking_id: string, data: any) {
  const db = Database;

  const allowedFields = [
    'salutation',
    'first_name',
    'last_name',
    'phone_number',
    'email',
    'billing_address',
    'country',        
    'date_of_birth', 
  ];

  const updates: string[] = [];
  const values: any[] = [];

  for (const key of allowedFields) {
    if (data[key] !== undefined) {
      updates.push(`${key} = ?`);
      values.push(data[key]);
    }
  }

  if (updates.length === 0) throw new Error('No valid fields to update');

  const query = `UPDATE customers SET ${updates.join(', ')} WHERE booking_id = ?`;
  values.push(booking_id);

  return await db.query(query, values);
}
