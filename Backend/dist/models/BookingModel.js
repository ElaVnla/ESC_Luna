"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModel = void 0;
class BookingModel {
    constructor(id, destination_id, hotel_id, room_id, start_date, end_date, adults, children, message_to_hotel, num_nights, price) {
        this.id = id;
        this.destination_id = destination_id;
        this.hotel_id = hotel_id;
        this.room_id = room_id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.adults = adults;
        this.children = children;
        this.message_to_hotel = message_to_hotel;
        this.num_nights = num_nights;
        this.price = price;
    }
}
exports.BookingModel = BookingModel;
//# sourceMappingURL=BookingModel.js.map