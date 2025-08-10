import { Database } from '../Database';

export async function upsertRoomFromApi(payload: {
  id: string;                 // API key
  hotel_id: string;
  room_type?: string | null;
  normalized_description?: string | null;
  description?: string | null;
  long_description?: string | null;
  amenities?: any[] | null;
  price?: number | null;
  images?: any[] | null;
  booking_key?: string | null;
}) {
  const db = Database;

  // MySQL upsert
  await db.query(
    `INSERT INTO rooms (
       id, hotel_id, room_type, normalized_description, description,
       long_description, amenities, price, images, booking_key
     ) VALUES (?, ?, ?, ?, ?, ?, CAST(? AS JSON), ?, CAST(? AS JSON), ?)
     ON DUPLICATE KEY UPDATE
       hotel_id = VALUES(hotel_id),
       room_type = VALUES(room_type),
       normalized_description = VALUES(normalized_description),
       description = VALUES(description),
       long_description = VALUES(long_description),
       amenities = VALUES(amenities),
       price = VALUES(price),
       images = VALUES(images),
       booking_key = VALUES(booking_key)`,
    [
      payload.id,
      payload.hotel_id,
      payload.room_type ?? null,
      payload.normalized_description ?? null,
      payload.description ?? null,
      payload.long_description ?? null,
      JSON.stringify(payload.amenities ?? null),
      payload.price ?? null,
      JSON.stringify(payload.images ?? null),
      payload.booking_key ?? payload.id,
    ]
  );

  const rows = await db.query(`SELECT * FROM rooms WHERE id = ?`, [payload.id]);
  return rows[0];
}

export async function getRoomByKey(key: string) {
  const db = Database;
  const rows = await db.query(
    `SELECT * FROM rooms WHERE id = ? OR booking_key = ? LIMIT 1`,
    [key, key]
  );
  return rows[0] ?? null;
}