const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("./models/listing");
const path = require("path");

const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const MONGO_URL = "mongodb://127.0.0.1:27017/voyage";
main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log("Error connecting to DB:", err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

// Index route: Show all listings
app.get("/listings", async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index", { allListings });
    } catch (err) {
        console.error("Error fetching listings:", err);
        res.status(500).send("Error fetching listings");
    }
});

// New route: Show the form to create a new listing
app.get("/listings/new", (req, res) => {
    try {
        res.render("listings/new");
    } catch (err) {
        console.error("Error rendering new listing form:", err);
        res.status(500).send("Error rendering form");
    }
});

// POST route to create a new listing
app.post("/listings", async (req, res) => {
    try {
        const newListing = new Listing(req.body);
        await newListing.save();
        res.redirect("/listings"); // Redirect to listings page
    } catch (err) {
        console.error("Error saving listing:", err);
        res.status(500).send("Error saving listing");
    }
});

// Show route: Show details of a single listing
app.get("/listings/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        if (!listing) {
            return res.status(404).send("Listing not found");
        }
        res.render("listings/show", { listing });
    } catch (err) {
        console.error("Error fetching listing:", err);
        res.status(500).send("Error fetching listing");
    }
});

// Home route
app.get("/", (req, res) => {
    try {
        res.render("listings/home");
    } catch (err) {
        res.status(500).send("Error rendering home page");
    }
});

// Terms and Policies routes
app.get("/terms", (req, res) => {
    res.render("listings/policies/terms");
});

app.get("/privacy", (req, res) => {
    res.render("listings/policies/privacy");
});

app.get("/details", (req, res) => {
    res.render("listings/details");
});

app.get("/cancellation-policy", (req, res) => {
    res.render("listings/policies/cancellation");
});

// Start the server
app.listen(port, () => {
    console.log("Server is listening on port", port);
});
