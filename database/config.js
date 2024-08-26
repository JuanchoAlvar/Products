const moongose = require('mongoose');
require('dotenv').config();

moongose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

module.exports = moongose;


