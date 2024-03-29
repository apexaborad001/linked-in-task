const passport = require('passport');
const express = require('express');
// const req = require('express/lib/request');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('pages/index.ejs'); 
  // res.send(user)
//   console.log(res)
});

// router.get("/auth/linkedin",(req,res)=>{
//   res.send(req.user)
// })

router.get('/profile', isLoggedIn, function (req, res) {
  res.render('pages/profile.ejs', {
    user: req.user 
  });
  // console.log(res)
  // res.send(req.user.id)
});

router.get('/auth/linkedin', passport.authenticate('linkedin', {
  scope: ['r_emailaddress', 'r_liteprofile'],
}));

router.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  }));

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

module.exports = router;