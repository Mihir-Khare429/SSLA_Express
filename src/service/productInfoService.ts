const ProductServiceFactory = require("./productServiceFactory");
const DataFactory = require("../DAL/dataFactory");

export class ProductInfoService {
   private async getDataFromDatabase(productId : string) {
    try {
      const data = new DataFactory();
      const response = await data.getProductInfo(productId);
      return response;
    } catch (err) {
      return err;
    }
  }

  private async getDataFromService(productId : string, version : string) {
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

  async getInfo(productId : string) {
    try {
      const productVersion = await this.getDataFromDatabase(productId);
      const productInfo = await this.getDataFromService(
        productId,
        productVersion
      );
      return productInfo;
    } catch (err) {
      return err;
    }
  }
}
