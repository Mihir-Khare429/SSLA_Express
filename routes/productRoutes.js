const router = require("express").Router();

const ProductV2 = require("../contorllers/productControllerV2");
const ProductV1 = require("../contorllers/productControllerV1");

router.post("/addProductV2", ProductV2.addProductV2);
router.post("/addProductV1", ProductV1.addProductV1);
router.get("/getProductV2/:productId", ProductV2.getProductV2);
router.get("/getProductV1/:productId", ProductV1.getProductV1);

module.exports = router;
