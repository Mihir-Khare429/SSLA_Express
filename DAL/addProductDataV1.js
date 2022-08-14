const v1DataHandler = require('./v1DataHandler');

const addProductDataV1 =  async (whitelist,rules,results,dataSheets) => {
    try{
        const handler = new v1DataHandler()
        const response = await handler.postData(whitelist,rules,dataSheets)
        return response
    }catch(err){
        return err
    }
}

module.exports = addProductDataV1