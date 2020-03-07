export * from './accountBalance';
export * from './accountInfo';
export * from './addressMeta';
export * from './beneficiary';
export * from './cancelWithdrawalResponse';
export * from './createAccountResponse';
export * from './createFundingAddressResponse';
export * from './createQuoteResponse';
export * from './createWithdrawalResponse';
export * from './cryptoDetails';
export * from './detailFields';
export * from './discardQuoteResponse';
export * from './exerciseQuoteResponse';
export * from './feeInfo';
export * from './getBalancesResponse';
export * from './getFeeInfoResponse';
export * from './getFundingAddressResponse';
export * from './getOrderBookResponse';
export * from './getOrderResponse';
export * from './getQuoteResponse';
export * from './getTickerResponse';
export * from './getTickersResponse';
export * from './getWithdrawalResponse';
export * from './listBeneficiariesResponse';
export * from './listOrdersResponse';
export * from './listPendingTransactionsResponse';
export * from './listTradesResponse';
export * from './listTransactionsResponse';
export * from './listUserTradesResponse';
export * from './listWithdrawalsResponse';
export * from './lookupLightningResponse';
export * from './order';
export * from './orderBookEntry';
export * from './orderBookResult';
export * from './postLimitOrderResponse';
export * from './postMarketOrderResponse';
export * from './quote';
export * from './receiveLightningResponse';
export * from './sendLightningResponse';
export * from './sendResponse';
export * from './stopOrderResponse';
export * from './ticker';
export * from './tickerList';
export * from './trade';
export * from './transaction';
export * from './updateAccountNameResponse';
export * from './withdrawal';

import localVarRequest = require('request');

import { AccountBalance } from './accountBalance';
import { AccountInfo } from './accountInfo';
import { AddressMeta } from './addressMeta';
import { Beneficiary } from './beneficiary';
import { CancelWithdrawalResponse } from './cancelWithdrawalResponse';
import { CreateAccountResponse } from './createAccountResponse';
import { CreateFundingAddressResponse } from './createFundingAddressResponse';
import { CreateQuoteResponse } from './createQuoteResponse';
import { CreateWithdrawalResponse } from './createWithdrawalResponse';
import { CryptoDetails } from './cryptoDetails';
import { DetailFields } from './detailFields';
import { DiscardQuoteResponse } from './discardQuoteResponse';
import { ExerciseQuoteResponse } from './exerciseQuoteResponse';
import { FeeInfo } from './feeInfo';
import { GetBalancesResponse } from './getBalancesResponse';
import { GetFeeInfoResponse } from './getFeeInfoResponse';
import { GetFundingAddressResponse } from './getFundingAddressResponse';
import { GetOrderBookResponse } from './getOrderBookResponse';
import { GetOrderResponse } from './getOrderResponse';
import { GetQuoteResponse } from './getQuoteResponse';
import { GetTickerResponse } from './getTickerResponse';
import { GetTickersResponse } from './getTickersResponse';
import { GetWithdrawalResponse } from './getWithdrawalResponse';
import { ListBeneficiariesResponse } from './listBeneficiariesResponse';
import { ListOrdersResponse } from './listOrdersResponse';
import { ListPendingTransactionsResponse } from './listPendingTransactionsResponse';
import { ListTradesResponse } from './listTradesResponse';
import { ListTransactionsResponse } from './listTransactionsResponse';
import { ListUserTradesResponse } from './listUserTradesResponse';
import { ListWithdrawalsResponse } from './listWithdrawalsResponse';
import { LookupLightningResponse } from './lookupLightningResponse';
import { Order } from './order';
import { OrderBookEntry } from './orderBookEntry';
import { OrderBookResult } from './orderBookResult';
import { PostLimitOrderResponse } from './postLimitOrderResponse';
import { PostMarketOrderResponse } from './postMarketOrderResponse';
import { Quote } from './quote';
import { ReceiveLightningResponse } from './receiveLightningResponse';
import { SendLightningResponse } from './sendLightningResponse';
import { SendResponse } from './sendResponse';
import { StopOrderResponse } from './stopOrderResponse';
import { Ticker } from './ticker';
import { TickerList } from './tickerList';
import { Trade } from './trade';
import { Transaction } from './transaction';
import { UpdateAccountNameResponse } from './updateAccountNameResponse';
import { Withdrawal } from './withdrawal';

/* tslint:disable:no-unused-variable */
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

let enumsMap: {[index: string]: any} = {
        "GetOrderResponse.StateEnum": GetOrderResponse.StateEnum,
        "GetOrderResponse.TypeEnum": GetOrderResponse.TypeEnum,
        "GetTickerResponse.StatusEnum": GetTickerResponse.StatusEnum,
        "Order.StateEnum": Order.StateEnum,
        "Order.TypeEnum": Order.TypeEnum,
        "Ticker.StatusEnum": Ticker.StatusEnum,
        "Trade.TypeEnum": Trade.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountBalance": AccountBalance,
    "AccountInfo": AccountInfo,
    "AddressMeta": AddressMeta,
    "Beneficiary": Beneficiary,
    "CancelWithdrawalResponse": CancelWithdrawalResponse,
    "CreateAccountResponse": CreateAccountResponse,
    "CreateFundingAddressResponse": CreateFundingAddressResponse,
    "CreateQuoteResponse": CreateQuoteResponse,
    "CreateWithdrawalResponse": CreateWithdrawalResponse,
    "CryptoDetails": CryptoDetails,
    "DetailFields": DetailFields,
    "DiscardQuoteResponse": DiscardQuoteResponse,
    "ExerciseQuoteResponse": ExerciseQuoteResponse,
    "FeeInfo": FeeInfo,
    "GetBalancesResponse": GetBalancesResponse,
    "GetFeeInfoResponse": GetFeeInfoResponse,
    "GetFundingAddressResponse": GetFundingAddressResponse,
    "GetOrderBookResponse": GetOrderBookResponse,
    "GetOrderResponse": GetOrderResponse,
    "GetQuoteResponse": GetQuoteResponse,
    "GetTickerResponse": GetTickerResponse,
    "GetTickersResponse": GetTickersResponse,
    "GetWithdrawalResponse": GetWithdrawalResponse,
    "ListBeneficiariesResponse": ListBeneficiariesResponse,
    "ListOrdersResponse": ListOrdersResponse,
    "ListPendingTransactionsResponse": ListPendingTransactionsResponse,
    "ListTradesResponse": ListTradesResponse,
    "ListTransactionsResponse": ListTransactionsResponse,
    "ListUserTradesResponse": ListUserTradesResponse,
    "ListWithdrawalsResponse": ListWithdrawalsResponse,
    "LookupLightningResponse": LookupLightningResponse,
    "Order": Order,
    "OrderBookEntry": OrderBookEntry,
    "OrderBookResult": OrderBookResult,
    "PostLimitOrderResponse": PostLimitOrderResponse,
    "PostMarketOrderResponse": PostMarketOrderResponse,
    "Quote": Quote,
    "ReceiveLightningResponse": ReceiveLightningResponse,
    "SendLightningResponse": SendLightningResponse,
    "SendResponse": SendResponse,
    "StopOrderResponse": StopOrderResponse,
    "Ticker": Ticker,
    "TickerList": TickerList,
    "Trade": Trade,
    "Transaction": Transaction,
    "UpdateAccountNameResponse": UpdateAccountNameResponse,
    "Withdrawal": Withdrawal,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
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

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
