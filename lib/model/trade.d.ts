export declare class Trade {
    'base'?: string;
    'counter'?: string;
    'feeBase'?: string;
    'feeCounter'?: string;
    'isBuy'?: boolean;
    'orderId'?: string;
    'pair'?: string;
    'price'?: string;
    'sequence'?: number;
    'timestamp'?: string;
    'type'?: Trade.TypeEnum;
    'volume'?: string;
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
export declare namespace Trade {
    enum TypeEnum {
        BID,
        ASK
    }
}
