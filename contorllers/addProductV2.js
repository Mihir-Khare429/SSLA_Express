const productV2Service = require('../service/productV2Service');

const addProductV2 = async (req,res) => {
    try{
        const {
            selfLink,accountId,name,quantity,description,options
        } = req.body
        const response = await productV2Service.postDatatoDatabase(selfLink,accountId,name,quantity,description,options)
        res.status(200).send({
            response
        })
    }catch(err){
        res.status(400).send({
            message : err
        })
    }
}

module.exports = addProductV2