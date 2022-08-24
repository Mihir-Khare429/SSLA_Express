const mongoose = require("mongoose");

class Validator {
  static idValidator(productId) {
    // if (mongoose.isValidObjectId(productId)) {
    //   return true;
    // }
    // return false;
    return true;
  }

  static async v1PostProductValidator(body) {
    if (body == {}) {
      return {
        success: false,
        status: 400,
        message: "Empty Request Body",
      };
    }
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

  static async v2PostProductValidator(body) {
    if (body == {}) {
      return {
        success: false,
        status: 400,
        message: "Empty Request Body",
      };
    }
    if (
      !body.selfLink ||
      !body.accountId ||
      !body.name ||
      !body.quantity ||
      !body.description ||
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

module.exports = Validator;
