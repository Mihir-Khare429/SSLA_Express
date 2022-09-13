import { getProductDataV2 } from "./getProductDataV2";
import { getProductDataV1 } from "./getProductDataV1";
import { addProductDataV1 } from "./addProductDataV1";
import { addProductV2 } from "./addProductDataV2";


export const DALWrapper = {
  getProductDataV2,
  addProductV2,
  addProductDataV1,
  getProductDataV1,
};
