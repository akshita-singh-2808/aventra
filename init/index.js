const mongoose=require("mongoose");
const initData = require("./data.js"); //this imports 'data.js'
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/voyage";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main(){
    await mongoose.connect(MONGO_URL)
}

const initDB=async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);//we are accesing the key data from data.js
    console.log("data was initialised");

}

initDB();