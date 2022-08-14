const mongoose  = require('mongoose')

const Schema = require('mongoose').Schema
const productV1 = new Schema({
    whitelist : [{
        required : {
            type : Boolean,
            required : true
        },
        derived : {
            type : Boolean,
            required : true
        },
        type : {
            type : String,
            required : true
        },
        class : {
            type : String,
            enum : ["Document","Order","Product","Tenant"],
            required : true
        },
        subclass : {
            type : String
        },
        attributeKey : {
            type : String,
            required : true
        },
        description : {
            type : String
        },
        defaultAttributeValue : {
            type : String
        },
        attributeValue : [{
            description : {
                type : String
            },
            value : {
                type : String
            },
            unitOfMeasure : {
                type : String
            }
        }],
        defaultAttributeRange : {
            type : Number,
            default : 0
        },
        attributeRanges : [{
            description : {
                type : String
            },
            minimum : {
                type : Number,
                default : 0
            },
            maximum : {
                type : Number,
                default : 0
            },
            increment : {
                type : Number,
                default : 0
            },
            unitOfMeasure : {
                type : String
            }
        }],
        formula : {
            type : String
        }
    }],
    rules : [{
        name : {
            type : String,
            required : true
        },
        description : {
            type : String
        },
        predicates : [{
            attributeKey : {
                type : String,
                required : true
            },
            attributeValues : [{
                value : {
                    type : String,
                    required : true
                },
                unitOfMeasure : {
                    type : String
                }
            }]
        }],
        results : [{
            attributeKey : {
                type : String,
                required : true
            },
            attributeValues : [{
                value : {
                    type : String,
                    required : true
                },
                unitOfMeasure : {
                    type : String
                }
            }],
            attributeRanges : [{
                minimum : {
                    type : Number,
                    required : true
                },
                maximum : {
                    type : Number,
                    default : 0
                },
                increment : {
                    type : Number,
                    default : 0
                },
                unitOfMeasure : {
                    type : String
                }
            }],
            formula : {
                type : String
            },
            operator : {
                type : String,
                enum : [ "Equals", "RangeContains", "Formula", "GreaterThan", "GreaterThanEqualTo", "LessThan", "LessThanEqualTo" ]
            },
            negate : {
                type : Boolean,
                default : false
            }
        }]
    }],
    dataSheets : [{
        name : {
            type : String,
            required : true
        },
        dataRows : [{
            // required : [true,"Data Rows required"],
            terms : [{
                // required : [true,"Terms are required"],
                attributeKey : {
                    type :String,
                    required : true
                },
                operator : {
                    type : String,
                    enum : [ "In","NotIn" ],
                    required : true
                },
                attributeValues : [{
                    value : {
                        type : String,
                        required : true
                    },
                    unitOfMeasure : {
                        type : String
                    }
                }],
                attributeRanges : [{
                    minimum : {
                        type : Number,
                        required : true
                    },
                    maximum : {
                        type : Number,
                        default : 0
                    },
                    increment : {
                        type : Number,
                        default : 0
                    },
                    unitOfMeasure : {
                        type : String
                    }
                }],
                formula : {
                    type : String
                }
            }]
        }]
    }]
})

module.exports = mongoose.model('Product-V1',productV1);