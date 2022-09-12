"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    static async idValidator(productId) {
        if (productId == "") {
            return false;
        }
        return true;
    }
    static async v1PostProductValidator(body) {
        if (!body.whitelist || !body.rules || !body.dataSheets) {
            return {
                success: false,
                status: 400,
                message: "Invalid Request Body",
            };
        }
        return {
            success: true,
        };
    }
    static async v2PostProductValidator(body) {
        if (!body.selfLink ||
            !body.accountId ||
            !body.name ||
            !body.quantity ||
            !body.description ||
            !body.options) {
            return {
                success: false,
                status: 400,
                message: "Invalid Request Body",
            };
        }
        return {
            success: true,
        };
    }
}
exports.Validator = Validator;
