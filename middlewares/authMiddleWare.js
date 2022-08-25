const jwt = require("json-web-token");
const logger = require("../winstonConfig");

const authValidator = (req, res, next) => {
  try {
    let token;
    if (!req.headers.authorization) {
      logger.error(`${req.method}: ${req.url} Token Required`);
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
      logger.error(`${req.method}: ${req.url} Invalid Token`);
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

module.exports = {
  authValidator,
  generateAuthToken,
};
