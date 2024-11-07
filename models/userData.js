const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userTripSchema = new Schema({
    startDate: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: Number,
        required: true,
        min: 1
    }
}, { timestamps: true });

const UserTrip = mongoose.model("UserTrip", userTripSchema);
module.exports = UserTrip;
