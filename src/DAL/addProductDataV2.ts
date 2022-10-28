import { V2DataHandler } from "./v2DataHandler";
const productIdGenerator = require("../middlewares/productIdGenerator");

export const addProductV2 = async (
  selfLink : string,
  accountId : string,
  name : string,
  quantity : Array<any>,
  description : string,
  options : Array<any>
) => {
  try {
    const handler = new V2DataHandler();
    const productID = productIdGenerator();
    return handler.postData(
      productID,
      selfLink,
      accountId,
      name,
      quantity,
      description,
      options
    );
  } catch (err) {
    return err;
  }
};
