import http = require('http');
import { CreateQuoteResponse } from '../model/createQuoteResponse';
import { DiscardQuoteResponse } from '../model/discardQuoteResponse';
import { ExerciseQuoteResponse } from '../model/exerciseQuoteResponse';
import { GetQuoteResponse } from '../model/getQuoteResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum QuotesApiApiKeys {
}
export declare class QuotesApi {
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
    setApiKey(key: QuotesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createQuote(type: string, baseAmount: string, pair: string, baseAccountId?: number, counterAccountId?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: CreateQuoteResponse;
    }>;
    discardQuote(id: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: DiscardQuoteResponse;
    }>;
    exerciseQuote(id: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ExerciseQuoteResponse;
    }>;
    getQuote(id: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: GetQuoteResponse;
    }>;
}
