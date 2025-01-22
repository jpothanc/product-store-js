import winston from "winston";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    // Write all logs to file
    new winston.transports.File({
      filename: join(__dirname, "../../logs/product-store-error.log"),
      level: "error",
    }),
    new winston.transports.File({
      filename: join(__dirname, "../../logs/product-store.log"),
    }),
    // Also log to console in development
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

export default logger;
