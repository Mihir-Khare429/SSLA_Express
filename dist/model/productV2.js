"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const productV2 = new mongoose_1.Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
    },
    owner: {
        selfLink: {
            type: String,
            required: true,
        },
        accountId: {
            type: String,
            required: true,
        },
    },
    name: {
        type: String,
        required: true,
    },
    quantity: [
        {
            type: {
                type: String,
                required: true,
            },
            range: {
                minimum: {
                    type: Number,
                    required: true,
                },
                maximum: {
                    type: Number,
                    required: true,
                },
                increment: {
                    type: Number,
                    required: true,
                },
            },
        },
    ],
    description: {
        type: String,
        required: false,
    },
    options: [
        {
            name: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true,
            },
            values: [
                {
                    type: {
                        type: String,
                        required: true,
                    },
                    value: {
                        type: String,
                        required: true,
                    },
                },
            ],
        },
    ],
});
const ProductV2 = mongoose_1.default.model("Product-V2", productV2);
exports.default = ProductV2;
