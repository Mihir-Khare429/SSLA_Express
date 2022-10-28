const uuid = require("short-uuid");
const logger = require("../winstonConfig");

export const productIdGenerator = () => {
    const prefix = "CIM-";
    const id = uuid.generate();
    const productId : string = `${prefix}${id}`;
    return productId;
};