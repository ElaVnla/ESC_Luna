import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());  // allows all origins by default (good for local dev)

app.get('/api/hotels/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`https://hotelapi.loyalty.dev/api/hotels/${id}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch hotel data' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend proxy running at http://localhost:${PORT}`);
});
