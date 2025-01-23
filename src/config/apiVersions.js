import productRoutes from "../routes/productRoutes.js";

export const API_VERSIONS = {
  v1: {
    routes: productRoutes,
    prefix: "/api/v1",
  },
  // When adding v2, you can add it here:
  // v2: {
  //   routes: productRoutesV2,
  //   prefix: '/api/v2'
  // }
};
