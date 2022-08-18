const v1Service = require("../service/productV1Service");
const v2Service = require("../service/productV2Service");
const DataFactory = require("../DAL/dataFactory");

const getDataFromDatabase = async (productId) => {
  try {
    const data = new DataFactory();
    const response = await data.getProductInfo(productId);
    return response;
  } catch (err) {
    return err;
  }
};

const getDataFromService = async (productId, version) => {
  try {
    let response;
    if (version == "productV1") {
      response = await v1Service.getDataFromDatabase(productId);
      console.log(response);
    } else {
      response = await v2Service.getDataFromDatabase(productId);
    }
    return response;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getDataFromDatabase,
  getDataFromService,
};
