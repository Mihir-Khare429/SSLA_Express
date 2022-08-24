const V2DataHandler = require("./v2DataHandler");
const productIdGenerator = require("../middlewares/productIdGenerator");

const addProductV2 = async (
  selfLink,
  accountId,
  name,
  quantity,
  description,
  options
) => {
  try {
    const handler = new V2DataHandler();
    const productID = productIdGenerator();
    return handler.postData(
      productID,
      selfLink,
      accountId,
      name,
      quantity,
      description,
      options
    );
  } catch (err) {
    return err;
  }
};

module.exports = addProductV2;
