import {V1Product , V2Product} from '../types/productType';

export class Validator {
  static async idValidator(productId : string){
    if(productId == ""){
      return false
    }
    return true
  }

  static async v1PostProductValidator(body : V1Product) {
    if (!body.whitelist || !body.rules || !body.dataSheets) {
      return {
        success: false,
        status: 400,
        message: "Invalid Request Body",
      };
    }
    return {
      success: true,
    };
  }

  static async v2PostProductValidator(body : V2Product) {
    if (
      !body.selfLink ||
      !body.accountId ||
      !body.name ||
      !body.quantity ||
      !body.description ||
      !body.options
    ) {
      return {
        success: false,
        status: 400,
        message: "Invalid Request Body",
      };
    }
    return {
      success: true,
    };
  }
}
