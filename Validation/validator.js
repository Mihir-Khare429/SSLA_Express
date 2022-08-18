const mongoose = require("mongoose");
//Class
const idValidator = (productId) => {
  if (mongoose.isValidObjectId(productId)) {
    return true;
  }
  return false;
};

const v1PostProductValidator = async (body) => {
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
};

const v2PostProductValidator = (body) => {
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
};

module.exports = {
  idValidator,
  v1PostProductValidator,
  v2PostProductValidator,
};
