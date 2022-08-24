const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productV2 = new Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    selfLink: {
      type: String,
      required: true,
    },
    accountId: {
      type: String,
      required: true,
    },
  },
  name: {
    type: String,
    required: true,
  },
  quantity: [
    {
      type: {
        type: String,
        required: true,
      },
      range: {
        minimum: {
          type: Number,
          required: true,
        },
        maximum: {
          type: Number,
          required: true,
        },
        increment: {
          type: Number,
          required: true,
        },
      },
    },
  ],
  description: {
    type: String,
    required: false,
  },
  options: [
    {
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      values: [
        {
          type: {
            type: String,
            required: true,
          },
          value: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Product-V2", productV2);
