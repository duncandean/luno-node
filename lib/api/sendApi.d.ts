import http = require('http');
import { SendResponse } from '../model/sendResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum SendApiApiKeys {
}
export declare class SendApi {
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
    setApiKey(key: SendApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    send(amount: string, currency: string, address: string, description?: string, message?: string, externalId?: string, hasDestinationTag?: boolean, destinationTag?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: SendResponse;
    }>;
}
