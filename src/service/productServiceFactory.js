const V1ProductService = require("./productV1Service");
const V2ProductService = require("./productV2Service");

class ProductServiceFactory {
  createVersionObjects(type) {
    switch (type) {
      case "productV1":
        return new V1ProductService();
        break;
      case "productV2":
        return new V2ProductService();
        break;
      default:
        return "No Product Version";
    }
  }
}

module.exports = ProductServiceFactory;
