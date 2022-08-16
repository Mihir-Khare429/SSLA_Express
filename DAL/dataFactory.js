const ProductV1 = require("../model/productV1");
const ProductV2 = require("../model/productV2");

class DataFactory {
  async searchData(schema, query) {
    try {
      const response = await schema
        .findOne(query)
        .select("-_id -options._id -options.values._id -quantity._id -__v");
      if (!response) {
        throw "No product found";
      }
      return response;
    } catch (err) {
      return err;
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
