require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

app.listen(PORT, () => {
    console.log('Server running on port $ {Port}');
    console.log('Base URI: http://localhost:${PORT}${BASE_URI}');


});

//Import the routes
const apiRoutes = require('./src/routes/apiRoutes');

// Tell the app use them
// All URL will start with/api/v1(from your env.file)
