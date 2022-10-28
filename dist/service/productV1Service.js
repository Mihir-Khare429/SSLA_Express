"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductV1Service = void 0;
const addProductDataV1_1 = require("../DAL/addProductDataV1");
const getProductDataV1_1 = require("../DAL/getProductDataV1");
class ProductV1Service {
    async getDataFromDatabase(productId) {
        try {
            const response = (0, getProductDataV1_1.getProductDataV1)(productId);
            return response;
        }
        catch (err) {
            return err;
        }
    }
    async postDatatoDatabase(whitelist, rules, dataSheets) {
        try {
            const response = await (0, addProductDataV1_1.addProductDataV1)(whitelist, rules, dataSheets);
            console.log("Response", response);
            return response;
        }
        catch (err) {
            return err;
        }
    }
    async getDataFromEndpoint() {
        try {
        }
        catch (err) { }
    }
}
exports.ProductV1Service = ProductV1Service;
