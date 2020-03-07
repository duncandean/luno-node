import http = require('http');
import { CancelWithdrawalResponse } from '../model/cancelWithdrawalResponse';
import { CreateWithdrawalResponse } from '../model/createWithdrawalResponse';
import { GetWithdrawalResponse } from '../model/getWithdrawalResponse';
import { ListWithdrawalsResponse } from '../model/listWithdrawalsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum WithdrawalsApiApiKeys {
}
export declare class WithdrawalsApi {
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
    setApiKey(key: WithdrawalsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    cancelWithdrawal(id: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: CancelWithdrawalResponse;
    }>;
    createWithdrawal(type: string, amount: string, beneficiaryId?: number, reference?: string, externalId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: CreateWithdrawalResponse;
    }>;
    getWithdrawal(id: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: GetWithdrawalResponse;
    }>;
    listWithdrawals(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ListWithdrawalsResponse;
    }>;
}
