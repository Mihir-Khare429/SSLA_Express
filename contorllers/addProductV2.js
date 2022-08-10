const ProductV2 = require('../model/productV2');


const addProductV2 = async (req,res) => {
    try{
        const {
            selfLink,accountId,name,quantity,description,options
        } = req.body
        const product = new ProductV2({
            owner : {
                selfLink,accountId
            },
            name,
            quantity : quantity,
            description,
            options : options
        })
        await product.save()
        res.status(200).send({
            message  : "Product Saved",
            product : product
        })
    }catch(err){
        res.status(400).send({
            message : err
        })
    }
}

module.exports = addProductV2