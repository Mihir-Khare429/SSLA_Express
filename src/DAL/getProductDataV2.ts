import { V2DataHandler } from './v2DataHandler';

export const getProductDataV2 = async (id : string) => {
  try {
    let productV2 = new V2DataHandler();
    const product = productV2.getData(id);
    if (!product) {
      throw "No product found";
    }
    return product;
  } catch (err) {
    return err;
  }
};
