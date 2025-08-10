import { Router } from 'express';
import { Database } from '../Database';
import { upsertRoomFromApi, getRoomByKey } from '../Services/RoomService';
const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Room API is working!' });
});


router.post("/upsert", async (req, res) => {
  try {
    const room = await upsertRoomFromApi(req.body); // expects mapped shape below
    res.status(200).json({ ok: true, room });
  } catch (e: any) {
    console.error("Rooms upsert error:", e);
    res.status(500).json({ error: "Failed to upsert room" });
  }
});

// for Flow 2 retrieval by the key you stored in bookings.room_id
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