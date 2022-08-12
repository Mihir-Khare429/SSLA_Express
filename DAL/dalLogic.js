const getProductDataV2 = require('../DAL/getProductDataV2');
const addProductV2 = require('./addProductDataV2');

const DALWrapper = {
    getProductDataV2,
    addProductV2
}

module.exports = DALWrapper