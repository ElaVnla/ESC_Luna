import { Database } from '../Database';
import { Destination } from "../entities/Destination";

export async function getAllDestinations() {
  const destinationRepo = Database.getRepository(Destination);
  const destinations = await destinationRepo.find();
  return destinations;
}
