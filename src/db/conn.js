// Importing Mongoose module
const mongoose = require("mongoose");

// Connecting to the MongoDB database
mongoose.connect("mongodb+srv://anidhiman456:anidhiman@logincluster.8pelcnv.mongodb.net").then(() => {
    console.log(`Connection Established Successfully`); // Logging success message upon successful connection
}).catch((e) => {
    console.log(`Not connected`); // Logging error message if connection fails
});
