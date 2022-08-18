const ProductV1 = require("../model/productV1");

const DataFactory = require("./dataFactory");

class v1DataHandler {
  async getData(productId) {
    try {
      const data = new DataFactory();
      const getData = await data.searchData(ProductV1, { _id: productId });
      console.log(getData);
      return getData;
    } catch (err) {
      return err;
    }
  }
  async postData(whitelist, rules, dataSheets) {
    try {
      const data = new DataFactory();
      const saveData = {
        whitelist,
        rules,
        dataSheets,
      };
      const postData = await data.postData(ProductV1, saveData);
      return postData;
    } catch (err) {
      return err;
    }
  }
}

module.exports = v1DataHandler;
