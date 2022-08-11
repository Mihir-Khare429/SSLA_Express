const ProductV2 = require('../model/productV2');
const ProductV1 = require('../model/productV1');

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

class DataFactory {
    async searchData(schema,query){
        try{
            const response = await schema.findOne(query).select("-_id -options._id -options.values._id -quantity._id -__v")
            if(!response){
                throw "No product found"
            }
            return response
        }catch(err){
            return err
        }
    }
}

const getProductDataV2 = async (id) => {
    try{
        let productV2 = new V2DataHandler()
        const product = productV2.getData(id)
        if(!product){
            console.log("if entered")
            throw "No product found"
        }
        return product
    }catch(err){
        return err
    }
}

module.exports = getProductDataV2