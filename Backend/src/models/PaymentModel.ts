export class PaymentModel {
  constructor(
    public id: number,
    public booking_id: string,
    public payment_reference: string,
    public encrypted_card_number: string,
    public encrypted_expiry: string,
    public encrypted_cardholder_name: string
  ) {}
}
