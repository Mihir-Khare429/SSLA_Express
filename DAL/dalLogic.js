const getProductDataV2 = require("../DAL/getProductDataV2");
const addProductV2 = require("./addProductDataV2");
const addProductV1 = require("./addProductDataV1");

const DALWrapper = {
  getProductDataV2,
  addProductV2,
  addProductV1,
};

module.exports = DALWrapper;
