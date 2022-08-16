const productV1Service = require("../service/productV1Service");

const addProductV1 = async (req, res) => {
  try {
    const { whitelist, rules, dataSheets } = req.body;
    const result = await productV1Service.postDatatoDatabase(
      whitelist,
      rules,
      dataSheets
    );
    res.status(201).send({
      result,
    });
  } catch (err) {
    return res.status(400).send({
      message: err,
    });
  }
};

module.exports = addProductV1;
