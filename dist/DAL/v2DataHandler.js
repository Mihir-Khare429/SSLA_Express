"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V2DataHandler = void 0;
const ProductV2 = require("../model/productV2");
const DataFactory = require("./dataFactory");
class V2DataHandler {
    async getData(productId) {
        try {
            let productInfo = new DataFactory();
            const data = await productInfo.searchData(ProductV2, {
                productId: productId,
            });
            return data;
        }
        catch (err) {
            return err;
        }
    }
    async postData(productId, selfLink, accountId, name, quantity, description, options) {
        try {
            let productInfo = new DataFactory();
            const productData = {
                productId,
                owner: {
                    selfLink,
                    accountId,
                },
                name,
                quantity,
                description,
                options,
            };
            const data = await productInfo.postData(ProductV2, productData);
            console.log("Product Saved Info", data);
            return data;
        }
        catch (err) {
            return err;
        }
    }
}
exports.V2DataHandler = V2DataHandler;
