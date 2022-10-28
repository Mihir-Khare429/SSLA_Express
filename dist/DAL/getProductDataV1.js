"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductDataV1 = void 0;
const v1DataHandler_1 = require("./v1DataHandler");
const getProductDataV1 = async (productId) => {
    try {
        const handler = new v1DataHandler_1.v1DataHandler();
        return handler.getData(productId);
    }
    catch (err) {
        return err;
    }
};
exports.getProductDataV1 = getProductDataV1;
