import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/userRoutes.js";
import registryRoutes from "./routes/registryRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(registryRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server runnin in port: ${process.env.PORT}`);
});
