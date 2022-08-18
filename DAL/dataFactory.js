const CustomError = require("../errorHandling");
const ProductV1 = require("../model/productV1");
const ProductV2 = require("../model/productV2");

class DataFactory {
  async searchData(schema, query) {
    try {
      console.log("dsd");
      const response = await schema.findOne(query);
      if (response) {
        return response;
      } else {
        console.log("djdfid");
      }
    } catch (err) {
      throw {
        status: err.statusCode || 404,
        message: err.message || "Casting Error",
      };
    }
  }
  async postData(schema, data) {
    try {
      const product = new schema(data);
      await product.save((err, product) => {
        if (err) {
          return err;
        }
      });
      return {
        message: product,
      };
    } catch (err) {
      return err;
    }
  }
}

module.exports = DataFactory;
