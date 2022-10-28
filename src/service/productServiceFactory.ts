const V1ProductService = require("./productV1Service");
const V2ProductService = require("./productV2Service");

interface ServiceFactory {
  createObjects(type : string) : typeof V1ProductService | typeof V2ProductService
}

export class ProductServiceFactory implements ServiceFactory {
  createObjects(type : string) {
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
