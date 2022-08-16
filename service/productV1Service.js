const DALWrapper = require("../DAL/dalLogic");

const getDataFromDatabase = (productId) => {
  try {
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
