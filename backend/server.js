import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connection from "./db/connection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(PORT, () => {
  connection();
  console.log(`Server running on port ${PORT}`);
});
