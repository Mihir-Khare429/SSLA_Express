const router = require('express').Router()

const addProductV2 = require('../contorllers/addProductV2');
const getProductV2 = require('../contorllers/getProductV2');

router.post('/addProductV2',addProductV2)
router.get('/getProductV2/:productId',getProductV2)

module.exports = router
