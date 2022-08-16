const productV2Service = require("../service/productV2Service");

const getProductV2 = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      return res.status(400).send({
        message: "Product Id is missing",
      });
    }
    const response = await productV2Service.getDataFromDatabase(productId);
    res.status(200).send(response);
  } catch (err) {
    res.status(404).send({
      message: err,
    });
  }
};

module.exports = getProductV2;
