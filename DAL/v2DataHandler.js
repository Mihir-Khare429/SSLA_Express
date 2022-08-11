const ProductV2 = require('../model/productV2');
const ProductV1 = require('../model/productV1');

const DataFactory = require('./dataFactory');

class V2DataHandler {
    async getData(productId) {
        try{
            let productInfo = new DataFactory()
            const data = await productInfo.searchData(ProductV2,{_id : productId})
            return data
        }catch(err){
            return err
        }
    }
}

module.exports = V2DataHandler