import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import copy from "esbuild-plugin-copy";

esbuild
  .build({
    entryPoints: ["src/server.js"],
    bundle: true,
    platform: "node",
    outfile: "dist/server.js",
    format: "esm", // Keep ES module format
    sourcemap: false,
    minify: false,
    plugins: [
      nodeExternalsPlugin(),
      copy({
        assets: [
          { from: "./data/products.json", to: "./data/products.json" },
          { from: "swagger-output.json", to: "swagger-output.json" },
          { from: ".env", to: ".env" },
        ],
      }),
    ], // Externalize all dependencies from node_modules
    external: ["path", "fs", "url", "os"], // Ensure built-in modules are external
  })
  .catch(() => process.exit(1));
