"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheMiss = exports.cacheMiddleWare = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const winstonConfig_1 = require("../winstonConfig");
const redis = new ioredis_1.default(6379, "redis-server");
const cacheMiddleWare = async (req, res, next) => {
    try {
        const { productId } = req.params;
        winstonConfig_1.logger.info(`Request Params ${JSON.stringify(req.params)}: Request Method ${req.method}: Request URL ${req.url}`);
        redis.get(productId, (err, value) => {
            if (value) {
                let response = JSON.parse(value);
                winstonConfig_1.logger.info(`Response Body ${JSON.stringify(response)}: Response Status 200: Served From Cache`);
                return res.status(200).send({
                    response,
                });
            }
            else {
                next();
            }
        });
    }
    catch (err) {
        if (err instanceof Error) {
            winstonConfig_1.logger.error(`${req.method}: ${req.url} ${err.message}`);
            next(err);
        }
    }
};
exports.cacheMiddleWare = cacheMiddleWare;
const cacheMiss = (key, value) => {
    try {
        redis.set(key, JSON.stringify(value));
    }
    catch (err) {
        if (err instanceof Error) {
            winstonConfig_1.logger.error(`Cache Miss Key ${key}:${err.message}`);
            return err;
        }
    }
};
exports.cacheMiss = cacheMiss;
