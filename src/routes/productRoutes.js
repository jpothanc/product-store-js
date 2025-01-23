import express from "express";
const router = express.Router();

// Import the controller
import {
  getProducts,
  getProductById as getProductByCode,
} from "../controllers/productController.js";

// Route to get all products
router.get("/", (req, res) => {
  // #swagger.summary = "Get all products"
  // #swagger.description = "Retrieve a list of all products."
  // #swagger.responses[200] = {
  //   description: "Successfully retrieved the products.",
  //   schema: { type: "array", items: { type: "object" } },
  // }
  getProducts(req, res);
});

router.get("/product", (re, res) => {
  // #swagger.summary = "Get product by code"
  // #swagger.description = "Retrieve a product by its code."
  // #swagger.parameters['code'] = { description: "Product code" }
  // #swagger.responses[200] = {
  //   description: "Successfully retrieved the product.",
  //   schema: { type: "object" },
  // }
  getProductByCode(req, res);
});

export default router;
