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

function processAmenities(amenities: Record<string,boolean>) : string[] {
  const keyMap: Record<string,string> ={
    airConditioning: "Air-conditioning",
    clothingIron: "Clothing Iron",
    continentalBreakfast: "Continental Breakfast",
    dataPorts: "Data Ports",
    hairDryer: "Hair Dryer",
    kitchen: "Kitchen",
    outdoorPool: "Outdoor Pool",
    parkingGarage: "Parking Garage",
    safe: "Safe",
    tVInRoom: "TV",
    voiceMail: "Voice Mail",
    roomService: "Room Service",
    miniBarInRoom: "Mini-bar",
    businessCenter: "Business Center",
    inHouseDining: "In-house Dining",
    nonSmokingRooms: "Non-smoking Rooms",
    fitnessFacility: "Fitness Facility",
    meetingRooms: "Meeting Rooms",
    exteriorRoomEntrance: "Exterior Room Entrance",
    videoCheckOut: "Video Check-out",
    sauna: "Sauna",
    dryCleaning: "Dry Cleaning"
  }
  return Object.entries(amenities)
    .filter(([_, value]) => value)
    .map(([key]) => keyMap[key] || key);
}

export async function getHotelsByCity(city: string, state?: string) {
  // Retrieve all hotels based on destination city
  const hotelsRepo = Database.getRepository(Hotel);

  // Build query object dynamically
  const query: any = {
    city
  };

  if (state) {
    query.state = state;
  }

  const hotels = await hotelsRepo.findBy(query);
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
      amenities: JSON.stringify(processAmenities(data.amenities)),
      description: data.description,
      postal_code: "null",
      city: data.original_metadata?.city || "",
      state: data.original_metadata?.state || "",
      country_code: data.original_metadata?.country || "SG",
      image_count: data.image_details?.count || 0,
      primary_destination_id: data.primary_destination_id,
      img_baseurl: data.image_details?.prefix || null,
      default_img_index: data.default_image_index || null,
      img_suffix: data.image_details?.suffix || null
    };
    await repo.save(hotel);
    storedHotels.push(hotel);
  }

  return storedHotels;
}

export async function getFilteredHotels(filters: any) {
  const repo = Database.getRepository(Hotel);
  const qb = repo.createQueryBuilder("hotel");

  if (filters.city) {
    qb.andWhere("hotel.city = :city", { city: filters.city });
  }

  if (filters.rating && Array.isArray(filters.rating)) {
    qb.andWhere("hotel.rating IN (:...ratings)", { ratings: filters.rating });
  }

  if (filters.guestRating && Array.isArray(filters.guestRating)) {
    qb.andWhere("hotel.guestRating IN (:...guestRatings)", { guestRatings: filters.guestRating });
  }

  if (filters.priceRanges && Array.isArray(filters.priceRanges)) {
    const rangeConditions = filters.priceRanges.map((range: string, index: number) => {
      const [min, max] = range.split('-').map(Number);
      return `(hotel.price BETWEEN :min${index} AND :max${index})`;
    });

    const rangeParams = Object.fromEntries(
      filters.priceRanges.flatMap((range: string, index: number) => {
        const [min, max] = range.split('-').map(Number);
        return [[`min${index}`, min], [`max${index}`, max]];
      })
    );

    qb.andWhere(rangeConditions.join(' OR '), rangeParams);
  }

  return await qb.getMany();
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
