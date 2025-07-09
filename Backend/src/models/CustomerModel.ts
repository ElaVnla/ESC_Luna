export class CustomerModel {
    constructor(
        public id: number,
        public salutation: string,
        public first_name: string,
        public last_name: string,
        public phone_number: string,
        public email: string,
        public booking_id: string,
        public billing_address: string
    ) {}
}
