"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductV2Service = void 0;
const DALWrapper = require("../DAL/dalLogic");
class ProductV2Service {
    async getDataFromDatabase(productId) {
        try {
            return DALWrapper.getProductDataV2(productId);
        }
        catch (err) {
            return err;
        }
    }
    async postDatatoDatabase(selfLink, accountId, name, quantity, description, options) {
        try {
            return DALWrapper.addProductV2(selfLink, accountId, name, quantity, description, options);
        }
        catch (err) {
            return err;
        }
    }
    async getDataFromEndpoint(body) {
        try {
        }
        catch (err) { }
    }
}
exports.ProductV2Service = ProductV2Service;
