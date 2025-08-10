// src/models/PaymentModel.ts
export class PaymentModel {
  constructor(
    public id: number,
    public booking_id: string,
    public payment_reference: string,
    public stripe_payment_intent_id: string,
    public amount?: string | number | null, 
    public currency?: string | null,
    public status?: string | null,
    public encrypted_cardholder_name?: string | null
  ) {}
}
