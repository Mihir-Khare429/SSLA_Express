const DALWrapper = require("../DAL/dalLogic");

export class ProductV2Service {
  async getDataFromDatabase(productId : string) {
    try {
      return DALWrapper.getProductDataV2(productId);
    } catch (err) {
      return err;
    }
  }

  async postDatatoDatabase(
    selfLink : string,
    accountId : string,
    name : string,
    quantity : Array<Object>,
    description : string,
    options : Array<Object>
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

  async getDataFromEndpoint(body : Object) {
    try {
    } catch (err) {}
  }
}
