import express , {Request , Response ,NextFunction}from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const port = process.env.PORT || 8000;
import {logger} from './winstonConfig'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import {router} from './routes/productRoutes';

mongoose
  .connect("mongodb://root:example@mongo:27017/node_setup")
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

app.use("/product", router);
app.use((err:Error, req : Request, res : Response, next : NextFunction) => {
  return res
    .status(500)
    .send({ "error ": err.message || "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
  logger.info(`Server started and running on Port : ${port}`);
});
