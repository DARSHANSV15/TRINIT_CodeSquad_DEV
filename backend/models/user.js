const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

let userSchema = new Schema({
    name: String,
    googleId: String,
    githubId: String,
    photo: {
        type: String,
        default: "",
        set: (v) => (v === "" ? "" : v),
    },

    role: {
        type: String,
        enum: ["Learner", "Tutor"],
    },

    learnerID: {
        type: Schema.Types.ObjectId,
        ref: "Learner",
        
    },

    tutorID: {
        type: Schema.Types.ObjectId,
        ref: "Tutor",
        
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
