"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductDataV2 = void 0;
const v2DataHandler_1 = require("./v2DataHandler");
const getProductDataV2 = async (id) => {
    try {
        let productV2 = new v2DataHandler_1.V2DataHandler();
        const product = productV2.getData(id);
        if (!product) {
            throw "No product found";
        }
        return product;
    }
    catch (err) {
        return err;
    }
};
exports.getProductDataV2 = getProductDataV2;
