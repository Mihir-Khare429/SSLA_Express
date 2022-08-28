const jwt = require("json-web-token");
const logger = require("../winstonConfig");
const axios = require("axios");

const PRINCIPAL_URL =
  "https://api.cimpress.io/auth/access-management/v1/principals?q=self";
const VALIDATE_PRINCIPAL =
  "https://api.cimpress.io/auth/access-management/v1/principals/self?responseFilter=group,string&include=true";

const authValidator = (req, res, next) => {
  try {
    let token;
    if (!req.headers.authorization) {
      logger.error(
        `Request Body ${JSON.stringify(req.body)}: Request Method ${
          req.method
        }: Request URL ${req.url} Token Required`
      );
      return next({ status: 401, message: "Token Required" });
    }
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    const verify = jwt.decode(process.env.Token_Secret, token);
    if (verify.value && verify.value.isAdmin == true) {
      return next();
    } else {
      logger.error(
        `Request Body ${JSON.stringify(req.body)}: Request Method ${
          req.method
        }: Request URL ${req.url} Token ${token}: Invalid Token`
      );
      return next({ status: 401, message: "Invalid Token" });
    }
  } catch (err) {
    logger.error(`${req.method}: ${req.url} ${err.message}`);
    next(err);
  }
};

const generateAuthToken = () => {
  const token = jwt.encode(
    process.env.Token_Secret,
    {
      isAdmin: true,
    },
    (value, err) => {
      if (err) {
        console.log(err);
      } else {
        return token;
      }
    }
  );
};

const cimpressAuthValidator = (req, res, next) => {
  try {
    let token;
    if (!req.headers.authorization) {
      logger.error(
        `Request Body ${JSON.stringify(req.body)}: Request Method ${
          req.method
        }: Request URL ${req.url} Token Required`
      );
      return next({ status: 401, message: "Token Required" });
    }
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    const tokenConfig = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const response = axios.get(PRINCIPAL_URL, tokenConfig);
    console.log(response);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  authValidator,
  generateAuthToken,
  cimpressAuthValidator,
};
