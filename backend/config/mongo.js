const mongoose = require("mongoose");

main().then((res) => {
    console.log("connection established");
}).catch((err) => {
    console.log(err);
}) 
async function main() {
    // await mongoose.connect(process.env.MONGO_URL);
    await mongoose.connect("mongodb://127.0.0.1:27017/triNit");
}