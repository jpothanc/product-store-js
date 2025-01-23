import request from "supertest";
import app from "../src/app.js";

let server;
const test_product = {
  stock_name: "CK Hutchison Holdings",
  primary_exchange: "HKSE",
  product_code: "0001.HK",
  lot_size: 500,
  close_price: 5635,
  currency: "HKD",
  "20_day_average_volume": 2000000,
  "30_day_average_volume": 2500000,
};

// Test credentials
const validCredentials = Buffer.from("admin:admin").toString("base64");
const invalidCredentials = Buffer.from("wrong:wrong123").toString("base64");

describe("Feature Integration Tests", () => {
  beforeAll(async () => {
    server = app.listen(4000);
    console.log("Server is running on port 4000");
  });

  afterAll(async () => {
    server.close();
  });

  beforeEach(async () => {
    // Reset database state before each test
  });

  describe("Authentication Tests", () => {
    it("should reject requests without authentication", async () => {
      const response = await request(app).get("/api/v1/products");
      expect(response.status).toBe(401);
    });

    it("should reject requests with invalid credentials", async () => {
      const response = await request(app)
        .get("/api/v1/products")
        .set("Authorization", `Basic ${invalidCredentials}`);
      expect(response.status).toBe(401);
    });
  });

  describe("API Endpoints with Authentication", () => {
    it("GET /api/v1/products returns 200 with valid auth", async () => {
      const response = await request(app)
        .get("/api/v1/products")
        .set("Authorization", `Basic ${validCredentials}`);
      expect(response.status).toBe(200);
    });

    it("GET /api/v1/products/product returns 200 with valid auth", async () => {
      const response = await request(app)
        .get("/api/v1/products/product?code=0001.HK")
        .set("Authorization", `Basic ${validCredentials}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual(test_product);
    });
  });
});
