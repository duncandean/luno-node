/// <reference types="node" />
export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './beneficiariesApi';
import { BeneficiariesApi } from './beneficiariesApi';
export * from './lightningApi';
import { LightningApi } from './lightningApi';
export * from './marketApi';
import { MarketApi } from './marketApi';
export * from './ordersApi';
import { OrdersApi } from './ordersApi';
export * from './quotesApi';
import { QuotesApi } from './quotesApi';
export * from './receiveApi';
import { ReceiveApi } from './receiveApi';
export * from './sendApi';
import { SendApi } from './sendApi';
export * from './withdrawalsApi';
import { WithdrawalsApi } from './withdrawalsApi';
import * as fs from 'fs';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.ClientResponse;
    body: any;
    statusCode?: number;
    constructor(response: http.ClientResponse, body: any, statusCode?: number);
}
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare const APIS: (typeof BeneficiariesApi | typeof LightningApi | typeof MarketApi | typeof OrdersApi | typeof QuotesApi | typeof ReceiveApi | typeof SendApi | typeof WithdrawalsApi | typeof AccountsApi)[];
