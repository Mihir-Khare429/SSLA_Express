const uuid = require("short-uuid");
const logger = require("../winstonConfig");

const productIdGenerator = () => {
  try {
    const prefix = "CIM-";
    const id = uuid.generate();
    const productId = `${prefix}${id}`;
    return productId;
  } catch (err) {
    logger.error(`${req.method}: ${req.url} ${err.message}`);
    return err;
  }
};

module.exports = productIdGenerator;
