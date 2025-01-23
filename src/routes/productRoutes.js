import express from "express";
const router = express.Router();
import { authenticateRequest } from "../middleware/authMiddleware.js";


// Import the controller
import {
  getProducts,
  getProductByCode,
} from "../controllers/productController.js";

router.use(authenticateRequest);

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

router.get("/product", (req, res) => {
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
