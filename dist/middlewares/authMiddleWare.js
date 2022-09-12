"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cimpressAuthValidator = exports.generateAuthToken = exports.authValidator = void 0;
const json_web_token_1 = __importDefault(require("json-web-token"));
const winstonConfig_1 = require("../winstonConfig");
const axios_1 = __importDefault(require("axios"));
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const authValidator = (req, res, next) => {
    try {
        let token;
        if (!req.headers.authorization) {
            winstonConfig_1.logger.error(`Request Body ${JSON.stringify(req.body)}: Request Method ${req.method}: Request URL ${req.url} Token Required`);
            return next({ status: 401, message: "Token Required" });
        }
        if (req.headers.authorization &&
            req.headers.authorization.split(" ")[0] === "Bearer") {
            token = req.headers.authorization.split(" ")[1];
        }
        const verify = json_web_token_1.default.decode(process.env.Token_Secret, token, () => { });
        if (verify.value && verify.value.isAdmin == true) {
            return next();
        }
        else {
            winstonConfig_1.logger.error(`Request Body ${JSON.stringify(req.body)}: Request Method ${req.method}: Request URL ${req.url} Token ${token}: Invalid Token`);
            return next({ status: 401, message: "Invalid Token" });
        }
    }
    catch (err) {
        if (err instanceof Error) {
            winstonConfig_1.logger.error(`${req.method}: ${req.url} ${err.message}`);
            next(err);
        }
    }
};
exports.authValidator = authValidator;
const generateAuthToken = () => {
    const token = json_web_token_1.default.encode(process.env.Token_Secret, {
        isAdmin: true,
    }, 'HS256', (value, err) => {
        if (err) {
            console.log(err);
        }
        else {
            return token;
        }
    });
};
exports.generateAuthToken = generateAuthToken;
const cimpressAuthValidator = (req, res, next) => {
    try {
        let token;
        if (!req.headers.authorization) {
            winstonConfig_1.logger.error(`Request Body ${JSON.stringify(req.body)}: Request Method ${req.method}: Request URL ${req.url} Token Required`);
            return next({ status: 401, message: "Token Required" });
        }
        if (req.headers.authorization &&
            req.headers.authorization.split(" ")[0] === "Bearer") {
            token = req.headers.authorization.split(" ")[1];
        }
        const decode_token = (0, jwt_decode_1.default)(token);
        if (decode_token && decode_token.sub) {
            const VALIDATE_PRINCIPAL = process.env.VALIDATE_PRINCIPAL +
                `${decode_token.sub}` +
                process.env.PRINCIPAL_QUERY_STRING;
            const tokenConfig = {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            };
            axios_1.default
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
    }
    catch (err) {
        next(err);
    }
};
exports.cimpressAuthValidator = cimpressAuthValidator;
