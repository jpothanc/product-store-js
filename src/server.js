import app from "./app.js";
import dotenv from "dotenv";


// Load environment variables
dotenv.config();

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// for tests to work
export default server;
