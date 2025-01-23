import express from "express";
import productRoutes from "./routes/productRoutes.js";
import { readFileSync } from "fs";
import { join } from "path";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

const app = express();
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Load Swagger JSON
const swaggerDocument = JSON.parse(
  readFileSync("./src/swagger-output.json", "utf8")
);
// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api/products", productRoutes);

export default app;
