let {BACK_URL}=require("../config/url");
let User=require("../models/user");

const passport=require("passport");
const session=require("express-session");

let GoogleStrategy = require('passport-google-oauth20').Strategy;
let GitHubStrategy =require('passport-github2').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: BACK_URL+"/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request,accessToken, refreshToken, profile, cb) {
    // console.log(accessToken,profile);
    // console.log(profile);
    try{
      let user=await User.findOne({ googleId: profile.id });
      if(!user){
        let newUser=new User({
          googleId: profile.id,
          name: profile.displayName,
          photo: profile.photos[0].value,
        })
        newUser.save()
        .then((res)=>{
          return cb(null,res);
        })
        .catch((e)=>{
          return cb(e,null);
        })
      }
      if(user){
        return cb(null,user)
      }
    } catch(err){
      return cb(err,null)
    }
  }
));

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: BACK_URL+"/auth/github/callback",
  passReqToCallback   : true
},
async function(request,accessToken, refreshToken, profile, cb) {
  // console.log(accessToken,profile);
  console.log(profile);
  try{
    let user=await User.findOne({ githubId: profile.id });
    if(!user){
      let newUser=new User({
        githubId: profile.id,
        name: profile.displayName,
        photo: profile.photos[0].value,
      })
      newUser.save()
      .then((res)=>{
        return cb(null,res);
      })
      .catch((e)=>{
        return cb(e,null);
      })
    }
    if(user){
      return cb(null,user)
    }
  } catch(err){
    return cb(err,null)
  }
}
));

passport.serializeUser(function(user,done){  

  done(null,user);
});
passport.deserializeUser(function(id,done){
    User
    .findById(id)
    .then(function(user){
        // console.log(user);
        done(null,user);
    })
    .catch((err)=>{
      console.log(err);
      done(err,user);
    })
});