export declare class FeeInfo {
    'makerFee'?: string;
    'takerFee'?: string;
    'thirtyDayVolume'?: string;
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
