
const isLoggedIn = (req, res, next) => {
    if (req.user){
        next();
    }else{
        res.send("fail!")
    }
      
  }

module.exports = isLoggedIn
