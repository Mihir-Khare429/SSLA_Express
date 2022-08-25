const Redis = require("ioredis");
const redis = new Redis();
const logger = require("../winstonConfig");

const cacheMiddleWare = async (req, res, next) => {
  try {
    const { productId } = req.params;
    redis.get(productId, (err, value) => {
      if (value) {
        let response = JSON.parse(value);
        return res.status(200).send({
          response,
        });
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
    logger.error(`${req.method}: ${req.url} ${err.message}`);
    return err;
  }
};

module.exports = {
  cacheMiddleWare,
  cacheMiss,
};
