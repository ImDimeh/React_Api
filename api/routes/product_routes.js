import express from "express";
const router = express.Router();
import product_controller from '../controllers/Product_controller.js';

router.get("/", product_controller.get_all_products);
router.get("/name", product_controller.get_one_product);
router.post("/", product_controller.create_product);
export default router;
