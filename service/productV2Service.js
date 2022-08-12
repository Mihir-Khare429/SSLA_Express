const DALWrapper = require('../DAL/dalLogic')

const getDataFromDatabase = async (productId) => {
    try{
        return DALWrapper.getProductDataV2(productId)
    }catch(err){
        return err
    }
}

const postDatatoDatabase = async (selfLink,accountId,name,quantity,description,options) => {
    try{
        return DALWrapper.addProductV2(selfLink,accountId,name,quantity,description,options)
    }catch(err){
        return err
    }
}

const getDataFromEndpoint = (body) => {
    try{

    }catch(err){

    }
}

module.exports = {
    getDataFromDatabase,
    getDataFromEndpoint,
    postDatatoDatabase
}