import { Database } from '../Database';
import { Hotel } from "../entities/Hotel";

export async function getAllHotels() {
  const hotelsRepo = Database.getRepository(Hotel);
  const hotels = await hotelsRepo.find();
  return hotels;
}
