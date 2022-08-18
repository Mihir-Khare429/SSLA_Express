const Validator = require("../Validation/validator");
const ProductV2Service = require("../service/productV2Service");

const addProductV2 = async (req, res, next) => {
  try {
    const { selfLink, accountId, name, quantity, description, options } =
      req.body;
    const validatorResponse = Validator.v2PostProductValidator(req.body);
    if (validatorResponse.success == false) {
      return next({
        status: validatorResponse.status,
        message: validatorResponse.message,
      });
    }
    const response = await ProductV2Service.postDatatoDatabase(
      selfLink,
      accountId,
      name,
      quantity,
      description,
      options
    );
    res.status(200).send({
      response,
    });
  } catch (err) {
    res.status(400).send({
      message: err,
    });
  }
};

const getProductV2 = async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Validator.idValidator(productId)) {
      next({ status: 400, message: "Product Id Invalid" });
      return;
    }
    const response = await ProductV2Service.getDataFromDatabase(productId);
    res.status(200).send(response);
  } catch (err) {
    res.status(404).send({
      message: err,
    });
  }
};

module.exports = {
  addProductV2,
  getProductV2,
};
