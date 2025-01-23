import express from "express";
import productRoutes from "./routes/productRoutes.js";
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

export default app;
