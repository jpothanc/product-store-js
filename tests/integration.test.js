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

  it("GET /api/products returns 200", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
  });

  it("GET /api/productByCode returns 200", async () => {
    const response = await request(app).get(
      "/api/products/product?code=0001.HK"
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual(test_product);
  });
});
