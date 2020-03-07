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

export class HttpError extends Error {
    constructor (public response: http.ClientResponse, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [AccountsApi, BeneficiariesApi, LightningApi, MarketApi, OrdersApi, QuotesApi, ReceiveApi, SendApi, WithdrawalsApi];
