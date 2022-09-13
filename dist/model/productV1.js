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
const productV1 = new mongoose_1.Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
    },
    whitelist: [
        {
            required: {
                type: Boolean,
                required: true,
            },
            derived: {
                type: Boolean,
                required: true,
            },
            type: {
                type: String,
                required: true,
            },
            class: {
                type: String,
                enum: ["Document", "Order", "Product", "Tenant"],
                required: true,
            },
            subclass: {
                type: String,
            },
            attributeKey: {
                type: String,
                required: true,
            },
            description: {
                type: String,
            },
            defaultAttributeValue: {
                type: String,
            },
            attributeValue: [
                {
                    description: {
                        type: String,
                    },
                    value: {
                        type: String,
                    },
                    unitOfMeasure: {
                        type: String,
                    },
                },
            ],
            defaultAttributeRange: {
                type: Number,
                default: 0,
            },
            attributeRanges: [
                {
                    description: {
                        type: String,
                    },
                    minimum: {
                        type: Number,
                        default: 0,
                    },
                    maximum: {
                        type: Number,
                        default: 0,
                    },
                    increment: {
                        type: Number,
                        default: 0,
                    },
                    unitOfMeasure: {
                        type: String,
                    },
                },
            ],
            formula: {
                type: String,
            },
        },
    ],
    rules: [
        {
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
            },
            predicates: [
                {
                    attributeKey: {
                        type: String,
                        required: true,
                    },
                    attributeValues: [
                        {
                            value: {
                                type: String,
                                required: true,
                            },
                            unitOfMeasure: {
                                type: String,
                            },
                        },
                    ],
                },
            ],
            results: [
                {
                    attributeKey: {
                        type: String,
                        required: true,
                    },
                    attributeValues: [
                        {
                            value: {
                                type: String,
                                required: true,
                            },
                            unitOfMeasure: {
                                type: String,
                            },
                        },
                    ],
                    attributeRanges: [
                        {
                            minimum: {
                                type: Number,
                                required: true,
                            },
                            maximum: {
                                type: Number,
                                default: 0,
                            },
                            increment: {
                                type: Number,
                                default: 0,
                            },
                            unitOfMeasure: {
                                type: String,
                            },
                        },
                    ],
                    formula: {
                        type: String,
                    },
                    operator: {
                        type: String,
                        enum: [
                            "Equals",
                            "RangeContains",
                            "Formula",
                            "GreaterThan",
                            "GreaterThanEqualTo",
                            "LessThan",
                            "LessThanEqualTo",
                        ],
                    },
                    negate: {
                        type: Boolean,
                        default: false,
                    },
                },
            ],
        },
    ],
    dataSheets: [
        {
            name: {
                type: String,
                required: true,
            },
            dataRows: [
                {
                    // required : [true,"Data Rows required"],
                    terms: [
                        {
                            // required : [true,"Terms are required"],
                            attributeKey: {
                                type: String,
                                required: true,
                            },
                            operator: {
                                type: String,
                                enum: ["In", "NotIn"],
                                required: true,
                            },
                            attributeValues: [
                                {
                                    value: {
                                        type: String,
                                        required: true,
                                    },
                                    unitOfMeasure: {
                                        type: String,
                                    },
                                },
                            ],
                            attributeRanges: [
                                {
                                    minimum: {
                                        type: Number,
                                        required: true,
                                    },
                                    maximum: {
                                        type: Number,
                                        default: 0,
                                    },
                                    increment: {
                                        type: Number,
                                        default: 0,
                                    },
                                    unitOfMeasure: {
                                        type: String,
                                    },
                                },
                            ],
                            formula: {
                                type: String,
                            },
                        },
                    ],
                },
            ],
        },
    ],
});
const ProductV1 = mongoose_1.default.model("Product-V1", productV1);
exports.default = ProductV1;
