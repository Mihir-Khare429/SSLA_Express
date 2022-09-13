"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductDataV1 = void 0;
const v1DataHandler_1 = require("./v1DataHandler");
const productIdGenerator_1 = require("../middlewares/productIdGenerator");
const addProductDataV1 = async (whitelist, rules, dataSheets) => {
    try {
        const handler = new v1DataHandler_1.v1DataHandler();
        const productID = (0, productIdGenerator_1.productIdGenerator)();
        return await handler.postData(productID, whitelist, rules, dataSheets);
    }
    catch (err) {
        return err;
    }
};
exports.addProductDataV1 = addProductDataV1;
