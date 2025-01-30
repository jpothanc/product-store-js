import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 3001; // Fallback to 3000 if PORT is not set

const doc = {
  info: {
    title: "product-store-js",
    description: "product-store api documentation",
  },
  host: `localhost:${port}`,
  basePath: "/api/v1/products",
  schemes: ["http"],
  securityDefinitions: {
    basicAuth: {
      type: "basic",
    },
  },
  // this provides the Authorize button in the swagger UI
  security: [
    {
      basicAuth: [],
    },
  ],
};

const outputFile = "../../swagger-output.json"; // Output file for Swagger docs
const endpointsFiles = ["./routes/productRoutes.js"]; // Files containing your routes

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
  console.log("Swagger documentation generated!");
});
