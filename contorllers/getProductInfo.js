const Validator = require("../Validation/validator");
const ProductInfoService = require("../service/productInfoService");

const getProductInfo = async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Validator.idValidator(productId)) {
      next({ status: 400, message: "Product Id Invalid" });
      return;
    }
    const productVersion = await ProductInfoService.getDataFromDatabase(
      productId
    );
    console.log(productVersion);
    const response = await ProductInfoService.getDataFromService(
      productId,
      productVersion
    );
    res.status(200).send(response);
  } catch (err) {
    return next(err);
  }
};

module.exports = getProductInfo;
