const express=require("express");
const router=express.Router();

const passport=require("passport");
const {FRONT_URL}=require("../config/url");


//auth

router.get("/github",
    passport.authenticate('github', { scope: ['profile'] })
);

router.get("/google",
    passport.authenticate('google', { scope: ['profile'] })
);

router.get("/github/callback",
  passport.authenticate('github', { failureRedirect: FRONT_URL+'/login',successRedirect: FRONT_URL })
  );

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: FRONT_URL+'/login',successRedirect: FRONT_URL }),
  );

router.get('/google/login/success',(req,res)=>{
    console.log("yo",req.user);
    if(req.user){
        res.status(200).json({
            success:true,
            user: req.user,
        });
    }
    // else{
    //     return res.send("please login first");
    // }
});

module.exports=router;