"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductInfo = void 0;
const validator_1 = require("../Validation/validator");
const productInfoService_1 = require("../service/productInfoService");
const cacheMiddleware_1 = require("../middlewares/cacheMiddleware");
const winstonConfig_1 = require("../winstonConfig");
const getProductInfo = async (req, res, next) => {
    try {
        const { productId } = req.params;
        if (!validator_1.Validator.idValidator(productId)) {
            winstonConfig_1.logger.error(`Product ID ${productId}: Request Method${req.method}: Request URL${req.url} Product ID Invalid}`);
            next({ status: 400, message: "Product Id Invalid" });
            return;
        }
        const product = new productInfoService_1.ProductInfoService();
        const productInfo = await product.getInfo(productId);
        (0, cacheMiddleware_1.cacheMiss)(productId, productInfo);
        winstonConfig_1.logger.info(`Response Body ${JSON.stringify(productInfo)}: Response Status 200: Served From Database`);
        res.status(200).send(productInfo);
    }
    catch (err) {
        winstonConfig_1.logger.error(`Request Method ${req.method}: Request Body ${JSON.stringify(req.body)}: Request URL ${req.url}: Error ${err}`);
        return next(err);
    }
};
exports.getProductInfo = getProductInfo;
