const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/gitstat";

console.log(mongoose);

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log('Connected to Mongo Database: ' + x.connections[0].name);
    })
    .catch((err) => {
        console.log('Error connecting to database: ' + err);
    })