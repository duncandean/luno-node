import http = require('http');
import { CreateFundingAddressResponse } from '../model/createFundingAddressResponse';
import { GetFundingAddressResponse } from '../model/getFundingAddressResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ReceiveApiApiKeys {
}
export declare class ReceiveApi {
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
    setApiKey(key: ReceiveApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createFundingAddress(asset: string, name?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: CreateFundingAddressResponse;
    }>;
    getFundingAddress(asset: string, address?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: GetFundingAddressResponse;
    }>;
}
