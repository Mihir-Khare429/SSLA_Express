const CustomError = require("../errorHandling");
const ProductV1 = require("../model/productV1");
const ProductV2 = require("../model/productV2");
const ProductVersionInfo = require("../model/productVersionInfo");

class DataFactory {
  async getProductInfo(productId) {
    try {
      const response = await ProductVersionInfo.findOne({
        productId,
      });
      if (!response || response == {}) {
        throw new Error("No Product Found");
      } else {
        return response.schemaStoredIn;
      }
    } catch (err) {
      return err;
    }
  }
  async searchData(schema, query) {
    try {
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
      if (schema == ProductV1) {
        const productInfo = new ProductVersionInfo({
          productId: product.productId,
          schemaStoredIn: "productV1",
        });
        await productInfo.save();
      } else {
        const productInfo = new ProductVersionInfo({
          productId: product.productId,
          schemaStoredIn: "productV2",
        });
        await productInfo.save();
      }
      return {
        message: product,
      };
    } catch (err) {
      return err;
    }
  }
}

module.exports = DataFactory;
