const jwt = require("json-web-token");
const logger = require("../winstonConfig");
const axios = require("axios");
const jwtDecode = require("jwt-decode");
const { response } = require("express");

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
    const decode_token = jwtDecode(token);
    if (decode_token.sub) {
      const VALIDATE_PRINCIPAL =
        process.env.VALIDATE_PRINCIPAL +
        `${decode_token.sub}` +
        process.env.PRINCIPAL_QUERY_STRING;
      const tokenConfig = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      axios
        .get(VALIDATE_PRINCIPAL, tokenConfig)
        .then((body) => {
          console.log(body.data.profile.email_verified);
          return next();
        })
        .catch((err) => {
          console.log(err.message);
          return next({ status: 401, message: "Invalid Token" });
        });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  authValidator,
  generateAuthToken,
  cimpressAuthValidator,
};
