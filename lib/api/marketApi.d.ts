import http = require('http');
import { GetOrderBookResponse } from '../model/getOrderBookResponse';
import { GetTickerResponse } from '../model/getTickerResponse';
import { GetTickersResponse } from '../model/getTickersResponse';
import { ListTradesResponse } from '../model/listTradesResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum MarketApiApiKeys {
}
export declare class MarketApi {
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
    setApiKey(key: MarketApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    getOrderBook(pair: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: GetOrderBookResponse;
    }>;
    getOrderBookFull(pair: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: GetOrderBookResponse;
    }>;
    getTicker(pair: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: GetTickerResponse;
    }>;
    getTickers(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: GetTickersResponse;
    }>;
    listTrades(pair: string, since?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ListTradesResponse;
    }>;
}
