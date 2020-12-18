require('dotenv').config

// A PASSPORT STRATEGY FOR AUTHENTICATING WITH A JSON WEB TOKEN
//THIS ALLOWS US TO AUTHENTICATE ENDPOINTS USING A TOKEN
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require('../models/User')


const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET;



module.exports = (passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
        .then(user => {
            if (user) {
                return done(null, false)
            } else {
                return done(null, false);
            }
        })
        .catch(error => console.log(error))
    }))
}