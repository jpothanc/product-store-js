import express from "express";
const router = express.Router();

// Import the controller
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// Routes
router.get("/", getProducts);
router.get("/product", getProductById);

export default router;
