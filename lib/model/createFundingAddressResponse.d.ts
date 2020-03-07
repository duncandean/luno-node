import { AddressMeta } from './addressMeta';
export declare class CreateFundingAddressResponse {
    'accountId'?: string;
    'address'?: string;
    'addressMeta'?: Array<AddressMeta>;
    'asset'?: string;
    'assignedAt'?: string;
    'name'?: string;
    'qrCodeUri'?: string;
    'receiveFee'?: string;
    'totalReceived'?: string;
    'totalUnconfirmed'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
