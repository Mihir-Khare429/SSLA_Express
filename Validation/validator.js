const mongoose = require("mongoose");

const idValidator = async (productId) => {
  return mongoose.isValidObjectId(productId);
};

const v1PostProductValidator = async (body) => {
  if (body == {}) {
    return {
      success: false,
      status: 400,
      message: "Empty Request Body",
    };
  }
  if (!body.whitelists || !body.rules || !body.dataSheets) {
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
    !body.selfLinks ||
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
