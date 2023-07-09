const express = require("express");
router = express.Router();
product_controller = require("../controllers/Product_controller.js");

router.get("/", product_controller.get_all_products);
// router.get("/:id", product_controller.get_product_by_id);
router.get("/name", product_controller.get_product_by_name);
// router.post("/", product_controller.create_product);

module.exports = router;