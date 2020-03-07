export declare class GetTickerResponse {
    'ask'?: string;
    'bid'?: string;
    'lastTrade'?: string;
    'pair'?: string;
    'rolling24HourVolume'?: string;
    'status'?: GetTickerResponse.StatusEnum;
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
export declare namespace GetTickerResponse {
    enum StatusEnum {
        ACTIVE,
        POSTONLY,
        DISABLED
    }
}
