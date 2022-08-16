class CustomError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }

  static badRequest() {
    return new CustomError("Bad Request", 400);
  }

  static forbidden() {
    return new CustomError("Forbidden", 403);
  }

  static notFound() {
    return new CustomError("NotFound", 404);
  }

  static methodNotAllowed() {
    return new CustomError("Method Not Allowed", 405);
  }

  static unHandledRequest() {
    return new CustomError("Unhandled Request", 500);
  }
}

module.exports = CustomError;
