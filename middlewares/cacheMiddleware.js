const Redis = require("ioredis");
const redis = new Redis();
const logger = require("../winstonConfig");

const cacheMiddleWare = async (req, res, next) => {
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
    logger.error(`${req.method}: ${req.url} ${err.message}`);
    next(err);
  }
};

const cacheMiss = (key, value) => {
  try {
    redis.set(key, JSON.stringify(value));
  } catch (err) {
    logger.error(`Cache Key ${key}: ${req.method}: ${req.url} ${err.message}`);
    return err;
  }
};

module.exports = {
  cacheMiddleWare,
  cacheMiss,
};
