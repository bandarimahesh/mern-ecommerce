import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
dotenv.config();
import indexRoute from "./Routes/IndexRoute.js";

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
const PORT = process.env.PORT || 3000;

app.use("/", indexRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
