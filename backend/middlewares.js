const { FRONT_URL } = require("./config/url");


// isLoggedIn middleware
module.exports.isLoggedIn = (req, res, next) => {
    // Check if req.user is present
    if (req.user) {
      // User is authenticated, proceed to the next middleware or route handler
      next();
    } else {
      // User is not authenticated, redirect to the login page
      res.redirect(FRONT_URL+'/login'); // Adjust the path based on your frontend route for the login page
    }
  };
  
  

module.exports.asyncWrap = function(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>{
            next(err);
        })
    };
};