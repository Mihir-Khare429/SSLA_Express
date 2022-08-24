const Validator = require("../Validation/validator");
const ProductV1Service = require("../service/productV1Service");
const { cacheMiss } = require("../middlewares/cacheMiddleware");

const addProductV1 = async (req, res, next) => {
  try {
    const { whitelist, rules, dataSheets } = req.body;
    const validatorResponse = await Validator.v1PostProductValidator(req.body);
    if (validatorResponse.success == false) {
      return next({
        status: validatorResponse.status,
        message: validatorResponse.message,
      });
    }
    const v1Product = new ProductV1Service();
    const result = await v1Product.postDatatoDatabase(
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

const getProductV1 = async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Validator.idValidator(productId)) {
      next({ status: 400, message: "Product Id Invalid" });
      return;
    }
    const v1Product = new ProductV1Service();
    const response = await v1Product.getDataFromDatabase(productId);
    cacheMiss(productId, response);
    res.status(200).send({
      response,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addProductV1,
  getProductV1,
};
