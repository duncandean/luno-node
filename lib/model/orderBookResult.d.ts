import { OrderBookEntry } from './orderBookEntry';
export declare class OrderBookResult {
    'asks'?: Array<OrderBookEntry>;
    'bids'?: Array<OrderBookEntry>;
    'timestamp'?: number;
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
