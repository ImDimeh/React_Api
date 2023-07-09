const mongoose = require("mongoose");

var username = "Admin";
var password = "l5lD9cW5jlEXEomb";

mongoose.connect(
  "mongodb+srv://" +
    username +
    ":" +
    password +
    "@cluster0.invvzhc.mongodb.net/",
  () => {
    console.log("Connected to DB " + username);
  },
  (e) => {
    console.log("Error connecting to DB", e);
  }
);
