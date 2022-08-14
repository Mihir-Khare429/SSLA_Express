const router = require('express').Router()

const addProductV2 = require('../contorllers/addProductV2');
const getProductV2 = require('../contorllers/getProductV2');
const addProductV1 = require('../contorllers/addProductV1');

router.post('/addProductV2',addProductV2)
router.post('/addProductV1',addProductV1)
router.get('/getProductV2/:productId',getProductV2)

module.exports = router
