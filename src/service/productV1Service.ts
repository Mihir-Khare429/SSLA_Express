import { addProductDataV1 } from "../DAL/addProductDataV1";
import { getProductDataV1 } from "../DAL/getProductDataV1";
export class ProductV1Service {
  async getDataFromDatabase(productId : string) {
    try {
      const response = getProductDataV1(productId);
      return response;
    } catch (err) {
      return err;
    }
  }

  async postDatatoDatabase(whitelist : Array<any>, rules : Array<any>, dataSheets : Array<any>) {
    try {
      const response = await addProductDataV1(
        whitelist,
        rules,
        dataSheets
      );
      console.log("Response",response)
      return response;
    } catch (err) {
      return err;
    }
  }

  async getDataFromEndpoint() {
    try {
    } catch (err) {}
  }
}
