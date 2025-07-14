import { Router } from "express";
import { Database } from "../Database";
import { getAllHotels, syncHotelsFromAPI } from "../Services/HotelService";
const axios = require("axios");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hotel API is working!" });
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

router.get("/getHotels", async (req, res) => {
  try {
    const response = await syncHotelsFromAPI();
    res.json(response);
  } catch (error) {
    console.error("Error fetching external data:", error);
    res.status(500).json({ message: "Failed to fetch external data" });
  }
});

export default router;
