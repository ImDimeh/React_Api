const product = require('../models/product.js');

exports.get_all_products = async (req, res) => { 

  const allProduct = await product.find();
  console.log(allProduct);
  return res.status(200).send(allProduct);
};