const express = require("express");
const app=express();
const mongoose=require("mongoose");
const port=8080;
const Listing=require("./models/listing");
const path=require("path");

const ejsMate=require("ejs-mate");
app.engine('ejs', ejsMate);

app.use(express.static(path.join(__dirname,"/public")))


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));

//code for connection of mongoDB
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

app.get("/",(req,res)=>{
    res.send("hi, i am root");
})

//index route
app.get("/listings", async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    } catch (err) {
        console.error("Error fetching listings:", err);
    }
});

//new Route
app.get("/listings/new",(req,res)=>{
    try{
        res.render("listings/new.ejs");
    }catch(err){
        res.send(err);
    }
})
app.post("/listings",async(req,res)=>{
    const newlisting=Listing(req.body);
    await newlisting.save();
    res.redirect("/listing");
})



//show route
app.get("/listings/:id",async (req,res)=>{
    try{
        let {id} = req.params;
        const listing= await Listing.findById(id);
        res.render("listings/show.ejs",{listing})
    }catch(err){
        console.log(err);
    }
   
})

app.get("/terms",(req,res)=>{
    res.render("listings/policies/terms.ejs")
})

app.get("/privacy",(req,res)=>{
    res.render("listings/policies/privacy.ejs")
})
app.get("/details",(req,res)=>{
    res.render("listings/details.ejs")
})
app.get("/cancellation-policy",(req,res)=>{
    res.render("listings/policies/cancellation.ejs")
})



app.listen(8080,()=>{
    console.log("server is listening to port",port)
});

