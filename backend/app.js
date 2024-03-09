if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}

const express=require('express');
const app=express();
const port=3000;
const cors=require("cors");
const bodyParser = require('body-parser');
const cookieparser = require("cookieparser");

const User=require("./models/user")

const {FRONT_URL,BACK_URL}=require("./config/url");
const passport = require("passport");
const session = require("express-session");
const { isLoggedIn,asyncWrap } = require("./middlewares");

const oauthRouter=require("./routes/oauth");
const tutorRouter=require("./routes/tutor");

app.use(express.urlencoded({extended: true}));
cookieparser.parse("foo=bar");
app.use(bodyParser.json());

const MongoStore = require('connect-mongo');

let store=MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter: 60*60*3,
});

store.on("error",()=>{
    console.log("ERROR IN MONGO SESSION STORE",err);
})

let sessionOptions={
    store,      
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized:true,
    cookie: {
        expires: Date.now()+ 1000*60*60*24*3,
        maxAge: 1000*60*60*24*3,
        httpOnly: true,
    }
}
app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: FRONT_URL,
    method: "GET, POST, PUT, DELETE",
    credentials: true
}))

require("./config/passportLocal");
require("./config/passportOauth");

require("./config/mongo");

app.get("/",(req,res)=>{
    
   console.log(req.user);
    res.send(req.user); 
})


app.post("/login", passport.authenticate("local",{
        successRedirect: "/login/success",
        failureRedirect: "/login/failure"
    }),(req,res)=>{
        console.log("hola",req.body);
    })

app.get("/login/success",(req,res)=>{
    console.log(req.user);
    if(req.user){
        res.status(200).json({
            success:true,
            message:"authenticated",
            user: req.user,
        });
    }else{

        res.status(401).json({
            success: false,
            message:"failed to login",
        });
    }
})

app.get("/login/failure",(req,res)=>{
    res.send("login failure");
})

app.post("/signup",asyncWrap(async(req,res,next)=>{

    // res.send(req.body);
    try{
        let {username, email,password}=req.body;
        let newUser= new User({
            username,email
        });
        let registeredUser=await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            res.send("signed in successfully");
        })
    } catch(e){
        
        res.send("error signing in");
    }
    
}));

app.use("/auth",oauthRouter);
app.use("/tutor",tutorRouter);

app.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        res.redirect(FRONT_URL+"/");
    });
})



// app.get("*",(req,res)=>{
//     console.log("page not found1");
//     res.send("page not found");
// })

app.listen(port,()=>{
    console.log("app runninng on port:",port);
});