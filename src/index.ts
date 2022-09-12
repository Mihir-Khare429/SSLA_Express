import express , {Request , Response ,NextFunction}from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';

import {generateAuthToken} from './middlewares/authMiddleWare';
const app = express();
dotenv.config();
const port = process.env.PORT || 8000;
const logger = require("./winstonConfig");
const newRelic = require("newrelic");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const productRoutes = require("./routes/productRoutes");

mongoose
  .connect("mongodb://127.0.0.1:27017/node_setup")
  .then(() => {
    console.log("Mongo DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "HomePage",
  });
});

app.use("/product", productRoutes);
app.use((err:Error, req : Request, res : Response, next : NextFunction) => {
  return res
    .status(500)
    .send({ "error ": err.message || "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
  let token = generateAuthToken();
  console.log(`Auth token for the server is ${token}`);
  logger.info(`Server started and running on Port : ${port}`);
});
