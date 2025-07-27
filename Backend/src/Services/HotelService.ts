import { Database } from '../Database';
import { Hotel } from "../entities/Hotel";

//const axios = require("axios");

// feature 1 navbar input "Singapore, Singapore"
// search destinations.json to find matching input and corresponding uid "RsBU"
// do API call to destination "RsBU" for all information on hotel
// store info into destinations and hotels tables in DB

export async function getAllHotels() {
  // Retrieve all hotels based on destination city
  const hotelsRepo = Database.getRepository(Hotel);
  const hotels = await hotelsRepo.find();
  return hotels;
}

export async function getHotelsByCity(city: string) {
  // Retrieve all hotels based on destination city
  const hotelsRepo = Database.getRepository(Hotel);
  const hotels = await hotelsRepo.findBy({ city });
  return hotels;
}

export async function storeHotels(hotelsData: any[]) {
  const repo = Database.getRepository(Hotel);
  const storedHotels: Hotel[] = [];

  for (const data of hotelsData) {
    const hotel: Hotel = {
      id: data.id,
      name: data.name,
      address: data.address,
      rating: data.rating,
      latitude: data.latitude,
      longitude: data.longitude,
      phone_number: "null",
      contact_email: "null",
      fax_number: "null",
      amenities: JSON.stringify(data.amenities),
      description: data.description,
      postal_code: "null",
      city: data.original_metadata?.city || "",
      state: data.original_metadata?.state || "",
      country_code: data.original_metadata?.country || "SG",
      image_count: data.image_details?.count || 0,
      primary_destination_id: data.primary_destination_id
    };

    await repo.save(hotel);
    storedHotels.push(hotel);
  }

  return storedHotels;
}

export async function getFilteredHotels(filters: any) {
  const repo = Database.getRepository(Hotel);
  
  const query: any = {};

  if (filters.rating) {
    query.rating = filters.rating;
  }

  if (filters.city) {
    query.city = filters.city;
  }

  return await repo.findBy(query); // or use QueryBuilder for more complex filters
}

// export async function syncHotelsFromAPI() {
//   const response = await axios.get("https://hotelapi.loyalty.dev/api/hotels?destination_id=RsBU");

//   const hotelsData = response.data;
//   const repo = Database.getRepository(Hotel);
//   const storedHotels: Hotel[] = [];

//   for (const data of hotelsData) {
//     const hotel: Hotel = {
//       id: data.id,
//       name: data.name,
//       address: data.address,
//       rating: data.rating,
//       latitude: data.latitude,
//       longitude: data.longitude,
//       phone_number: "null",
//       contact_email: "null",
//       fax_number: "null",
//       amenities: JSON.stringify(data.amenities),
//       description: data.description,
//       postal_code: "null",
//       city: data.original_metadata?.city || "",
//       state: data.original_metadata?.state || "",
//       country_code: data.original_metadata?.country || "SG",
//       image_count: data.image_details?.count || 0,
//       primary_destination_id: data.primary_destination_id
//     };

//     await repo.save(hotel);
//     storedHotels.push(hotel);
//   }

//   return storedHotels;
// }
