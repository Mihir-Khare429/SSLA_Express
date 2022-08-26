const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8000;
const compression = require("compression");
const { generateAuthToken } = require("./middlewares/authMiddleWare");
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

app.use(compression());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "HomePage",
  });
});

app.use("/product", productRoutes);
app.use((err, req, res, next) => {
  return res
    .status(err.status || 500)
    .send({ "error ": err.message || "Internal Server Error" });
});

app.listen(port, (err) => {
  console.log(`Server listening on ${port}`);
  let token = generateAuthToken();
  console.log(`Auth token for the server is ${token}`);
  logger.info(`Server started and running on Port : ${port}`);
  if (err) {
    console.log(err);
  }
});
