import ProductV1  from "../model/productV1";
import ProductV2  from "../model/productV1";
import ProductVersionInfo from '../model/productVersionInfo'

export class DataFactory {
  async getProductInfo(productId : string) {
    try {
      const response = await ProductVersionInfo.findOne({
        productId,
      });
      if (!response) {
        throw new Error("No Product Found");
      } else {
        return response.schemaStoredIn;
      }
    } catch (err) {
      return err;
    }
  }
  async searchData(schema : typeof ProductV1 | typeof ProductV2, query : Object) {
    try {
      const response = await schema.findOne(query);
      if (response) {
        return response;
      } else {
        console.log("djdfid");
      }
    } catch (err : any) {
      throw {
        status: err.statusCode || 404,
        message: err.message || "Casting Error",
      };
    }
  }
  async postData(schema : typeof ProductV1 | typeof ProductV2, data : any) {
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
      console.log("Product Saved Info",product)
      return {
        message: product,
      };
    } catch (err) {
      return err;
    }
  }
}