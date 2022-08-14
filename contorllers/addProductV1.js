const productV1Service = require('../service/productV1Service');

const addProductV1 = async (req,res) => {
    try{
        const {
            whitelist,rules,dataSheets
        } = req.body
        console.log(dataSheets[0].dataRows[0].terms)
        const result = await productV1Service.postDatatoDatabase(whitelist,rules,dataSheets)
        return res.status(201).send({
            message : result
        })
    }catch(err){
        return res.status(400).send({
            "message" : err
        })
    }
}

module.exports = addProductV1