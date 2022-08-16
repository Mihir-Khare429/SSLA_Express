const V2DataHandler = require("./v2DataHandler");

const addProductV2 = async (
  selfLink,
  accountId,
  name,
  quantity,
  description,
  options
) => {
  try {
    const handler = new V2DataHandler();
    return handler.postData(
      selfLink,
      accountId,
      name,
      quantity,
      description,
      options
    );
  } catch (err) {
    return err;
  }
};

module.exports = addProductV2;
