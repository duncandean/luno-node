"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./accountBalance"));
__export(require("./accountInfo"));
__export(require("./addressMeta"));
__export(require("./beneficiary"));
__export(require("./cancelWithdrawalResponse"));
__export(require("./createAccountResponse"));
__export(require("./createFundingAddressResponse"));
__export(require("./createQuoteResponse"));
__export(require("./createWithdrawalResponse"));
__export(require("./cryptoDetails"));
__export(require("./detailFields"));
__export(require("./discardQuoteResponse"));
__export(require("./exerciseQuoteResponse"));
__export(require("./feeInfo"));
__export(require("./getBalancesResponse"));
__export(require("./getFeeInfoResponse"));
__export(require("./getFundingAddressResponse"));
__export(require("./getOrderBookResponse"));
__export(require("./getOrderResponse"));
__export(require("./getQuoteResponse"));
__export(require("./getTickerResponse"));
__export(require("./getTickersResponse"));
__export(require("./getWithdrawalResponse"));
__export(require("./listBeneficiariesResponse"));
__export(require("./listOrdersResponse"));
__export(require("./listPendingTransactionsResponse"));
__export(require("./listTradesResponse"));
__export(require("./listTransactionsResponse"));
__export(require("./listUserTradesResponse"));
__export(require("./listWithdrawalsResponse"));
__export(require("./lookupLightningResponse"));
__export(require("./order"));
__export(require("./orderBookEntry"));
__export(require("./orderBookResult"));
__export(require("./postLimitOrderResponse"));
__export(require("./postMarketOrderResponse"));
__export(require("./quote"));
__export(require("./receiveLightningResponse"));
__export(require("./sendLightningResponse"));
__export(require("./sendResponse"));
__export(require("./stopOrderResponse"));
__export(require("./ticker"));
__export(require("./tickerList"));
__export(require("./trade"));
__export(require("./transaction"));
__export(require("./updateAccountNameResponse"));
__export(require("./withdrawal"));
const accountBalance_1 = require("./accountBalance");
const accountInfo_1 = require("./accountInfo");
const addressMeta_1 = require("./addressMeta");
const beneficiary_1 = require("./beneficiary");
const cancelWithdrawalResponse_1 = require("./cancelWithdrawalResponse");
const createAccountResponse_1 = require("./createAccountResponse");
const createFundingAddressResponse_1 = require("./createFundingAddressResponse");
const createQuoteResponse_1 = require("./createQuoteResponse");
const createWithdrawalResponse_1 = require("./createWithdrawalResponse");
const cryptoDetails_1 = require("./cryptoDetails");
const detailFields_1 = require("./detailFields");
const discardQuoteResponse_1 = require("./discardQuoteResponse");
const exerciseQuoteResponse_1 = require("./exerciseQuoteResponse");
const feeInfo_1 = require("./feeInfo");
const getBalancesResponse_1 = require("./getBalancesResponse");
const getFeeInfoResponse_1 = require("./getFeeInfoResponse");
const getFundingAddressResponse_1 = require("./getFundingAddressResponse");
const getOrderBookResponse_1 = require("./getOrderBookResponse");
const getOrderResponse_1 = require("./getOrderResponse");
const getQuoteResponse_1 = require("./getQuoteResponse");
const getTickerResponse_1 = require("./getTickerResponse");
const getTickersResponse_1 = require("./getTickersResponse");
const getWithdrawalResponse_1 = require("./getWithdrawalResponse");
const listBeneficiariesResponse_1 = require("./listBeneficiariesResponse");
const listOrdersResponse_1 = require("./listOrdersResponse");
const listPendingTransactionsResponse_1 = require("./listPendingTransactionsResponse");
const listTradesResponse_1 = require("./listTradesResponse");
const listTransactionsResponse_1 = require("./listTransactionsResponse");
const listUserTradesResponse_1 = require("./listUserTradesResponse");
const listWithdrawalsResponse_1 = require("./listWithdrawalsResponse");
const lookupLightningResponse_1 = require("./lookupLightningResponse");
const order_1 = require("./order");
const orderBookEntry_1 = require("./orderBookEntry");
const orderBookResult_1 = require("./orderBookResult");
const postLimitOrderResponse_1 = require("./postLimitOrderResponse");
const postMarketOrderResponse_1 = require("./postMarketOrderResponse");
const quote_1 = require("./quote");
const receiveLightningResponse_1 = require("./receiveLightningResponse");
const sendLightningResponse_1 = require("./sendLightningResponse");
const sendResponse_1 = require("./sendResponse");
const stopOrderResponse_1 = require("./stopOrderResponse");
const ticker_1 = require("./ticker");
const tickerList_1 = require("./tickerList");
const trade_1 = require("./trade");
const transaction_1 = require("./transaction");
const updateAccountNameResponse_1 = require("./updateAccountNameResponse");
const withdrawal_1 = require("./withdrawal");
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "GetOrderResponse.StateEnum": getOrderResponse_1.GetOrderResponse.StateEnum,
    "GetOrderResponse.TypeEnum": getOrderResponse_1.GetOrderResponse.TypeEnum,
    "GetTickerResponse.StatusEnum": getTickerResponse_1.GetTickerResponse.StatusEnum,
    "Order.StateEnum": order_1.Order.StateEnum,
    "Order.TypeEnum": order_1.Order.TypeEnum,
    "Ticker.StatusEnum": ticker_1.Ticker.StatusEnum,
    "Trade.TypeEnum": trade_1.Trade.TypeEnum,
};
let typeMap = {
    "AccountBalance": accountBalance_1.AccountBalance,
    "AccountInfo": accountInfo_1.AccountInfo,
    "AddressMeta": addressMeta_1.AddressMeta,
    "Beneficiary": beneficiary_1.Beneficiary,
    "CancelWithdrawalResponse": cancelWithdrawalResponse_1.CancelWithdrawalResponse,
    "CreateAccountResponse": createAccountResponse_1.CreateAccountResponse,
    "CreateFundingAddressResponse": createFundingAddressResponse_1.CreateFundingAddressResponse,
    "CreateQuoteResponse": createQuoteResponse_1.CreateQuoteResponse,
    "CreateWithdrawalResponse": createWithdrawalResponse_1.CreateWithdrawalResponse,
    "CryptoDetails": cryptoDetails_1.CryptoDetails,
    "DetailFields": detailFields_1.DetailFields,
    "DiscardQuoteResponse": discardQuoteResponse_1.DiscardQuoteResponse,
    "ExerciseQuoteResponse": exerciseQuoteResponse_1.ExerciseQuoteResponse,
    "FeeInfo": feeInfo_1.FeeInfo,
    "GetBalancesResponse": getBalancesResponse_1.GetBalancesResponse,
    "GetFeeInfoResponse": getFeeInfoResponse_1.GetFeeInfoResponse,
    "GetFundingAddressResponse": getFundingAddressResponse_1.GetFundingAddressResponse,
    "GetOrderBookResponse": getOrderBookResponse_1.GetOrderBookResponse,
    "GetOrderResponse": getOrderResponse_1.GetOrderResponse,
    "GetQuoteResponse": getQuoteResponse_1.GetQuoteResponse,
    "GetTickerResponse": getTickerResponse_1.GetTickerResponse,
    "GetTickersResponse": getTickersResponse_1.GetTickersResponse,
    "GetWithdrawalResponse": getWithdrawalResponse_1.GetWithdrawalResponse,
    "ListBeneficiariesResponse": listBeneficiariesResponse_1.ListBeneficiariesResponse,
    "ListOrdersResponse": listOrdersResponse_1.ListOrdersResponse,
    "ListPendingTransactionsResponse": listPendingTransactionsResponse_1.ListPendingTransactionsResponse,
    "ListTradesResponse": listTradesResponse_1.ListTradesResponse,
    "ListTransactionsResponse": listTransactionsResponse_1.ListTransactionsResponse,
    "ListUserTradesResponse": listUserTradesResponse_1.ListUserTradesResponse,
    "ListWithdrawalsResponse": listWithdrawalsResponse_1.ListWithdrawalsResponse,
    "LookupLightningResponse": lookupLightningResponse_1.LookupLightningResponse,
    "Order": order_1.Order,
    "OrderBookEntry": orderBookEntry_1.OrderBookEntry,
    "OrderBookResult": orderBookResult_1.OrderBookResult,
    "PostLimitOrderResponse": postLimitOrderResponse_1.PostLimitOrderResponse,
    "PostMarketOrderResponse": postMarketOrderResponse_1.PostMarketOrderResponse,
    "Quote": quote_1.Quote,
    "ReceiveLightningResponse": receiveLightningResponse_1.ReceiveLightningResponse,
    "SendLightningResponse": sendLightningResponse_1.SendLightningResponse,
    "SendResponse": sendResponse_1.SendResponse,
    "StopOrderResponse": stopOrderResponse_1.StopOrderResponse,
    "Ticker": ticker_1.Ticker,
    "TickerList": tickerList_1.TickerList,
    "Trade": trade_1.Trade,
    "Transaction": transaction_1.Transaction,
    "UpdateAccountNameResponse": updateAccountNameResponse_1.UpdateAccountNameResponse,
    "Withdrawal": withdrawal_1.Withdrawal,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
    }
}
exports.VoidAuth = VoidAuth;
