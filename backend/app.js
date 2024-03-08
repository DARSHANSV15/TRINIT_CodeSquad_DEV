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
const { isLoggedIn } = require("./middlewares");

const oauthRouter=require("./routes/oauth");


app.use(express.urlencoded({extended: true}));
cookieparser.parse("foo=bar");
app.use(bodyParser.json());


let sessionOptions={
    // store,      
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized:true,
    cookie: {
        expires: Date.now()+ 1000*60*60*24*3,
        maxAge: 1000*60*60*24*3,
        secure: false,
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
    
    if(isLoggedIn){
        console.log("This is home page");
    } else{
        console.log("please login");
    }
    res.send(req.user);
})


app.post("/login",passport.authenticate("local",{
        successRedirect: "/login/success"
    }),(req,res)=>{
        console.log("hola",req.body);
    })

app.get("/login/success",(req,res)=>{
    console.log("yo",req.user);
    if(req.user){
        res.status(200).json({
            success:true,
            message:"authenticated",
            user: req.user,
            cookies: req.cookies
        });
    }
    res.status(401).json({
        success: false,
        message:"failed to login",
    });
})

app.post("/signup",async(req,res,next)=>{

    try{
        let {username, email,password}=req.body;
        let newUser= new User({
            username,email
        });
        let registeredUser=await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            res.send("signed in successfully");
        })
    } catch(e){
        
        res.send("error signing in");
    }
    
})

app.use("/auth",oauthRouter);

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