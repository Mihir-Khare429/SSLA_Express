const mongoose = require("mongoose");

const idValidator = async (productId) => {
  if (mongoose.isValidObjectId(productId)) {
    return true;
  }
  return false;
};

module.exports = {
  idValidator,
};
