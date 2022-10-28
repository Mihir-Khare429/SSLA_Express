import {Request , Response , NextFunction } from 'express';
import { Validator } from '../Validation/validator';
import { ProductV2Service } from '../service/productV2Service';
import { cacheMiss } from '../middlewares/cacheMiddleware';
import { logger } from '../winstonConfig';

export const addProductV2 = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const { selfLink, accountId, name, quantity, description, options } =
      req.body;
    logger.info(
      `Request Method${req.method}: Request URL${
        req.url
      }: Request Body ${JSON.stringify(req.body)}`
    );
    const validatorResponse = await Validator.v2PostProductValidator(req.body);
    if (validatorResponse.success == false) {
      return next({
        status: validatorResponse.status,
        message: validatorResponse.message,
      });
    }
    const v2Product = new ProductV2Service();
    const response = await v2Product.postDatatoDatabase(
      selfLink,
      accountId,
      name,
      quantity,
      description,
      options
    );
    logger.info(
      `Response Body ${JSON.stringify(
        response
      )}: Response Status 200: Served From Database`
    );
    res.status(200).send({
      response,
    });
  } catch (err) {
    logger.error(
      `Request Method ${req.method}: Request Body ${JSON.stringify(
        req.body
      )}: Request URL ${req.url}: Error ${err}`
    );
    res.status(400).send({
      message: err,
    });
  }
};

export const getProductV2 = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const { productId } = req.params;
    if (!Validator.idValidator(productId)) {
      logger.error(
        `Product ID ${productId}: Request Method${req.method}: Request URL${req.url} Product ID Invalid}`
      );
      next({ status: 400, message: "Product Id Invalid" });
      return;
    }
    const v2Product = new ProductV2Service();
    const response = await v2Product.getDataFromDatabase(productId);
    cacheMiss(productId, response);
    logger.info(
      `Response Body ${JSON.stringify(
        response
      )}: Response Status 200: Served From Database`
    );
    res.status(200).send(response);
  } catch (err) {
    logger.error(
      `Request Method ${req.method}: Request Body ${JSON.stringify(
        req.body
      )}: Request URL ${req.url}: Error ${err}`
    );
    res.status(404).send({
      message: err,
    });
  }
};
