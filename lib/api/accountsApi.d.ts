import http = require('http');
import { CreateAccountResponse } from '../model/createAccountResponse';
import { GetBalancesResponse } from '../model/getBalancesResponse';
import { ListPendingTransactionsResponse } from '../model/listPendingTransactionsResponse';
import { ListTransactionsResponse } from '../model/listTransactionsResponse';
import { UpdateAccountNameResponse } from '../model/updateAccountNameResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AccountsApiApiKeys {
}
export declare class AccountsApi {
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
    setApiKey(key: AccountsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createAccount(currency: string, name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: CreateAccountResponse;
    }>;
    getBalances(assets?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: GetBalancesResponse;
    }>;
    listPendingTransactions(id: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ListPendingTransactionsResponse;
    }>;
    listTransactions(id: number, minRow: number, maxRow: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ListTransactionsResponse;
    }>;
    updateAccountName(id: number, name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UpdateAccountNameResponse;
    }>;
}
