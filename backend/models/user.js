const mongoose = require("mongoose");
const {Schema}=mongoose;
const passportLocalMongoose=require("passport-local-mongoose");

let userSchema= new Schema({
    
    name: String,
    googleId: String,
    githubId: String,

    photo: String,
})

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",userSchema)