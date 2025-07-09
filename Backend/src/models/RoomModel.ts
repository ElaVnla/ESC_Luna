export class RoomModel {
    constructor(
        public id: string,
        public hotel_id: string,
        public room_type: string,
        public normalized_description: string,
        public description: string,
        public long_description: string,
        public amenities: string,
        public price: number,
        public images: string,
        public booking_key: string
    ) {}
}
