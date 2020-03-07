import http = require('http');
import { GetFeeInfoResponse } from '../model/getFeeInfoResponse';
import { GetOrderResponse } from '../model/getOrderResponse';
import { ListOrdersResponse } from '../model/listOrdersResponse';
import { ListUserTradesResponse } from '../model/listUserTradesResponse';
import { PostLimitOrderResponse } from '../model/postLimitOrderResponse';
import { PostMarketOrderResponse } from '../model/postMarketOrderResponse';
import { StopOrderResponse } from '../model/stopOrderResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum OrdersApiApiKeys {
}
export declare class OrdersApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: OrdersApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    getFeeInfo(pair: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: GetFeeInfoResponse;
    }>;
    getOrder(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: GetOrderResponse;
    }>;
    listOrders(state?: 'PENDING' | 'COMPLETE', pair?: string, createdBefore?: number, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ListOrdersResponse;
    }>;
    listUserTrades(pair: string, since?: string, before?: string, afterSeq?: number, beforeSeq?: number, sortDesc?: boolean, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ListUserTradesResponse;
    }>;
    postLimitOrder(pair: string, type: 'BID' | 'ASK', volume: string, price: string, postOnly?: boolean, baseAccountId?: number, counterAccountId?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: PostLimitOrderResponse;
    }>;
    postMarketOrder(pair: string, type: 'BUY' | 'SELL', counterVolume?: string, baseVolume?: string, baseAccountId?: number, counterAccountId?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: PostMarketOrderResponse;
    }>;
    stopOrder(orderId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: StopOrderResponse;
    }>;
}
