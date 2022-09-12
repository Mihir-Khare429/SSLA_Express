"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const logConfiguration = {
    transports: [
        new winston_1.default.transports.File({
            filename: "./logs/logs.log",
        }),
    ],
    format: winston_1.default.format.combine(winston_1.default.format.label({
        label: `Label`,
    }), winston_1.default.format.timestamp({
        format: `MMM-DD-YYYY HH:mm:ss`,
    }), winston_1.default.format.printf((info) => `${info.level}: ${info.label}: ${info.timestamp}: ${info.message}`)),
};
exports.logger = winston_1.default.createLogger(logConfiguration);
