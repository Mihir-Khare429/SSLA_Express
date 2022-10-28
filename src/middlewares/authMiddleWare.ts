import express , {Request , Response ,NextFunction}from 'express';
import jwt from 'json-web-token';
import {logger} from '../winstonConfig'
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const authValidator = (req : Request, res : Response, next : NextFunction) => {
  try {
    let token : string;
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
    const verify = jwt.decode(process.env.Token_Secret!, token!,() => {});
    if (verify.value && verify.value.isAdmin == true) {
      return next();
    } else {
      logger.error(
        `Request Body ${JSON.stringify(req.body)}: Request Method ${
          req.method
        }: Request URL ${req.url} Token ${token!}: Invalid Token`
      );
      return next({ status: 401, message: "Invalid Token" });
    }
  } catch (err) {
    if(err instanceof Error){
      logger.error(`${req.method}: ${req.url} ${err.message}`);
      next(err);
    }
  }
};

export const generateAuthToken = () => {
  const token = jwt.encode(
    process.env.Token_Secret!,
    {
      isAdmin: true,
    },
    'HS256',
    (value, err) => {
      if (err) {
        console.log(err);
      } else {
        return token;
      }
    }
  );
};

export const cimpressAuthValidator = (req : Request, res : Response, next : NextFunction) => {
  try {
    let token : string;
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
    type DecodedToken  = {
      [key: string]: any  
    }
    const decode_token : DecodedToken = jwtDecode(token!);
    if (decode_token && decode_token.sub) {
      const VALIDATE_PRINCIPAL =
        process.env.VALIDATE_PRINCIPAL +
        `${decode_token.sub}` +
        process.env.PRINCIPAL_QUERY_STRING;
      const tokenConfig = {
        headers: {
          authorization: `Bearer ${token!}`,
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
