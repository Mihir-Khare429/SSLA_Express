const ProductV2 = require("../model/productV2");

const DataFactory = require("./dataFactory");

export class V2DataHandler {
  async getData(productId : string) {
    try {
      let productInfo = new DataFactory();
      const data = await productInfo.searchData(ProductV2, {
        productId: productId,
      });
      return data;
    } catch (err) {
      return err;
    }
  }
  async postData(
    productId: any,
    selfLink : string,
    accountId : string,
    name : string,
    quantity : Array<any>,
    description : string,
    options : Array<any>
  ) {
    try {
      let productInfo = new DataFactory();
      const productData = {
        productId,
        owner: {
          selfLink,
          accountId,
        },
        name,
        quantity,
        description,
        options,
      };
      const data = await productInfo.postData(ProductV2, productData);
      return data;
    } catch (err) {
      return err;
    }
  }
}
