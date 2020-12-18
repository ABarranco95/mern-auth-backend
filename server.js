// Imports 
require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
require('./config/passport')(passport);
const PORT = process.eventNames.PORT || 8000;


const users = require('./controllers/users');

// MIDDLEWARE

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Smile you are being watched by the Backend Engineer'})
});

app.use('/controllers/users', users);

app.listen(PORT, () => {
    console.log(`🎧Listening on PORT ${PORT}`)
});