const DALWrapper = require('../DAL/dalLogic')

const getDataFromDatabase = async (body) => {
    try{
        return DALWrapper.getProductDataV2(body)
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
    getDataFromEndpoint
}