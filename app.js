const express = require('express');
const bodyParser = require('body-parser');
const cookieParse = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const SaniTize = require('express-mongo-sanitize');
const hpp = require('hpp');
const corse = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const router = require('./src/Route/api');

// Middleware
app.use(corse());
app.use(helmet());
app.use(hpp());
app.use(SaniTize());
app.use(cookieParse());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());

// Rate limiter
const limit = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // limit each IP to 1000 requests per windowMs
});
app.use(limit);

// Disable ETag
app.set('etag', false);

// Static file serving
app.use(express.static('Client/dist'));

// MongoDB connection
const url = "mongodb+srv://Food25:food10@cluster1.iwalr16.mongodb.net/Food";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

async function connectToDB() {
    try {
        await mongoose.connect(url, options);
        console.log('MongoDB connection successfully established');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}

connectToDB();

// Routing
app.use('/api/v1', router);

// Serve the main HTML file for all routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Client', 'dist', 'index.html'));
});

// Undefined route handler
app.use('*', (req, res) => {
    res.status(404).json({ data: 'Not found' });
});

module.exports = app;
