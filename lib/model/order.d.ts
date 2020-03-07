export declare class Order {
    'base'?: string;
    'completedTimestamp'?: string;
    'counter'?: string;
    'creationTimestamp'?: string;
    'expirationTimestamp'?: string;
    'feeBase'?: string;
    'feeCounter'?: string;
    'limitPrice'?: string;
    'limitVolume'?: string;
    'orderId'?: string;
    'pair'?: string;
    'state'?: Order.StateEnum;
    'type'?: Order.TypeEnum;
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
export declare namespace Order {
    enum StateEnum {
        PENDING,
        COMPLETE
    }
    enum TypeEnum {
        BID,
        ASK
    }
}
