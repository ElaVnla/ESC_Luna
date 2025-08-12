import { Database } from '../Database';
import { Hotel } from "../entities/Hotel";
import { HotelPrices } from "../entities/HotelPrices";

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
    dryCleaning: "Dry Cleaning",
    airportTransportation: "Airport Transportation",
    restrictedAccess: "Restricted Access",
    carRentDesk: "Car-rent Desk",
    inHouseBar: "In-house Bar",
    coffeeTeaMaker: "Coffee & Tea Maker",
    valetParking: "Valet Parking",
    handicapAccessible: "Handicap Accessible",
    petsAllowed: "Pets Allowed",
    childrenAllowed: "Children Allowed",
    golfCourse: "Golf Course"

  }
  return Object.entries(amenities)
    .filter(([_, value]) => value)
    .map(([key]) => keyMap[key] || key);
}

export async function getHotelsByCity(
  city: string, 
  checkin: string, 
  checkout: string, 
  guests: string, 
  rooms: string,
  state?: string) {
  // Retrieve all hotels based on destination city
  const hotelsRepo = Database.getRepository(Hotel);

  // const query: any = {
  //   city
  // };

  // Subquery: Get lowest price for the exact search parameters
  const priceSubQuery = Database.getRepository(HotelPrices)
    .createQueryBuilder("hp")
    .select("hp.id", "id")
    .addSelect("MIN(hp.total_price)", "total_price")
    .where("hp.checkin_date = :checkin", { checkin: checkin })
    .andWhere("hp.checkout_date = :checkout", { checkout: checkout })
    .andWhere("hp.guests = :guests", { guests: guests })
    .andWhere("hp.rooms = :rooms", { rooms: rooms })
    .groupBy("hp.id");

  const hotelQb = hotelsRepo
    .createQueryBuilder("hotel")
    .innerJoin(
      "(" + priceSubQuery.getQuery() + ")",
      "hp_min",
      "hp_min.id = hotel.id"
    )
    .addSelect("hp_min.total_price", "total_price")
    .setParameters(priceSubQuery.getParameters()); // Pass subquery parameters

  // if (state) {
  //   query.state = state;
  // }

  if (state) {
    hotelQb.andWhere("hotel.state = :state", { state });
  }

  hotelQb.andWhere("hotel.city = :city", { city });

  const hotels = await hotelQb.getRawMany();
  return hotels;
}

export async function getCountryCode(rawCity: string, state?: string) {
  // Retrieve all hotels based on destination city
  const hotelsRepo = Database.getRepository(Hotel);

  const city = rawCity.includes(",") ? rawCity.split(",")[0].trim() : rawCity;
  
  const query: any = {
    city
  };

  if (state) {
    query.state = state;
  }

  const hotels = await hotelsRepo.findBy(query);
  if (!hotels || hotels.length === 0) {
    return null; // no hotels found for city/state
  }

  console.log(city, state);

  // Try to find first valid country_code
  for (const hotel of hotels) {
    if (hotel.country_code && hotel.country_code.trim() !== "") {
      return hotel.country_code;
    }
  }

  return null; // no country_code found in any hotel
}

export async function storeHotels(hotelsData: any[]) {
  const repo = Database.getRepository(Hotel);
  const storedHotels: Hotel[] = [];

  let failed = 0;
  console.log(`Attempting to store ${hotelsData.length} hotels`);

  for (const data of hotelsData) {
    const hotel: Hotel = {
      id: data.id,
      name: data.name,
      address: data.address,
      star_rating: data.rating,
      guest_rating: data.trustyou?.score?.kaligo_overall,
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
      country_code: data.original_metadata?.country || "",
      image_count: data.image_details?.count || 0,
      primary_destination_id: data.primary_destination_id,
      img_baseurl: data.image_details?.prefix || null,
      default_img_index: data.default_image_index || null,
      img_suffix: data.image_details?.suffix || null
    };

    try {
      await repo.save(hotel);
      storedHotels.push(hotel);
    } catch (err) {
      failed++;
      console.warn(`Failed to save hotel ${hotel.id}:`, err);
    }
  }
  console.log(`Stored ${storedHotels.length}, failed ${failed}`);
  return storedHotels;
}

export async function updateHotelPrices(pricesData: any[], {
    checkin_date,
    checkout_date,
    guests,
    rooms,
  }: {
    checkin_date: string;
    checkout_date: string;
    guests: number;
    rooms: number;
  }) {
  const repo = Database.getRepository(HotelPrices);

  for (const priceData of pricesData) {
    //console.log(priceData);
    const id = priceData.id; // or however the API identifies the hotel
    //const { checkin_date, checkout_date, guests, rooms } = queryParams;
    console.log(id, priceData.lowest_converted_price)

    const existing = await repo.findOne({
      where: { id, checkin_date, checkout_date, guests, rooms },
    });

    if (existing) {
      await repo.update( 
        // existing.id,  old
      { // new
        id: existing.id,
        checkin_date: existing.checkin_date,
        checkout_date: existing.checkout_date,
        guests: existing.guests,
        rooms: existing.rooms
      }, 
      {
        total_price: priceData.lowest_converted_price // adjust to API’s field
      });
    } else {
      await repo.insert({
        id,
        checkin_date,
        checkout_date,
        guests,
        rooms,
        currency: "SGD",
        total_price: priceData.lowest_converted_price
      });
    }
  }
}

  // update each hotel with its lowest price based on unique key
  // for (const priceData of pricesData) {
  //   const {
  //     hotel_id,
  //     checkin_date,
  //     checkout_date,
  //     guests,
  //     rooms,
  //     total_price,
  //     currency
  //   } = priceData;

  //   const existing = await repo.findOne({
  //     where: {
  //       hotel_id,
  //       checkin_date,
  //       checkout_date,
  //       guests,
  //       rooms
  //     },
  //   });

  //   if (existing) {
  //     await repo.update(existing.hotel_id, {
  //       total_price,
  //       currency,
  //       last_fetched_at: new Date(),
  //     });
  //   } else {
  //     await repo.insert({
  //       hotel_id,
  //       checkin_date,
  //       checkout_date,
  //       guests,
  //       rooms,
  //       currency,
  //       total_price,
  //       last_fetched_at: new Date(),
  //     });
  //   }
  // for (const hotelPrice of pricesData) {
  //   const { id, lowest_converted_price } = hotelPrice;

  //   await repo.update(id, {
  //     total_price: lowest_converted_price ?? 0, // fallback to 0 if undefined
  //   });
  // }

export async function getFilteredHotels(filters: any) {
  const hotel_repo = Database.getRepository(Hotel);
  const hotel_qb = hotel_repo.createQueryBuilder("hotel")
    .leftJoinAndSelect("hotel_prices", "hotelprices", "hotel.id = hotelprices.id");
  // const hotelprice_repo = Database.getRepository(HotelPrice);
  // const hotel_qb = hotel_repo.createQueryBuilder("hotel");
  // const hotelprice_qb = hotelprice_repo.createQueryBuilder("hotelprice");

  if (filters.city) {
    hotel_qb.andWhere("hotel.city = :city", { city: filters.city });
  }

  if (filters.star_rating && Array.isArray(filters.star_rating)) {
    hotel_qb.andWhere("hotel.star_rating IN (:...ratings)", { ratings: filters.star_rating });
  }

  if (filters.guest_rating_min !== undefined && filters.guest_rating_max !== undefined) {
    hotel_qb.andWhere(
      "hotel.guest_rating BETWEEN :minGuest AND :maxGuest",
      {
        minGuest: filters.guest_rating_min,
        maxGuest: filters.guest_rating_max,
      }
    );
  }

  if (filters.priceRanges && Array.isArray(filters.priceRanges)) {
    const rangeConditions = filters.priceRanges.map((range: { min: number; max: number }, index: number) => {
      return `(hotelprices.total_price BETWEEN :min${index} AND :max${index})`;
    });

    const rangeParams = Object.fromEntries(
      filters.priceRanges.flatMap((range: { min: number; max: number }, index: number) => [
        [`min${index}`, range.min],
        [`max${index}`, range.max],
      ])
    );

    console.log(filters.star_rating);
    console.log(filters.guest_rating);
    console.log(filters.priceRanges);

    hotel_qb.andWhere(rangeConditions.join(' OR '), rangeParams);
  }

  return await hotel_qb.getMany();
}

// export async function getFilteredHotels(filters: any) {
//   const hotelRepo = Database.getRepository(Hotel);
//   const priceSubQuery = Database.getRepository(HotelPrices)
//     .createQueryBuilder("hp")
//     .select("hp.id", "id")
//     .addSelect("MIN(hp.total_price)", "total_price")
//     .where("hp.checkin_date = :checkin", { checkin: filters.checkin })
//     .andWhere("hp.checkout_date = :checkout", { checkout: filters.checkout })
//     .andWhere("hp.guests = :guests", { guests: filters.guests })
//     .andWhere("hp.rooms = :rooms", { rooms: filters.rooms })
//     .groupBy("hp.id");

//   const hotelQb = hotelRepo
//     .createQueryBuilder("hotel")
//     .innerJoin(
//       "(" + priceSubQuery.getQuery() + ")",
//       "hp_min",
//       "hp_min.id = hotel.id"
//     )
//     .addSelect("hp_min.total_price", "total_price")
//     .setParameters(priceSubQuery.getParameters());

//   if (filters.city) {
//     hotelQb.andWhere("hotel.city = :city", { city: filters.city });
//   }

//   if (filters.state) {
//     hotelQb.andWhere("hotel.state = :state", { state: filters.state });
//   }

//   if (filters.star_rating && Array.isArray(filters.star_rating)) {
//     hotelQb.andWhere("hotel.star_rating IN (:...ratings)", {
//       ratings: filters.star_rating,
//     });
//   }

//   if (
//     filters.guest_rating_min !== undefined &&
//     filters.guest_rating_max !== undefined
//   ) {
//     hotelQb.andWhere(
//       "hotel.guest_rating BETWEEN :minGuest AND :maxGuest",
//       {
//         minGuest: filters.guest_rating_min,
//         maxGuest: filters.guest_rating_max,
//       }
//     );
//   }

//   if (filters.priceRanges && Array.isArray(filters.priceRanges)) {
//     const rangeConditions = filters.priceRanges.map(
//       (range: { min: number; max: number }, index: number) => {
//         return `(hp_min.total_price BETWEEN :min${index} AND :max${index})`;
//       }
//     );

//     const rangeParams = Object.fromEntries(
//       filters.priceRanges.flatMap(
//         (range: { min: number; max: number }, index: number) => [
//           [`min${index}`, range.min],
//           [`max${index}`, range.max],
//         ]
//       )
//     );

//     hotelQb.andWhere(rangeConditions.join(" OR "), rangeParams);
//   }

//   const hotels = await hotelQb.getRawMany();
//   return hotels;
// }
