import { Router } from "express";
import { Database } from "../Database";
import { getAllHotels, getHotelsByCity, getFilteredHotels } from "../Services/HotelService";
import { HotelPrices } from "../entities/HotelPrices";
import { getRepository } from "typeorm";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hotel API is working!" });
});

router.get("/getHotelsByCity", async (req, res) => {
  try {
    const { city, checkin, checkout, guests, rooms } = req.query;
    //const cityParam = req.query.city;
    if (!city || typeof city !== "string") {
      return res.status(400).json({ error: "Missing or invalid city parameter" });
    }

    // parse city,state,country from city param string (e.g. "Singapore, Singapore")
    const parts = city.split(",").map((p) => p.trim());
    const cityName = parts[0];
    let state = "";
    if (parts.length >= 3) {
      state = parts[1];
    }

    const hotels = await getHotelsByCity(
      cityName, 
      checkin as string, 
      checkout as string, 
      guests as string, 
      rooms as string 
    );

    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch hotels" });
  }
});

// router.get("/getFilteredHotels", async (req, res) => {
//   try {
//     const {
//       rawStarRatings,
//       guestRatingMin,
//       guestRatingMax,
//       rawPriceRanges,
//       checkin,
//       checkout,
//       guests,
//       rooms,
//       city,
//       state,
//     } = req.query;

//     const filters: any = {
//       city,
//       state,
//       checkin,
//       checkout,
//       guests,
//       rooms,
//     };

//     if (typeof rawStarRatings === "string") {
//       filters.star_rating = rawStarRatings
//         .split(",")
//         .map((s) => Number(s.trim()))
//         .filter((n) => !isNaN(n));
//     }

//     if (guestRatingMin && guestRatingMax) {
//       filters.guest_rating_min = Number(guestRatingMin);
//       filters.guest_rating_max = Number(guestRatingMax);
//     }

//     if (typeof rawPriceRanges === "string") {
//       const priceRanges = rawPriceRanges
//         .split(",")
//         .map((s) => s.trim())
//         .filter(Boolean)
//         .map((range) => {
//           const [min, max] = range.split("-").map(Number);
//           if (!isNaN(min) && !isNaN(max)) return { min, max };
//           return null;
//         })
//         .filter(Boolean);
//       filters.priceRanges = priceRanges;
//     }

//     const hotels = await getFilteredHotels(filters);
//     res.json(hotels);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to filter hotels" });
//   }
// });

router.get("/getFilteredHotels", async (req, res) => {
  try {
    const { rawStarRatings, guestRatingMin, guestRatingMax, rawPriceRanges } = req.query;
    console.log(rawStarRatings, guestRatingMin, guestRatingMax, rawPriceRanges);
    const filters: any = {};
    let priceRanges: string[] = [];

    // Star Ratings
    if (typeof rawStarRatings === "string") {
      const stars = rawStarRatings
        .split(",")
        .map(s => Number(s.trim()))
        .filter(n => !isNaN(n));
      if (stars.length > 0) filters.star_rating = stars;
    }

    // Guest Ratings
    if (guestRatingMin && guestRatingMax) {
      filters.guest_rating_min = Number(guestRatingMin);
      filters.guest_rating_max = Number(guestRatingMax);
    }

    // Price Ranges
    console.log(typeof(rawPriceRanges));
    if (typeof rawPriceRanges === "string") {
      priceRanges = rawPriceRanges
        .split(",")
        .map(s => s.trim())
        .filter(Boolean); // keep strings like "100-200"

      const parsedRanges = priceRanges
        .map(range => {
          const [min, max] = range.split("-").map(Number);
          if (!isNaN(min) && !isNaN(max)) return { min, max };
          return null;
        })
        .filter(Boolean); // Remove any nulls from invalid format

      if (parsedRanges.length > 0) filters.priceRanges = parsedRanges;
      console.log("Parsed price ranges:", filters.priceRanges);
    }

    const hotels = await getFilteredHotels(filters);
    res.json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to filter hotels" });
  }
});

router.get("/getHotelPrices", async (req, res) => {
  try {
    const {
      city,
      state,
      checkin,
      checkout,
      guests,
      rooms,
      currency,
    } = req.query;

    // Validate required params
    if (!city || !checkin || !checkout || !guests || !rooms) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const hotelPricesRepo = getRepository(HotelPrices);

    // Build query to fetch prices matching the filters
    // Note: You might need to join with hotels table if you want to filter by city and state
    // For now, assuming city and state filtering is done elsewhere or hotelPrices table contains this info
    // Otherwise join with hotels on hotelPrices.id = hotels.id and filter on hotels.city/state

    const prices = await hotelPricesRepo
      .createQueryBuilder("hp")
      .select(["hp.id", "hp.total_price"])
      .where("hp.checkin_date = :checkin", { checkin })
      .andWhere("hp.checkout_date = :checkout", { checkout })
      .andWhere("hp.guests = :guests", { guests: Number(guests) })
      .andWhere("hp.rooms = :rooms", { rooms: Number(rooms) })
      .andWhere("hp.currency = :currency", { currency: currency || "SGD" })
      .getMany();

    return res.json(prices);
  } catch (error) {
    console.error("Error fetching hotel prices:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/getAllHotels", async (req, res) => {
  try {
    const hotels = await getAllHotels();
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch hotels" });
  }
});

export default router;
