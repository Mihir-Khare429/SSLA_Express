const DALWrapper = require("../DAL/dalLogic");

const getDataFromDatabase = async (productId) => {
  try {
    const response = await DALWrapper.getProductDataV1(productId);
    return response;
  } catch (err) {
    return err;
  }
};

const postDatatoDatabase = async (whitelist, rules, dataSheets) => {
  try {
    const response = await DALWrapper.addProductV1(
      whitelist,
      rules,
      dataSheets
    );
    return response;
  } catch (err) {
    return err;
  }
};

const getDataFromEndpoint = () => {
  try {
  } catch (err) {}
};

module.exports = {
  getDataFromDatabase,
  getDataFromEndpoint,
  postDatatoDatabase,
};
