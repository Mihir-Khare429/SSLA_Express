const mongoose = require("mongoose");
const productVersionInfo = new mongoose.Schema({
  productId: {
    unique: true,
    required: true,
    type: String,
  },
  schemaStoredIn: {
    type: String,
    enum: ["productV1", "productV2"],
    required: true,
  },
});

module.exports = mongoose.model("Product-Info", productVersionInfo);
