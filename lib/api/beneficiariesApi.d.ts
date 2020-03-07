import http = require('http');
import { ListBeneficiariesResponse } from '../model/listBeneficiariesResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum BeneficiariesApiApiKeys {
}
export declare class BeneficiariesApi {
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
    setApiKey(key: BeneficiariesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    listBeneficiariesResponse(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ListBeneficiariesResponse;
    }>;
}
