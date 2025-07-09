"use strict";
// Backend setup tutorial
// https://www.youtube.com/watch?v=w3vs4a03y3I
// https://www.youtube.com/watch?v=H91aqUHn8sE
// https://www.youtube.com/watch?v=WPIuGIAD4hY (main one)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Install dependencies
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const Database_1 = require("./Database");
const DestinationRouter_1 = __importDefault(require("./routes/DestinationRouter"));
const HotelRouter_1 = __importDefault(require("./routes/HotelRouter"));
const CustomerRouter_1 = __importDefault(require("./routes/CustomerRouter"));
const RoomRouter_1 = __importDefault(require("./routes/RoomRouter"));
const BookingRouter_1 = __importDefault(require("./routes/BookingRouter"));
const PaymentRouter_1 = __importDefault(require("./routes/PaymentRouter"));
// create instance of express
const app = (0, express_1.default)();
// setup middleware functions to serve static files
// handles client side
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Address security issues
app.use((0, cors_1.default)()); // Manage and control web security
// Parsing JSON data from incoming HTTP requests
app.use(express_1.default.json());
// configure application port
const PORT = process.env.PORT || 3000;
// Setup Routes connections
app.use('/api/destinations', DestinationRouter_1.default);
app.use('/api/hotels', HotelRouter_1.default);
app.use('/api/customers', CustomerRouter_1.default);
app.use('/api/rooms', RoomRouter_1.default);
app.use('/api/bookings', BookingRouter_1.default);
app.use('/api/payments', PaymentRouter_1.default);
// Initialize database connection
Database_1.Database.initialize()
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
//# sourceMappingURL=backend.js.map