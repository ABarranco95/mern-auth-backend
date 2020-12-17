require('dotenv').config

// A PASSPORT STRATEGY FOR AUTHENTICATING WITH A JSON WEB TOKEN
//THIS ALLOWS US TO AUTHENTICATE ENDPOINTS USING A TOKEN
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.eventNames.JWT_SECRET;

module.exports =(passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done)))
}