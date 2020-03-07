export declare class AccountBalance {
    'accountId'?: string;
    'asset'?: string;
    'balance'?: string;
    'name'?: string;
    'reserved'?: string;
    'unconfirmed'?: string;
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
