const express = require('express');
var router = express.Router();
const passport = require('passport');
const isLoggedIn =require("../middleware/auth")


router.get("/",(req,res)=>{
    res.send("you logout successfullly!!")
})
router.get("/failed",(req,res)=>{
    res.send("you failed to login!!")
})

router.get("/good",isLoggedIn,(req,res)=>{
    res.send(`welcome ${req.user._raw}`)
    console.log(req)
})
router.get('/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));


router.get("/logout",(req,res)=>{
    req.logout()
    res.redirect("/")
})
router.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/good',
        failureRedirect: '/failed'
}));

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated())
//       return next();
//     res.redirect('/');
//   }

module.exports=router