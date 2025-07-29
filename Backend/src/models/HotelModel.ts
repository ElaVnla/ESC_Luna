export class HotelModel {
    constructor(
        public id: string,
        public name: string,
        public address: string,
        public rating: number,
        public latitude: number,
        public longitude: number,
        public phone_number: string,
        public contact_email: string,
        public fax_number: string,
        public price: number,
        public amenities: string,
        public description: string,
        public postal_code: string,
        public city: string,
        public state: string,
        public country_code: string,
        public image_count: number,
        public primary_destination_id: string
    ) {}
}
