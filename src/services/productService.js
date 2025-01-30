import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import logger from "./logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class ProductService {
  constructor() {
    this.products = new Map();
    this.loadProducts();
  }

  loadProducts() {
    try {
      const filePath = process.env.PRODUCT_DATA || "../../data/products.json";
      logger.info("Loading products from file...");
      const jsonPath = join(filePath);
      const rawData = readFileSync(jsonPath);
      const hkseData = JSON.parse(rawData);

      for (const product of hkseData) {
        product.product_code = product.product_code.trim();
        this.products.set(product.product_code, product);
      }

      console.log(this.products);
      logger.info(`${this.products.length} products loaded successfully`);
    } catch (error) {
      logger.error("Error loading products:", {
        error: error.message,
        stack: error.stack,
      });
      this.products = [];
    }
  }

  async getProducts() {
    logger.info("Fetching all products");
    return Array.from(this.products.values());
  }

  async getProductByCode(product_code) {
    logger.info(`Fetching product with code: ${product_code}`);
    const product = this.products.get(product_code);
    if (!product) {
      logger.warn(`Product not found with code: ${product_code}`);
    }
    return product;
  }
}

export const productService = new ProductService();
