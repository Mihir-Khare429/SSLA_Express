const V2DataHandler = require("./v2DataHandler");

const getProductDataV2 = async (id) => {
  try {
    let productV2 = new V2DataHandler();
    const product = productV2.getData(id);
    if (!product) {
      console.log("if entered");
      throw "No product found";
    }
    return product;
  } catch (err) {
    return err;
  }
};

module.exports = getProductDataV2;
