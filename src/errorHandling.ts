export class CustomError extends Error {
  statusCode: number;
  constructor(message :string, statusCode : number) {
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
