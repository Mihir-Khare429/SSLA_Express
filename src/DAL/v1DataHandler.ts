import ProductV1  from "../model/productV1";
import { DataFactory } from './dataFactory'

export class v1DataHandler {
  async getData(productId : string) {
    try {
      const data = new DataFactory();
      const getData = await data.searchData(ProductV1, {
        productId: productId,
      });
      return getData;
    } catch (err) {
      return err;
    }
  }
  async postData(productId: any, whitelist : Array<any>, rules : Array<any>, dataSheets : Array<any>) {
    try {
      const data = new DataFactory();
      const saveData  = {
        productId,
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
