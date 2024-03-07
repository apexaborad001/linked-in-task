const  GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport=require("passport")


passport.serializeUser(function (user, cb) {
    cb(null, user);
  });
  
passport.deserializeUser(function (user, cb) {
    cb(null,user);
  });
  
passport.use(new GoogleStrategy({
    clientID: "40700349295-20gc5l8tgrakgps4ptk9rpmqjmjaan9s.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
    // });
  }
));