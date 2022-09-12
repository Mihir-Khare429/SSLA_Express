import {Request,Response,NextFunction} from 'express';
import Redis from 'ioredis';
import {logger} from '../winstonConfig';

const redis = new Redis();

export const cacheMiddleWare = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const { productId } = req.params;
    logger.info(
      `Request Params ${JSON.stringify(req.params)}: Request Method ${
        req.method
      }: Request URL ${req.url}`
    );
    redis.get(productId, (err, value) => {
      if (value) {
        let response = JSON.parse(value);
        logger.info(
          `Response Body ${JSON.stringify(
            response
          )}: Response Status 200: Served From Cache`
        );
        return res.status(200).send({
          response,
        });
      } else {
        next();
      }
    });
  } catch (err) {
    if(err instanceof Error){
      logger.error(`${req.method}: ${req.url} ${err.message}`);
      next(err);
    }
  }
};

export const cacheMiss = (key : string, value : string | Object) : void | Error => {
  try {
    redis.set(key, JSON.stringify(value));
  } catch (err) {
    if(err instanceof Error){
      logger.error(`Cache Miss Key ${key}:${err.message}`);
      return err;
    }
  }
};