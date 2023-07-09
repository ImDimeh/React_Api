const product = require('../models/product.js');

exports.get_all_products = async (req, res) => { 

  const allProduct = await product.find();
  console.log(allProduct);
  console.log("get_all_products");
  
  return res.status(200).send(allProduct);
};
// exports.get_product_by_id = async (req, res) => {
//   const  id  = req.body.id;
//   const productById = await product.findById(id);
//   console.log(productById);
//   return res.status(200).send("productById");
// };

exports.get_product_by_name = async (req, res) => {
  const name = req.query.name;
  console.log(name);
  const productByName = await product.find({ "name": name });
  console.log(productByName);
  return res.status(200).send(productByName);
};
// exports.create_product = async (req, res) => {
//   const { name, type, price, rating, available } = req.body;
//   const newProduct = new product({
//     name,
//     type,
//     price,
//     rating,
//     available,
//   });
//   await newProduct.save();
//   return res.status(200).send(newProduct);
// }


