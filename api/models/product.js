const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    String,
    required: true,
    trim: true,
  },
  type: {
    String,
    required: true,
    trim: true,
  },
  price: {
    float,
    required: true,
    trim: true,
  },
  ratting: {
    float,
    required: true,
    trim: true,
  },
  ratting: {
    int,
    required: true,
    trim: true,
  },
  available: {
    boolean,
    required: true,
    trim: true,
  },
});


// Export Post Model
module.exports = mongoose.model("Produits", productSchema);