const DALWrapper = require("../DAL/dalLogic");

class ProductV2Service {
  async getDataFromDatabase(productId) {
    try {
      return DALWrapper.getProductDataV2(productId);
    } catch (err) {
      return err;
    }
  }

  async postDatatoDatabase(
    selfLink,
    accountId,
    name,
    quantity,
    description,
    options
  ) {
    try {
      return DALWrapper.addProductV2(
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
  }

  async getDataFromEndpoint(body) {
    try {
    } catch (err) {}
  }
}

module.exports = ProductV2Service;
