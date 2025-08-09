export class BookingModel {
  constructor(
    public id: string,
    public destination_id: string,
    public hotel_id: string,
    public room_id: string,
    public start_date: Date,
    public end_date: Date,
    public message_to_hotel: string,
    public num_nights: number,
    public price: number,
    public currency: string,
    public guests_total: number, // ✅ new
  ) {}
}
