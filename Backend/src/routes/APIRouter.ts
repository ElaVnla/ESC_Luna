import { Router } from 'express';
import { Database } from '../Database';
import { getCountryCode, storeHotels, updateHotelPrices } from '../Services/HotelService';
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

// Fetch hotels by destination (city)
router.get('/hotels/syncByCity', async (req, res) => {
  const { city } = req.query;

  if (!city || typeof city !== 'string') {
    return res.status(400).json({ error: 'City is required and must be a string' });
  }

  const filePath = path.join(__dirname, '../../destinations.csv');
  let destinationId: string;

  try {
    ({ destinationId } = await new Promise<{ 
      destinationId: string }>((resolve, reject) => {
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

          //resolve(results[0].uid); // destinationId
          resolve({ destinationId: results[0].uid });
          //const match = results[0];
          //resolve({ destinationId: match.uid, countryCode: match.country_code });
        })
        .on('error', reject);
    }));

    console.log(`Found destination_id ${destinationId} for city ${city}`);
  } catch (err) {
    console.error('Error processing destinations.csv:', err);
    return res.status(404).json({ error: 'City not found or CSV processing failed' });
  }

  try {
    const response = await fetch(`http://hotelapi.loyalty.dev/api/hotels?destination_id=${destinationId}`);
    if (!response.ok) throw new Error('API returned non-200');
    const data = await response.json();

    storeHotels(data);

    console.log(`Stored ${data.length} hotels for destinationId ${destinationId}`);
    return res.status(200).json({
      message: `Stored ${data.length} hotels`,
      city,
      destinationId,
      count: data.length,
    });
  } catch (apiErr) {
    console.error('Error syncing hotels from external API:', apiErr);
    return res.status(500).json({ error: 'Hotel sync failed' });
  }
});

// Fetch cheapest price for all hotels in the destination
router.get('/hotels/prices', async (req, res) => {
  console.log("Received query:", req.query);
  const { city, state, destination_id, checkin, checkout, guests } = req.query;

  if (!city || !destination_id || !guests || !checkin || !checkout) {
    return res.status(400).json({ error: 'Missing required query parameters' });
  }

  // get country code from city and state
  const countryCode = await getCountryCode(city as string, state as string);
  //const countryCode = "IT";
  console.log(`Country code found ${countryCode}`);
  if (!countryCode) {
    return res.status(404).json({ error: 'Country code not found for given city/state' });
  }

  try {
    const externalQuery = new URLSearchParams({
      destination_id: destination_id as string,
      checkin: checkin as string,
      checkout: checkout as string,
      lang: 'en_US',
      currency: 'SGD',
      country_code: countryCode as string,
      guests: (guests as string).trim(),
      partner_id: '1089',
      landing_page: 'wl-acme-earn',
      product_type: 'earn',
    });

    console.log("Final price URL APIRouter:", `/api/hotels/prices?${externalQuery.toString()}`);
    const apiRes = await fetch(`https://hotelapi.loyalty.dev/api/hotels/prices?${externalQuery}`);
    const bodyText = await apiRes.text();

    let parsed;
    try {
      parsed = JSON.parse(bodyText);
    } catch {
      return res.status(500).json({ error: 'Failed to parse price API response' });
    }

    if (!apiRes.ok) {
      console.error("Hotel price API error response:", parsed);
      return res.status(200).json({
        warning: `Hotel price API returned ${apiRes.status}, possibly no results`,
        response: parsed,
      });
    }

    const hotels = parsed.hotels;
    //console.log(hotels);
    if (!Array.isArray(hotels)) {
      return res.status(500).json({ error: 'Hotel price API did not return a hotels array' });
    }
    
    await updateHotelPrices(hotels);
    return res.status(200).json(hotels);
  } catch (err) {
    console.error('Error fetching hotel prices:', err);
    return res.status(500).json({ error: 'Hotel price API failed' });
  }
});


// router.get('/hotels/syncByCity', async (req, res) => {
//   const { city, state, guests, checkin, checkout } = req.query;
//   console.log(city);
//   console.log(state);
//   console.log(guests);
//   console.log(checkin);
//   console.log(checkout);
//   //const city = Array.isArray(cityRaw) ? cityRaw[0] : cityRaw;

//   if (!city || typeof city !== 'string') {
//     return res.status(400).json({ error: 'City is required and must be a string' });
//   }

//   if (!city || !guests || !checkin || !checkout) {
//     return res.status(400).json({ error: 'Missing required query parameters' });
//   }

//   const filePath = path.join(__dirname, '../../destinations.csv');
//   let destinationId: string;

//   // Step 1: Get destinationId from CSV
//   try {
//     destinationId = await new Promise<string>((resolve, reject) => {
//       const results: any[] = [];

//       fs.createReadStream(filePath)
//         .pipe(csv())
//         .on('data', (row) => {
//           if (row.term && row.term.toLowerCase() === city.toLowerCase()) {
//             results.push(row);
//           }
//         })
//         .on('end', () => {
//           if (results.length === 0) {
//             return reject(new Error('City not found in destinations.csv'));
//           }
//           resolve(results[0].uid);
//         })
//         .on('error', reject);
//     });

//     console.log(`Found destination_id ${destinationId} for city ${city}`);

//   } catch (err) {
//     console.error('Error processing destinations.csv:', err);
//     return res.status(404).json({ error: 'City not found or CSV processing failed' });
//   }

//   // Step 2: Fetch hotels using destinationId
//   try {
//     const response = await fetch(`http://hotelapi.loyalty.dev/api/hotels?destination_id=${destinationId}`);
//     if (!response.ok) throw new Error('API returned non-200');
//     const data = await response.json();

//     await storeHotels(data);
//     console.log(`Stored ${data.length} hotels for destinationId ${destinationId}`);
//   } catch (apiErr) {
//     console.error('Error syncing hotels from external API:', apiErr);
//     // Don’t return error to frontend
//   }

//   // Step 3: Fetch hotel prices using same destinationId
//   try {
//     const externalQuery = new URLSearchParams({
//       destination_id: destinationId,
//       checkin: checkin as string,
//       checkout: checkout as string,
//       lang: 'en_US',
//       currency: 'SGD',
//       country_code: 'SG',
//       guests: (guests as string).trim(),
//       partner_id: '1089',
//       landing_page: 'wl-acme-earn',
//       product_type: 'earn',
//     });
//     console.log(externalQuery);
//     console.log(externalQuery.toString())

//     const apiRes = await fetch(`https://hotelapi.loyalty.dev/api/hotels/prices?${externalQuery}`);
//     //const apiRes = await fetch(`https://hotelapi.loyalty.dev/api/hotels/prices?destination_id=RsBU&checkin=2025-10-01&checkout=2025-10-07&lang=en_US&currency=SGD&country_code=SG&guests=2&partner_id=1089&landing_page=wl-acme-earn&product_type=earn`);  
//     const bodyText = await apiRes.text();

//     let parsed;
//     try {
//       parsed = JSON.parse(bodyText);
//       console.log(parsed);
//     } catch {
//       return res.status(500).json({ error: 'Failed to parse price API response' });
//     }

//     if (!apiRes.ok) {
//       console.error("Hotel price API error response:", parsed);
//       return res.status(200).json({
//         warning: `Hotel price API returned ${apiRes.status}, possibly no results`,
//         response: parsed
//       });
//     }

//     return res.status(200).json(parsed);

//     // return res.status(200).json(apiData);
//   } catch (err) {
//     console.error('Error fetching hotel prices:', err);
//     return res.status(200).json({ warning: 'Hotel price API failed, but hotel list synced if available' });
//   }
// });


// NOT CURRENTLY USED
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