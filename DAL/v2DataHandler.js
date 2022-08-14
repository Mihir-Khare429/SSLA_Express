const ProductV2 = require('../model/productV2');

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
    async postData(selfLink,accountId,name,quantity,description,options) {
        try{
            let productInfo = new DataFactory()
            const productData = {
                owner : {
                    selfLink,accountId
                },
                name,quantity,description,options
            }
            const data = await productInfo.postData(ProductV2,productData)
            return data
        }catch(err){
            return err
        }
    }
}

module.exports = V2DataHandler