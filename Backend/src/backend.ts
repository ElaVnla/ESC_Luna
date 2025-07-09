// Backend setup tutorial
// https://www.youtube.com/watch?v=w3vs4a03y3I
// https://www.youtube.com/watch?v=H91aqUHn8sE
// https://www.youtube.com/watch?v=WPIuGIAD4hY (main one)

// Install dependencies
import express from "express";
import mysql from "mysql2";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { Database } from './Database';
import DestinationRouter from './routes/DestinationRouter';
import HotelRouter from './routes/HotelRouter';
import CustomerRouter from './routes/CustomerRouter';
import RoomRouter from './routes/RoomRouter';
import BookingRouter from './routes/BookingRouter';
import PaymentRouter from './routes/PaymentRouter'; 


// create instance of express
const app = express();

// setup middleware functions to serve static files
// handles client side
app.use(express.static(path.join(__dirname, 'public')));
// Address security issues
app.use(cors()); // Manage and control web security
// Parsing JSON data from incoming HTTP requests
app.use(express.json());

// configure application port
const PORT = process.env.PORT || 3000;

// Setup Routes connections
app.use('/destinations', DestinationRouter);
app.use('/hotels', HotelRouter);
app.use('/customers', CustomerRouter);
app.use('/rooms', RoomRouter);
app.use('/bookings', BookingRouter);
app.use('/payments', PaymentRouter);

// Setup "/" route to serve the index.html file
app.get('/', (req, res) => {
  res.json({ message: 'Backend Server is running YIPPIEEE!' });
});

// Initialize database connection
Database.initialize()
    .then(() => {
        console.log('Database connection established successfully');
        
        // Start the server after successful database connection
        app.listen(PORT, () => {
            console.log('');
            console.log(`Server is running on port ${PORT}`);
            console.log('');
        });
    })
    .catch((error) => {
        console.error('Error establishing database connection:', error);
    });

// Uncomment the following lines to start the server after database connection,
// but it's better to start the server only after the database connection is established. 

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
