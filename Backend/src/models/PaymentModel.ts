export class PaymentModel {
    constructor(
        public id: number,
        public booking_id: string,
        public payment_reference: string,
        public masked_card_number: string
    ) {}
}
