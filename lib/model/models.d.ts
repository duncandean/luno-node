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
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export declare type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
