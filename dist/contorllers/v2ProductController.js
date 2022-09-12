"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductV2 = exports.addProductV2 = void 0;
const validator_1 = require("../Validation/validator");
const productV2Service_1 = require("../service/productV2Service");
const cacheMiddleware_1 = require("../middlewares/cacheMiddleware");
const winstonConfig_1 = require("../winstonConfig");
const addProductV2 = async (req, res, next) => {
    try {
        const { selfLink, accountId, name, quantity, description, options } = req.body;
        winstonConfig_1.logger.info(`Request Method${req.method}: Request URL${req.url}: Request Body ${JSON.stringify(req.body)}`);
        const validatorResponse = await validator_1.Validator.v2PostProductValidator(req.body);
        if (validatorResponse.success == false) {
            return next({
                status: validatorResponse.status,
                message: validatorResponse.message,
            });
        }
        const v2Product = new productV2Service_1.ProductV2Service();
        const response = await v2Product.postDatatoDatabase(selfLink, accountId, name, quantity, description, options);
        winstonConfig_1.logger.info(`Response Body ${JSON.stringify(response)}: Response Status 200: Served From Database`);
        res.status(200).send({
            response,
        });
    }
    catch (err) {
        winstonConfig_1.logger.error(`Request Method ${req.method}: Request Body ${JSON.stringify(req.body)}: Request URL ${req.url}: Error ${err}`);
        res.status(400).send({
            message: err,
        });
    }
};
exports.addProductV2 = addProductV2;
const getProductV2 = async (req, res, next) => {
    try {
        const { productId } = req.params;
        if (!validator_1.Validator.idValidator(productId)) {
            winstonConfig_1.logger.error(`Product ID ${productId}: Request Method${req.method}: Request URL${req.url} Product ID Invalid}`);
            next({ status: 400, message: "Product Id Invalid" });
            return;
        }
        const v2Product = new productV2Service_1.ProductV2Service();
        const response = await v2Product.getDataFromDatabase(productId);
        (0, cacheMiddleware_1.cacheMiss)(productId, response);
        winstonConfig_1.logger.info(`Response Body ${JSON.stringify(response)}: Response Status 200: Served From Database`);
        res.status(200).send(response);
    }
    catch (err) {
        winstonConfig_1.logger.error(`Request Method ${req.method}: Request Body ${JSON.stringify(req.body)}: Request URL ${req.url}: Error ${err}`);
        res.status(404).send({
            message: err,
        });
    }
};
exports.getProductV2 = getProductV2;
