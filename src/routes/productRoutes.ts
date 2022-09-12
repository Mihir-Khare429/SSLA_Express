import { Router } from 'express';
export const router : Router = Router()

import { authValidator , cimpressAuthValidator } from "../middlewares/authMiddleWare";
import { cacheMiddleWare } from "../middlewares/cacheMiddleware";

import {addProductV2 , getProductV2} from "../contorllers/v2ProductController";
import {addProductV1 , getProductV1} from "../contorllers/v1ProductController";
import { getProductInfo } from '../contorllers/getProductInfo';

router.post("/addProductV2", addProductV2);
router.post("/addProductV1", addProductV1);
router.get("/getProductV2/:productId", getProductV2);
router.get("/getProductV1/:productId", cacheMiddleWare, getProductV1);
router.get(
  "/getProductInfo/:productId",
  cimpressAuthValidator,
  cacheMiddleWare,
  getProductInfo
);
