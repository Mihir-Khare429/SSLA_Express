"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductV2 = void 0;
const v2DataHandler_1 = require("./v2DataHandler");
const productIdGenerator = require("../middlewares/productIdGenerator");
const addProductV2 = async (selfLink, accountId, name, quantity, description, options) => {
    try {
        const handler = new v2DataHandler_1.V2DataHandler();
        const productID = productIdGenerator();
        return handler.postData(productID, selfLink, accountId, name, quantity, description, options);
    }
    catch (err) {
        return err;
    }
};
exports.addProductV2 = addProductV2;
