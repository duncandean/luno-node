import { DetailFields } from './detailFields';
export declare class Transaction {
    'accountId'?: string;
    'available'?: string;
    'availableDelta'?: string;
    'balance'?: string;
    'balanceDelta'?: string;
    'currency'?: string;
    'description'?: string;
    'detailFields'?: DetailFields;
    'details'?: {
        [key: string]: string;
    };
    'rowIndex'?: number;
    'timestamp'?: string;
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
