import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import logger from "./logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class ProductService {
  constructor() {
    this.products = [];
    this.loadProducts();
  }

  loadProducts() {
    try {
      logger.info("Loading products from file...");
      const jsonPath = join(__dirname, "../data/hkse.json");
      const rawData = readFileSync(jsonPath);
      const hkseData = JSON.parse(rawData);
      this.products = hkseData;
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
    return this.products;
  }

  async getProductById(product_code) {
    logger.info(`Fetching product with code: ${product_code}`);
    const product = this.products.find(
      (product) => product.product_code === product_code
    );
    if (!product) {
      logger.warn(`Product not found with code: ${product_code}`);
    }
    return product;
  }
}

export const productService = new ProductService();
