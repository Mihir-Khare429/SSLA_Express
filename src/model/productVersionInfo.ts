import mongoose , { Schema , model } from 'mongoose';

const productVersionInfo = new Schema({
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

const  ProductVersionInfo = mongoose.model("Product-Info", productVersionInfo);
export default ProductVersionInfo 