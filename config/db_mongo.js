const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_DATABASE_URL)

const db = mongoose.connection;

// Events
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;