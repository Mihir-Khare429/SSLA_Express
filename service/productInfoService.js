const ProductV1Service = require("../service/productV1Service");
const ProductV2Service = require("../service/productV2Service");
const DataFactory = require("../DAL/dataFactory");

class ProductInfoService {
  static async getDataFromDatabase(productId) {
    try {
      const data = new DataFactory();
      const response = await data.getProductInfo(productId);
      return response;
    } catch (err) {
      return err;
    }
  }

  static async getDataFromService(productId, version) {
    try {
      let response;
      if (version == "productV1") {
        response = await ProductV1Service.getDataFromDatabase(productId);
        console.log(response);
      } else {
        response = await ProductV2Service.getDataFromDatabase(productId);
      }
      return response;
    } catch (err) {
      return err;
    }
  }
}

module.exports = ProductInfoService;
