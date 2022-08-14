const ProductV1 = require('../model/productV1');

const DataFactory = require('./dataFactory');

class v1DataHandler {
    async getData(productId){
        try{

        }catch(err){

        }
    }
    async postData(whitelist,rules,results,dataSheets){
        try{
            const data =  new DataFactory()
            const postData = await data.postData(ProductV1,{
                whitelist,rules,dataSheets
            })
            return postData
        }catch(err){
            return err
        }
    }
}

module.exports = v1DataHandler