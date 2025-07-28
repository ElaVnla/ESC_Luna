import { Router } from 'express';
import { Database } from '../Database';
import { storeHotels } from '../Services/HotelService';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

//import other routers

import BookingRouter from './BookingRouter';
import CustomerRouter from './CustomerRouter';
import PaymentRouter from './PaymentRouter';
import GuestRouter from './GuestRouter'; 


const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'API router is working!' });
});

router.get('/hotels/syncByCity', async (req, res) => {
  const { cityRaw, guests, checkin, checkout } = req.query;
  const city = Array.isArray(cityRaw) ? cityRaw[0] : cityRaw;

  if (!city || typeof city !== 'string') {
    return res.status(400).json({ error: 'City is required and must be a string' });
  }

  if (!city || !guests || !checkin || !checkout) {
    return res.status(400).json({ error: 'Missing required query parameters' });
  }

  const filePath = path.join(__dirname, '../../destinations.csv');
  let destinationId: string;

  // Step 1: Get destinationId from CSV
  try {
    destinationId = await new Promise<string>((resolve, reject) => {
      const results: any[] = [];

      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          if (row.term && row.term.toLowerCase() === city.toLowerCase()) {
            results.push(row);
          }
        })
        .on('end', () => {
          if (results.length === 0) {
            return reject(new Error('City not found in destinations.csv'));
          }
          resolve(results[0].uid);
        })
        .on('error', reject);
    });

    console.log(`Found destination_id ${destinationId} for city ${city}`);

  } catch (err) {
    console.error('Error processing destinations.csv:', err);
    return res.status(404).json({ error: 'City not found or CSV processing failed' });
  }

  // Step 2: Fetch hotels using destinationId
  try {
    const response = await fetch(`http://hotelapi.loyalty.dev/api/hotels?destination_id=${destinationId}`);
    if (!response.ok) throw new Error('API returned non-200');
    const data = await response.json();

    await storeHotels(data);
    console.log(`Stored ${data.length} hotels for destinationId ${destinationId}`);
  } catch (apiErr) {
    console.error('Error syncing hotels from external API:', apiErr);
    // Don’t return error to frontend
  }

  // Step 3: Fetch hotel prices using same destinationId
  try {
    const externalQuery = new URLSearchParams({
      destination_id: destinationId,
      checkin: checkin as string,
      checkout: checkout as string,
      lang: 'en_US',
      currency: 'SGD',
      country_code: 'SG',
      guests: guests as string,
      partner_id: '1089',
      landing_page: 'wl-acme-earn',
      product_type: 'earn',
    });

    const apiRes = await fetch(`https://hotelapi.loyalty.dev/api/hotels/prices?${externalQuery}`);
    if (!apiRes.ok) throw new Error('Price API returned non-200');
    const apiData = await apiRes.json();

    return res.status(200).json(apiData);
  } catch (err) {
    console.error('Error fetching hotel prices:', err);
    return res.status(200).json({ warning: 'Hotel price API failed, but hotel list synced if available' });
  }
});

// router.get('/hotels/syncByCity', async (req, res) => {
//   //const city = req.query.city as string;
//   const { city, state, guests, checkin, checkout } = req.query;
//   console.log(city);

//   if (!city || !guests || !checkin || !checkout) {
//     return res.status(400).json({ error: 'Missing required query parameters' });
//   }

//   const results: any[] = [];
//   const filePath = path.join(__dirname, '../../destinations.csv');
//   //console.log(filePath);

//   // fetch hotels from destination
//   try {
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on('data', (row) => {
//         if (row.term && row.term.toLowerCase() === city.toLowerCase()) {
//           results.push(row);
//         }
//       })
//       .on('end', async () => {
//         if (results.length === 0) {
//           return res.status(404).json({ error: 'City not found in destinations.csv' });
//         }

//         const destinationId = results[0].uid;
//         console.log(`Found destination_id ${destinationId} for city ${city}`);

//         try {
//           const response = await fetch(`http://hotelapi.loyalty.dev/api/hotels?destination_id=${destinationId}`);
//           if (!response.ok) throw new Error('API returned non-200');
//           const data = await response.json();

//           await storeHotels(data);

//           return res.json({ synced: true, count: data.length });
//         } catch (apiErr) {
//           console.error('Error syncing from external API:', apiErr);
//           //return res.status(500).json({ error: 'Failed to fetch hotel data from API' });
//         }
//         return res.status(200).json({ synced: true }); // Always return 200 OK
//       });
//   } catch (err) {
//     console.error('Error processing destinations.csv:', err);
//     return res.status(500).json({ error: 'Server error' });
//   }

//   // fetch hotel prices
//   try {
//     // 1. Find destination_id for the city from your DB or mapping (stubbed here)
//     // In real use, replace this with a proper lookup or a separate API call
//     //const destination_id = 'RsBU';

//     // 2. Build query for external API
//     const externalQuery = new URLSearchParams({
//       destinationId,
//       checkin: checkin as string,
//       checkout: checkout as string,
//       lang: 'en_US',
//       currency: 'SGD',
//       country_code: 'SG',
//       guests: guests as string,
//       partner_id: '1089',
//       landing_page: 'wl-acme-earn',
//       product_type: 'earn',
//     });

//     // 3. Fetch from external API
//     const apiRes = await fetch(`https://hotelapi.loyalty.dev/api/hotels/prices?${externalQuery}`);
//     if (!apiRes.ok) throw new Error('External API error');

//     const apiData = await apiRes.json();
//     console.log(`Synced hotel data for ${city}:`, apiData);

//     // 4. (Optional) Save to your DB here...

//     return res.status(200).json(apiData);
//   } catch (err) {
//     console.error('Error syncing hotels:', err);
//     return res.status(500).json({ error: 'Failed to sync with external API' });
//   }
// });

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

router.use('/bookings', BookingRouter);
router.use('/customers', CustomerRouter);
router.use('/payments', PaymentRouter);
router.use('/guests', GuestRouter); 


export default router;