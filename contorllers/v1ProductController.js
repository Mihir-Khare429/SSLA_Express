const Validator = require("../Validation/validator");
const productV1Service = require("../service/productV1Service");

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

const getProductV1 = async (req, res, next) => {
  try {
    const { productId } = req.params;
    console.log(Validator.idValidator(productId));
    if (!Validator.idValidator(productId)) {
      next({ status: 400, message: "Product Id Invalid" });
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
