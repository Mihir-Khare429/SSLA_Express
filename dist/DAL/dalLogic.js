"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DALWrapper = void 0;
const getProductDataV2_1 = require("./getProductDataV2");
const getProductDataV1_1 = require("./getProductDataV1");
const addProductDataV1_1 = require("./addProductDataV1");
const addProductDataV2_1 = require("./addProductDataV2");
exports.DALWrapper = {
    getProductDataV2: getProductDataV2_1.getProductDataV2,
    addProductV2: addProductDataV2_1.addProductV2,
    addProductDataV1: addProductDataV1_1.addProductDataV1,
    getProductDataV1: getProductDataV1_1.getProductDataV1,
};
