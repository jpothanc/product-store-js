import express from "express";
const router = express.Router();
import { authenticateRequest } from "../middleware/authMiddleware.js";

// Import the controller
import {
  getProducts,
  getProductByCode,
} from "../controllers/productController.js";

router.use(authenticateRequest);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     description: Fetch all products from the product store.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", (req, res) => {
  getProducts(req, res);
});

router.get("/product", (req, res) => {
  getProductByCode(req, res);
});

export default router;
