import { Router } from 'express';
import { Database } from '../Database';
import { upsertRoomFromApi, getRoomByKey } from '../Services/RoomService';

const router = Router();

// Simple health check for the Room API
router.get('/', (req, res) => {
  res.json({ message: 'Room API is working!' });
});

// Add or update a room using data from the request body
router.post("/upsert", async (req, res) => {
  try {
    const room = await upsertRoomFromApi(req.body); // expects room data in request body
    res.status(200).json({ ok: true, room });
  } catch (e: any) {
    console.error("Rooms upsert error:", e);
    res.status(500).json({ error: "Failed to upsert room" });
  }
});

// Get a room by its key (used in bookings.room_id)
router.get("/:key", async (req, res) => {
  try {
    const room = await getRoomByKey(req.params.key);
    if (!room) return res.status(404).json({ error: "Not found" });
    res.json(room);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;