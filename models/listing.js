const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// The `Listing` model is used to store information about travel destinations,
// including details such as title, description, image URL, price, location, 
// activities, best time to visit, and tips for travelers. This model allows 
// for easy interaction with the MongoDB database to create, read, update, 
// and delete listings.

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true, // Automatically trims whitespace
    },
    description: {
        type: String,
        required: true,
        maxlength: 500, // Maximum length for description
    },
    image: {
        type: String,
        set: (v) => v === "" ? "https://images.pexels.com/photos/6507446/pexels-photo-6507446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" : v,
    },
    price: {
        type: Number,
        min: 0, // Ensures price cannot be negative
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    activities: {
        type: [String], // Array of activities
        default: [], // Default to an empty array
    },
    bestTimeToVisit: {
        type: String,
        required: true
    },
    tips: {
        type: [String], // Array of travel tips
        default: [],
    }
}); // Adds createdAt and updatedAt timestamps

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
