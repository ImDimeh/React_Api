
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

export default router;