import { v1DataHandler } from './v1DataHandler'

export const getProductDataV1 = async (productId : string) => {
  try {
    const handler = new v1DataHandler();
    return handler.getData(productId);
  } catch (err) {
    return err;
  }
};
