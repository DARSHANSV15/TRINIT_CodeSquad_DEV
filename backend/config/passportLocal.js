const passport = require("passport");
const LocalStrategy=require("passport-local");
const User=require("../models/user.js");


passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

passport.serializeUser((user, done) => {
    
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    
    try {
        const user = await User.findById(id);
        console.log("deserialize",user);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});