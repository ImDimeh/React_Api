import mongoose from "mongoose";

var username = "Admin";
var password = "l5lD9cW5jlEXEomb";

const db = mongoose.connect(
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
export default db;