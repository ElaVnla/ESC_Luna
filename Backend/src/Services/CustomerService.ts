
// Services/CustomerService.ts
import { Database } from '../Database';
import { CustomerModel } from '../models/CustomerModel';

// Create a customer record
export async function createCustomer(customer: CustomerModel) {
  const db = Database;

  const result = await db.query(
    `INSERT INTO customers (
      salutation, first_name, last_name,
      phone_number, email, booking_id, billing_address
    ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      customer.salutation,
      customer.first_name,
      customer.last_name,
      customer.phone_number,
      customer.email,
      customer.booking_id,
      customer.billing_address
    ]
  );

  return result;
}

// Optional: Fetch customer by booking ID
export async function getCustomerByBookingId(bookingId: string) {
  const db = Database;

  const result = await db.query(
    `SELECT * FROM customers WHERE booking_id = ?`,
    [bookingId]
  );

  return result[0]; // Return the first (or only) result
}

// for flow 2 page 1 - get customer detail by booking id and email
export async function getCustomerByBookingIdAndEmail(bookingId: string, email: string) {
    const db = Database;
  
    console.log('🔍 Searching for customer with:', { bookingId, email });
  
    const result = await db.query(
      `SELECT * FROM customers WHERE booking_id = ? AND email = ?`,
      [bookingId, email]
    );
  
    console.log('🧾 Raw result:', result);
  
    return result[0]; // First match
  }
  
//flow 2 - editing custoemr details
  export async function updateCustomerByBookingId(booking_id: string, data: any) {
    const db = Database;
  
    // Filter out only fields that are present
    const allowedFields = [
      'salutation',
      'first_name',
      'last_name',
      'phone_number',
      'email',
      'billing_address',
    ];
  
    const updates: string[] = [];
    const values: any[] = [];
  
    for (const key of allowedFields) {
      if (data[key] !== undefined) {
        updates.push(`${key} = ?`);
        values.push(data[key]);
      }
    }
  
    if (updates.length === 0) {
      throw new Error('No valid fields to update');
    }
  
    const query = `UPDATE customers SET ${updates.join(', ')} WHERE booking_id = ?`;
    values.push(booking_id);
  
    return await db.query(query, values);
  }
  
  