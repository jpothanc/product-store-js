import logger from "../services/logger.js";
import dotenv from "dotenv";

dotenv.config();

export const stored_credentials = {
  username: process.env.API_USERNAME,
  password: process.env.API_PASSWORD,
};

export function validateCredentials(authHeader) {
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "utf-8"
  );
  const [username, password] = credentials.split(":");

  return (
    username === stored_credentials.username &&
    password === stored_credentials.password
  );
}

export function authenticateRequest(req, res, next) {
  if (!validateCredentials(req.headers.authorization)) {
    logger.warn("Unauthorized access attempt");
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}
