export class GuestModel {
    constructor(
      public id: number,
      public booking_id: string,  // link to booking
      public guest_type: 'adult' | 'child',
      public salutation: string,
      public first_name: string,
      public last_name: string,
      public phone_number: string,
      public email: string,
      public country: string
    ) {}
  }
  
  // lets you store N guests per booking, with the ability to query by booking_id.