import http = require('http');
import { LookupLightningResponse } from '../model/lookupLightningResponse';
import { ReceiveLightningResponse } from '../model/receiveLightningResponse';
import { SendLightningResponse } from '../model/sendLightningResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum LightningApiApiKeys {
}
export declare class LightningApi {
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
    setApiKey(key: LightningApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    getLightningReceive(id: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: LookupLightningResponse;
    }>;
    receiveLightning(amount: string, currency?: string, expiresAt?: string, description?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ReceiveLightningResponse;
    }>;
    sendLightning(paymentRequest: string, currency?: string, description?: string, externalId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: SendLightningResponse;
    }>;
}
