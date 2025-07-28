
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
