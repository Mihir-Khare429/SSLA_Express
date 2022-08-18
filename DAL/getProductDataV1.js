const v1DataHandler = require("./v1DataHandler");

const getProductDataV1 = async (productId) => {
  try {
    const handler = new v1DataHandler(productId);
    return handler.getData(productId);
  } catch (err) {
    return err;
  }
};

module.exports = getProductDataV1;
