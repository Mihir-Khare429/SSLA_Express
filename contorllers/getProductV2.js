const ProductV2 = require('../model/productV2');

const getProductV2 = async (req,res) => {
    try{
        const {productId} = req.params
        if(!productId){
            return res.status(400).send({
                "message" : "Product Id is miising"
            })
        }
        const product = await ProductV2.findOne({_id : productId}).select("-_id -options._id -options.values._id -quantity._id -__v")
        if(!product){
            return res.status(400).send({
                "message" : "Invalid Product Id"
            })
        }
        res.status(200).send(
            product
        )
    }catch(err){
        res.status(404).send({
            "message" : err
        })
    }
}

module.exports = getProductV2