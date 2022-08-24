const uuid = require("short-uuid");

const productIdGenerator = () => {
  try {
    const prefix = "CIM-";
    const id = uuid.generate();
    const productId = `${prefix}${id}`;
    return productId;
  } catch (err) {
    return err;
  }
};

module.exports = productIdGenerator;
