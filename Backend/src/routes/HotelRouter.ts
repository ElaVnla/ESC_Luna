import { Router } from "express";
import { Database } from "../Database";
import { getAllHotels, getHotelsByCity,getFilteredHotels } from "../Services/HotelService";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hotel API is working!" });
});

router.get("/getHotelsByCity", async (req, res) => {
  try {
    const cityParam = req.query.city;
    if (!cityParam || typeof cityParam !== "string") {
      return res.status(400).json({ error: "Missing or invalid city parameter" });
    }

    // Split by comma
    const parts = cityParam.split(",").map((part) => part.trim());

    // parts could be:
    // [city, countryCode] or [city, state, countryCode]

    if (parts.length < 2) {
      return res.status(400).json({ error: "City parameter must include city and country code at least" });
    }

    // Extract city, state, countryCode accordingly
    // State might be empty string, so if only two parts, state is empty
    const city = parts[0];
    let state = "";
    if (parts.length === 2) {
      // Format: city,countryCode (no state)
      state = "";
    } else if (parts.length >= 3) {
      // Format: city,state,countryCode (state may be empty string)
      state = parts[1];
    }

    // Now call your service function with these parameters
    const hotels = await getHotelsByCity(city);
    //const hotels = await getHotelsByCity(cityParam);

    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch hotels" });
  }
});

router.get("/getFilteredHotels", async (req, res) => {
  try {
    const { rawStarRatings, rawGuestRatings, rawPriceRanges } = req.query;
    console.log(rawStarRatings, rawGuestRatings, rawPriceRanges);
    const filters: any = {};
    let priceRanges: string[] = [];

    // Star Ratings
    if (typeof rawStarRatings === "string") {
      const stars = rawStarRatings
        .split(",")
        .map(s => Number(s.trim()))
        .filter(n => !isNaN(n));
      if (stars.length > 0) filters.rating = stars;
    }

    // Guest Ratings
    if (typeof rawGuestRatings === "string") {
      const guests = rawGuestRatings
        .split(",")
        .map(s => Number(s.trim()))
        .filter(n => !isNaN(n));
      if (guests.length > 0) filters.guestRating = guests;
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
      //if (priceRanges.length > 0) filters.priceRanges = priceRanges;
    }

    const hotels = await getFilteredHotels(filters);
    res.json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to filter hotels" });
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

// router.post("/updateHotels", async (req, res) => {
//   const destinationId = req.query.destination_id as string;
//   if (!destinationId) {
//     return res
//       .status(400)
//       .json({ error: "Missing destination_id query param" });
//   }

//   try {
//     const savedHotels = await syncHotelsFromAPI(destinationId);
//     res.json({ message: "Hotels synced", count: savedHotels.length });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to sync hotels from API" });
//   }
// });

// router.get("/getHotels", async (req, res) => {
//   try {
//     const response = await syncHotelsFromAPI();
//     res.json(response);
//   } catch (error) {
//     console.error("Error fetching external data:", error);
//     res.status(500).json({ message: "Failed to fetch external data" });
//   }
// });

export default router;
