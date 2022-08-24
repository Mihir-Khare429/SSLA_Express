const NodeCache = require("node-cache");
const myCache = new NodeCache();

const cacheMiddleWare = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const value = myCache.get(productId);
    if (value) {
      let response = JSON.parse(value);
      return res.status(200).send({
        response,
      });
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { cacheMiddleWare, myCache };
