const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;

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

app.get("/", (req, res) => {
  res.status(200).send({
    message: "HomePage",
  });
});

app.use("/product", productRoutes);
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ "error ": err.message || "Internal Server Error" });
});

app.listen(port, (err) => {
  console.log(`Server listening on ${port}`);
  if (err) {
    console.log(err);
  }
});
