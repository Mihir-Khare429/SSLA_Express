type quantityRangeArray = {
    minimum : number,
    maximum : number,
    increment : number
}

type quantityValue = {
    type : string,
    range : Array<quantityRangeArray>
}

type optionValueArray = {
    type : string,
    value : string
}

type optionValue = {
    name : string,
    type : string,
    value : Array<optionValueArray>
}

export type V1Product = {
    whitelist : Array<any>,
    rules : Array<any>,
    dataSheets : Array<any>
}

export type V2Product = {
    selfLink : string,
    accountId : string,
    name : string,
    quantity : Array<quantityValue>,
    description : string,
    options : Array<optionValue>
}
