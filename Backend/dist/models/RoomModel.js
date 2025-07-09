"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModel = void 0;
class RoomModel {
    constructor(id, hotel_id, room_type, normalized_description, description, long_description, amenities, price, images, booking_key) {
        this.id = id;
        this.hotel_id = hotel_id;
        this.room_type = room_type;
        this.normalized_description = normalized_description;
        this.description = description;
        this.long_description = long_description;
        this.amenities = amenities;
        this.price = price;
        this.images = images;
        this.booking_key = booking_key;
    }
}
exports.RoomModel = RoomModel;
//# sourceMappingURL=RoomModel.js.map