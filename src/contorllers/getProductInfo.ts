import { Request , Response , NextFunction}  from 'express';
import { Validator } from '../Validation/validator';
import { ProductInfoService } from '../service/productInfoService';
import { cacheMiss } from '../middlewares/cacheMiddleware';
import { logger } from '../winstonConfig';

export const getProductInfo = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const { productId } = req.params;
    if (!Validator.idValidator(productId)) {
      logger.error(
        `Product ID ${productId}: Request Method${req.method}: Request URL${req.url} Product ID Invalid}`
      );
      next({ status: 400, message: "Product Id Invalid" });
      return;
    }
    const product = new ProductInfoService();
    const productInfo = await product.getInfo(productId);
    cacheMiss(productId, productInfo);
    logger.info(
      `Response Body ${JSON.stringify(
        productInfo
      )}: Response Status 200: Served From Database`
    );
    res.status(200).send(productInfo);
  } catch (err) {
    logger.error(
      `Request Method ${req.method}: Request Body ${JSON.stringify(
        req.body
      )}: Request URL ${req.url}: Error ${err}`
    );
    return next(err);
  }
};
