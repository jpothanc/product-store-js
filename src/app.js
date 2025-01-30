import express from "express";
import { API_VERSIONS } from "./config/apiVersions.js";
import { readFileSync } from "fs";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

const app = express();
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Load Swagger JSON
const swaggerDocument = JSON.parse(
  readFileSync("./swagger-output.json", "utf8")
);
// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Register routes for each version
Object.entries(API_VERSIONS).forEach(([version, config]) => {
  app.use(`${config.prefix}/products`, config.routes);
});

export default app;
