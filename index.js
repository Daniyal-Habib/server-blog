import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import expressfileupload from "express-fileupload";
import Router from "./Routes/router.js";
import { Connection } from "./Database/db.js";
//dotenv
dotenv.config();

const App = express();
//middlewares
App.use(cors());
App.use(helmet());
App.use(expressfileupload({ useTempFiles: true }));
App.use(express.json({ limit: "50mb" }));
App.use(bodyParser.json({ limit: "50mb", extended: true }));
App.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
App.use("/", Router);
const port = process.env.PORT;

Connection();

App.listen(port, () => {
  console.log(`Server is running on port ${port} !`);
});
