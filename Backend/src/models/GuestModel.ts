// Remaining Guest Model (Guest)
export class GuestModel {
    constructor(
        public id: number,
        public booking_id: string,           
        public guest_type: 'adult' | 'child' | 'guest',
        public salutation: string,
        public first_name: string,
        public last_name: string,
        public phone_number: string,
        public email: string,
        public country: string,           
        public date_of_birth: string        
    ) {}
}