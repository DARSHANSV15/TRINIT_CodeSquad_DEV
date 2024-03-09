const express=require("express");
const router=express.Router();

const passport=require("passport");
const {FRONT_URL}=require("../config/url");

const User=require("../models/user");


//auth

router.get("/github",
    passport.authenticate('github', { scope: ['profile'] })
);

router.get("/google",
    passport.authenticate('google', { scope: ['profile'] })
);

router.get("/github/callback",
  passport.authenticate('github', { failureRedirect: FRONT_URL+'/login' },async (req, res) => {
    try {
        const existingUser = await User.findOne({ googleId: req.user.id });
        if (existingUser) {
            res.redirect('/');
        } else {
            res.redirect('/complete-profile');
        }
    } catch (error) {
        console.error('Error during Google OAuth callback:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
})
  );

  router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: FRONT_URL + '/login' }),
    async (req, res) => {
      try {
        const existingUser = await User.findOne({ googleId: req.user.id });
        if (existingUser) {
          res.redirect(FRONT_URL+'/');
        } else {
          res.redirect(FRONT_URL+'/role');
        }
      } catch (error) {
        console.error('Error during Google OAuth callback:', error);
        res.status(500).json({ error: 'Internal server error.' });
      }
    }
  );

// router.get('/google/callback', 
//   passport.authenticate('google', { failureRedirect: FRONT_URL+'/login' },async (req, res) => {
//     try {
//         const existingUser = await User.findOne({ googleId: req.user.id });
//         if (existingUser) {
//             res.redirect('/');
//         } else {
//             res.redirect('/complete-profile');
//         }
//     } catch (error) {
//         console.error('Error during Google OAuth callback:', error);
//         res.status(500).json({ error: 'Internal server error.' });
//     }
// })
//   );

router.get('/google/login/success',(req,res)=>{
    console.log("yo",req.user);
    if(req.user){
        res.status(200).json({
            success:true,
            user: req.user,
        });
    }
    
});

module.exports=router;