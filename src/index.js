import express from "express";
import cors from "cors";
import Routes from "./routes/Routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(Routes);

app.listen(process.env.PORT, () => {
  console.log(`Server runnin in port: ${process.env.PORT}`);
});