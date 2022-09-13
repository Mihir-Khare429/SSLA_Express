import { v1DataHandler } from "./v1DataHandler";
import { productIdGenerator } from "../middlewares/productIdGenerator";

export const addProductDataV1 = async (whitelist : Array<any>, rules : Array<any>, dataSheets : Array<any>) => {
  try {
    const handler = new v1DataHandler();
    const productID   = productIdGenerator();
    return await handler.postData(productID, whitelist, rules, dataSheets);
  } catch (err) {
    return err;
  }
};

