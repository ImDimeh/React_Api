
import product from '../models/product.js';
import express from "express";
const router = express.Router();

router.get_all_products = async (req, res) => {
  const allProduct = await product.find();
  console.log(req.query.name);
  return res.status(200).send(allProduct );
};
router.get_one_product = async (req, res) => {
  const oneProduct = await product.findOne({name: req.query.name});
  return res.status(200).send(oneProduct);
};

router.create_product = async (req, res) => {
  const newProduct = new product(req.body);
  await newProduct.save();
  return res.status(200).send(newProduct);
};
router.delete_product = async (req, res) => {
  const deleteProduct = await product.deleteOne({ name: req.query.name });
  return res.status(200).send(deleteProduct);
};
router.update_product = async (req, res) => {
  try {
    const updatedProduct = await product.updateOne(
      { name: req.query.name },
      {
        $set: {
          name: req.body.name,
          type: req.body.type,
          price: req.body.price,
          rating: req.body.rating,
          available: req.body.available,
        },
      }
    );
    console.log(updatedProduct);

    if (updatedProduct.nModified === 0) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res.status(200).json({ message: "Product updated successfully.", });
    
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while updating the product." });
  }
};



export default router;