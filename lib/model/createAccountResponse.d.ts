import { Transaction } from './transaction';
export declare class CreateAccountResponse {
    'currency'?: string;
    'id'?: string;
    'name'?: string;
    'pending'?: Array<Transaction>;
    'transactions'?: Array<Transaction>;
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
