const DALWrapper = require("../DAL/dalLogic");

class ProductV2Service {
  static async getDataFromDatabase(productId) {
    try {
      return DALWrapper.getProductDataV2(productId);
    } catch (err) {
      return err;
    }
  }

  static async postDatatoDatabase(
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

  static async getDataFromEndpoint(body) {
    try {
    } catch (err) {}
  }
}

const getDataFromDatabase = async (productId) => {
  try {
    return DALWrapper.getProductDataV2(productId);
  } catch (err) {
    return err;
  }
};

const postDatatoDatabase = async (
  selfLink,
  accountId,
  name,
  quantity,
  description,
  options
) => {
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
};

const getDataFromEndpoint = (body) => {
  try {
  } catch (err) {}
};

module.exports = ProductV2Service;
