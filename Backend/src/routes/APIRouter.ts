import { Router } from 'express';
import { Database } from '../Database';
import { storeHotels } from '../Services/HotelService';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'API router is working!' });
});

router.get('/hotels/syncByCity', async (req, res) => {
  const city = req.query.city as string;
  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  const results: any[] = [];
  const filePath = path.join(__dirname, '../../destinations.csv');
  //console.log(filePath);

  try {
    // Load destination.csv
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        if (row.term && row.term.toLowerCase() === city.toLowerCase()) {
          results.push(row);
        }
      })
      .on('end', async () => {
        if (results.length === 0) {
          return res.status(404).json({ error: 'City not found in destinations.csv' });
        }

        const destinationId = results[0].uid;
        console.log(`Found destination_id ${destinationId} for city ${city}`);

        try {
          const response = await fetch(`http://hotelapi.loyalty.dev/api/hotels?destination_id=${destinationId}`);
          const data = await response.json();

          await storeHotels(data);

          return res.json({ synced: true, count: data.length });
        } catch (apiErr) {
          console.error('Error syncing from external API:', apiErr);
          return res.status(500).json({ error: 'Failed to fetch hotel data from API' });
        }
      });
  } catch (err) {
    console.error('Error processing destinations.csv:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.get('/hotels/sync/:id', async (req, res) => {
  const { id } = req.params;
  console.log(`Fetching hotel with id: ${id}`);
  try {
    const response = await fetch(`http://hotelapi.loyalty.dev/api/hotels?destination_id=${id}`);
    const data = await response.json();

    await storeHotels(data); // sync to DB

    res.json(data);
  } catch (err) {
    console.error('Error syncing hotels:', err);
    res.status(500).json({ error: 'Failed to sync hotels from API' });
  }
});

router.get('/hotels/:id', async (req, res) => {
  const { id } = req.params;
  console.log(`Fetching hotel with id: ${id}`);
  try {
    const response = await fetch(`http://hotelapi.loyalty.dev/api/hotels/${id}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching hotel data:', err);
    res.status(500).json({ error: 'Failed to fetch hotel data' });
  }
});
router.get('/hotels/:id/price', async (req, res) => {
  const { id } = req.params;
  const queryParams = new URLSearchParams(req.query as Record<string, string>).toString();
  console.log(`Fetching hotel with id: ${id} and ${queryParams}`);
  try {
    const response = await fetch(`https://hotelapi.loyalty.dev/api/hotels/${id}/price?${queryParams}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching hotel data:', err);
    res.status(500).json({ error: 'Failed to fetch hotel data' });
  }
});


export default router;