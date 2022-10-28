"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFactory = void 0;
const productV1_1 = __importDefault(require("../model/productV1"));
const productVersionInfo_1 = __importDefault(require("../model/productVersionInfo"));
class DataFactory {
    async getProductInfo(productId) {
        try {
            const response = await productVersionInfo_1.default.findOne({
                productId,
            });
            if (!response) {
                throw new Error("No Product Found");
            }
            else {
                return response.schemaStoredIn;
            }
        }
        catch (err) {
            return err;
        }
    }
    async searchData(schema, query) {
        try {
            const response = await schema.findOne(query);
            if (response) {
                return response;
            }
            else {
                console.log("djdfid");
            }
        }
        catch (err) {
            throw {
                status: err.statusCode || 404,
                message: err.message || "Casting Error",
            };
        }
    }
    async postData(schema, data) {
        try {
            const product = new schema(data);
            await product.save((err, product) => {
                if (err) {
                    return err;
                }
            });
            if (schema == productV1_1.default) {
                const productInfo = new productVersionInfo_1.default({
                    productId: product.productId,
                    schemaStoredIn: "productV1",
                });
                await productInfo.save();
            }
            else {
                const productInfo = new productVersionInfo_1.default({
                    productId: product.productId,
                    schemaStoredIn: "productV2",
                });
                await productInfo.save();
            }
            console.log("Product Saved Info", product);
            return {
                message: product,
            };
        }
        catch (err) {
            return err;
        }
    }
}
exports.DataFactory = DataFactory;
