const ProductV2 = require('../model/productV2');
const serviceLogic = require('../service/service');

const getProductV2 = async (req,res) => {
    try{
        const {productId} = req.params

        // Validating here . Later on shifting to Validation Layer

        if(!productId){
            return res.status(400).send({
                "message" : "Product Id is missing"
            })
        }
        const response = await serviceLogic.getDataFromDatabase(productId)
        res.status(200).send(
            response
        )
    }catch(err){
        res.status(404).send({
            "message" : err
        })
    }
}

module.exports = getProductV2