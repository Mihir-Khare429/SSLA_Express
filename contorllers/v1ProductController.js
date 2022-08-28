const Validator = require("../Validation/validator");
const ProductV1Service = require("../service/productV1Service");
const { cacheMiss } = require("../middlewares/cacheMiddleware");
const logger = require("../winstonConfig");

const addProductV1 = async (req, res, next) => {
  try {
    const { whitelist, rules, dataSheets } = req.body;
    logger.info(
      `Request Method${req.method}: Request URL${
        req.url
      }: Request Body ${JSON.stringify(req.body)}`
    );
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
    logger.info(
      `Response Body ${JSON.stringify(
        result
      )}: Response Status 200: Served From Database`
    );
    res.status(201).send({
      result,
    });
  } catch (err) {
    logger.error(
      `Request Method ${req.method}: Request Body ${JSON.stringify(
        req.body
      )}: Request URL ${req.url}: Error ${err}`
    );
    return res.status(400).send({
      message: err,
    });
  }
};

const getProductV1 = async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Validator.idValidator(productId)) {
      logger.error(
        `Product ID ${productId}: Request Method${req.method}: Request URL${req.url} Product ID Invalid}`
      );
      next({ status: 400, message: "Product Id Invalid" });
      return;
    }
    const v1Product = new ProductV1Service();
    const response = await v1Product.getDataFromDatabase(productId);
    cacheMiss(productId, response);
    logger.info(
      `Response Body ${JSON.stringify(
        response
      )}: Response Status 200: Served From Database`
    );
    res.status(200).send({
      response,
    });
  } catch (err) {
    logger.error(
      `Request Method ${req.method}: Request Body ${JSON.stringify(
        req.body
      )}: Request URL ${req.url}: Error ${err}`
    );
    console.log(err);
  }
};

module.exports = {
  addProductV1,
  getProductV1,
};
