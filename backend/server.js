// server.js

// 1. Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');  // if you're using Express < 4.16.0
const dotenv = require('dotenv');

// 2. Load environment variables from .env file
dotenv.config();

// 3. Initialize the Express application
const app = express();

// 4. Middleware setup
// If you're using Express < 4.16.0, you might need the body-parser middleware:
// app.use(bodyParser.json());
// For Express 4.16.0 and later, the below line will work:
app.use(express.json());

// 5. Database connection setup
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdbname';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// 6. Define your routes
app.get('/', (req, res) => {
    res.send('Hello from Express server!');
});

// ... additional routes ...

// 7. Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// 8. Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

