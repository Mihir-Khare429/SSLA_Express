const ProductV1 = require('../model/productV1');
const ProductV2 = require('../model/productV2');

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

module.exports = DataFactory