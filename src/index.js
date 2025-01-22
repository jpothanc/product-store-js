import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON data
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
