// Remaining Guest Model (Guest)
export class GuestModel {
    constructor(
        public id: number,
        public booking_id: string,           // Link to booking ID
        public guest_type: 'adult' | 'child',
        public salutation: string,
        public first_name: string,
        public last_name: string,
        public phone_number: string,
        public email: string,
        public country: string,              // Added country for guest
        public date_of_birth: string        // Added date_of_birth for guest
    ) {}
}