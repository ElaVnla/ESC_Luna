export class HotelPricesModel {
    constructor(
        public id: string,
        public checkin_date: string,
        public checkout_date: string,
        public guests: number,
        public rooms: number,
        public currency: string,
        public total_price: number
    ) {}
}
