"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productIdGenerator = void 0;
const uuid = require("short-uuid");
const logger = require("../winstonConfig");
const productIdGenerator = () => {
    const prefix = "CIM-";
    const id = uuid.generate();
    const productId = `${prefix}${id}`;
    return productId;
};
exports.productIdGenerator = productIdGenerator;
