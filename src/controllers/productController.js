import { productService } from "../services/productService.js";

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductByCode = async (req, res) => {
  try {
    const id = req.query.code;
    const product = await productService.getProductByCode(id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
