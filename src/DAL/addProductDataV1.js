const v1DataHandler = require("./v1DataHandler");
const productIdGenerator = require("../middlewares/productIdGenerator");

const addProductDataV1 = async (whitelist, rules, dataSheets) => {
  try {
    const handler = new v1DataHandler();
    const productID = productIdGenerator();
    return await handler.postData(productID, whitelist, rules, dataSheets);
  } catch (err) {
    return err;
  }
};

module.exports = addProductDataV1;
