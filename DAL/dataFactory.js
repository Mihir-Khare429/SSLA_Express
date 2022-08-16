const CustomError = require("../errorHandling");
const ProductV1 = require("../model/productV1");
const ProductV2 = require("../model/productV2");

class DataFactory {
  async searchData(schema, query) {
    try {
      const response = await schema
        .findOne(query)
        .select(
          "-_id -options._id -options.values._id -quantity._id -__v -whitelist.attributeValue._id -whitelist.attributeRanges._id -whitelist._id -rules.predicates.attributeValues._id -rules.predicates._id -rules.results.attributeValues._id -rules.results._id -rules._id -rules.results.attributeRanges._id"
        );
      if (!response) {
        return CustomError.notFound("No Product found");
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
