const DALWrapper = require("../DAL/dalLogic");

export class ProductV1Service {
  async getDataFromDatabase(productId : string) {
    try {
      const response = await DALWrapper.getProductDataV1(productId);
      return response;
    } catch (err) {
      return err;
    }
  }

  async postDatatoDatabase(whitelist : Array<any>, rules : Array<any>, dataSheets : Array<any>) {
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
