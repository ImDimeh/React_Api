const express = require("express");
router = express.Router();
product_controller = require("../controllers/Product_controller.js");

router.get("/", product_controller.get_all_products);
module.exports = router;