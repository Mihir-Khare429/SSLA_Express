"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductV1 = exports.addProductV1 = void 0;
const validator_1 = require("../Validation/validator");
const productV1Service_1 = require("../service/productV1Service");
const cacheMiddleware_1 = require("../middlewares/cacheMiddleware");
const winstonConfig_1 = require("../winstonConfig");
const addProductV1 = async (req, res, next) => {
    try {
        const { whitelist, rules, dataSheets } = req.body;
        winstonConfig_1.logger.info(`Request Method${req.method}: Request URL${req.url}: Request Body ${JSON.stringify(req.body)}`);
        const validatorResponse = await validator_1.Validator.v1PostProductValidator(req.body);
        if (validatorResponse.success == false) {
            return next({
                status: validatorResponse.status,
                message: validatorResponse.message,
            });
        }
        const v1Product = new productV1Service_1.ProductV1Service();
        const result = await v1Product.postDatatoDatabase(whitelist, rules, dataSheets);
        winstonConfig_1.logger.info(`Response Body ${JSON.stringify(result)}: Response Status 200: Served From Database`);
        res.status(201).send({
            result,
        });
    }
    catch (err) {
        winstonConfig_1.logger.error(`Request Method ${req.method}: Request Body ${JSON.stringify(req.body)}: Request URL ${req.url}: Error ${err}`);
        return res.status(400).send({
            message: err,
        });
    }
};
exports.addProductV1 = addProductV1;
const getProductV1 = async (req, res, next) => {
    try {
        const { productId } = req.params;
        if (!validator_1.Validator.idValidator(productId)) {
            winstonConfig_1.logger.error(`Product ID ${productId}: Request Method${req.method}: Request URL${req.url} Product ID Invalid}`);
            next({ status: 400, message: "Product Id Invalid" });
            return;
        }
        const v1Product = new productV1Service_1.ProductV1Service();
        const response = await v1Product.getDataFromDatabase(productId);
        (0, cacheMiddleware_1.cacheMiss)(productId, response);
        winstonConfig_1.logger.info(`Response Body ${JSON.stringify(response)}: Response Status 200: Served From Database`);
        res.status(200).send({
            response,
        });
    }
    catch (err) {
        winstonConfig_1.logger.error(`Request Method ${req.method}: Request Body ${JSON.stringify(req.body)}: Request URL ${req.url}: Error ${err}`);
        console.log(err);
    }
};
exports.getProductV1 = getProductV1;
