"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1DataHandler = void 0;
const productV1_1 = __importDefault(require("../model/productV1"));
const dataFactory_1 = require("./dataFactory");
class v1DataHandler {
    async getData(productId) {
        try {
            const data = new dataFactory_1.DataFactory();
            const getData = await data.searchData(productV1_1.default, {
                productId: productId,
            });
            return getData;
        }
        catch (err) {
            return err;
        }
    }
    async postData(productId, whitelist, rules, dataSheets) {
        try {
            const data = new dataFactory_1.DataFactory();
            const saveData = {
                productId,
                whitelist,
                rules,
                dataSheets,
            };
            const postData = await data.postData(productV1_1.default, saveData);
            return postData;
        }
        catch (err) {
            return err;
        }
    }
}
exports.v1DataHandler = v1DataHandler;
