const CustomError = require("../errorHandling");
const mongoose = require("mongoose");
const productV1Service = require("../service/productV1Service");

const addProductV1 = async (req, res) => {
  try {
    const { whitelist, rules, dataSheets } = req.body;
    const result = await productV1Service.postDatatoDatabase(
      whitelist,
      rules,
      dataSheets
    );
    res.status(201).send({
      result,
    });
  } catch (err) {
    return res.status(400).send({
      message: err,
    });
  }
};

const getProductV1 = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!mongoose.isValidObjectId(productId)) {
      const error = CustomError.badRequest("Bad request");
      console.log("data", error);
      res.status(error.statusCode).send({
        message: error.message,
      });
      return;
    }
    const productV1ServiceResponse = await productV1Service.getDataFromDatabase(
      productId
    );
    res.status(200).send({
      productV1ServiceResponse,
    });
  } catch (err) {
    res.status(500).send({
      err,
    });
  }
};

module.exports = {
  addProductV1,
  getProductV1,
};
