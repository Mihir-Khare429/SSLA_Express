const Validator = require("../Validation/validator");
const ProductInfoService = require("../service/productInfoService");

const getProductInfo = async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Validator.idValidator(productId)) {
      next({ status: 400, message: "Product Id Invalid" });
      return;
    }
    const product = new ProductInfoService();
    const productInfo = await product.getInfo(productId);
    res.status(200).send(productInfo);
  } catch (err) {
    return next(err);
  }
};

module.exports = getProductInfo;
