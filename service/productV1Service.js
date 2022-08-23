const DALWrapper = require("../DAL/dalLogic");

class ProductV1Service {
  async getDataFromDatabase(productId) {
    try {
      const response = await DALWrapper.getProductDataV1(productId);
      return response;
    } catch (err) {
      return err;
    }
  }

  async postDatatoDatabase(whitelist, rules, dataSheets) {
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
  }

  async getDataFromEndpoint() {
    try {
    } catch (err) {}
  }
}

module.exports = ProductV1Service;
