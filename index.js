import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import Router from "./Routes/router.js";
import { Connection } from "./Database/db.js";
import NodeCache from "node-cache";
dotenv.config();
const App = express();
const cache = new NodeCache({ stdTTL: 10 });
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", ["https://www.hubblefeed.com"]);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
App.use(allowCrossDomain);
App.use(cors());

App.use(helmet());
App.use(express.json({ limit: "50mb" }));
App.use(bodyParser.json({ limit: "50mb", extended: true }));
App.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
App.use("/", Router);
const port = process.env.PORT;
Connection();
App.listen(port, () => {
  console.log(`Server is running on port ${port} !`);
});
