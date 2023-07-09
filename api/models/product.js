
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String, // Ajout de "type:"
    required: true,
    trim: true,
  },
  price: {
    type: Number, // Ajout de "type:"
    required: true,
    trim: true,
  },
  rating: {
    // Correction de la clé "ratting" à "rating"
    type: Number, // Ajout de "type:"
    required: true,
    trim: true,
  },
  available: {
    type: Boolean, // Ajout de "type:"
    required: true,
    trim: true,
  },
});

const product = mongoose.model("Product", productSchema);
export default product;
