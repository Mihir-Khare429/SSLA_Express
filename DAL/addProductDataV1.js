const v1DataHandler = require("./v1DataHandler");

const addProductDataV1 = async (whitelist, rules, dataSheets) => {
  try {
    const handler = new v1DataHandler();
    return await handler.postData(whitelist, rules, dataSheets);
  } catch (err) {
    return err;
  }
};

module.exports = addProductDataV1;
