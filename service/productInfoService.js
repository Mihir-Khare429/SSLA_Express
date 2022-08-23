const ProductServiceFactory = require("./productServiceFactory");
const DataFactory = require("../DAL/dataFactory");

class ProductInfoService {
  async #getDataFromDatabase(productId) {
    try {
      const data = new DataFactory();
      const response = await data.getProductInfo(productId);
      return response;
    } catch (err) {
      return err;
    }
  }

  async #getDataFromService(productId, version) {
    try {
      let response;
      let productFactory = new ProductServiceFactory();
      let product = productFactory.createVersionObjects(version);
      response = await product.getDataFromDatabase(productId);
      return response;
    } catch (err) {
      return err;
    }
  }

  async getInfo(productId) {
    try {
      const productVersion = await this.#getDataFromDatabase(productId);
      const productInfo = await this.#getDataFromService(
        productId,
        productVersion
      );
      return productInfo;
    } catch (err) {
      return err;
    }
  }
}

module.exports = ProductInfoService;
