export declare class Ticker {
    'ask'?: string;
    'bid'?: string;
    'lastTrade'?: string;
    'pair'?: string;
    'rolling24HourVolume'?: string;
    'status'?: Ticker.StatusEnum;
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
export declare namespace Ticker {
    enum StatusEnum {
        ACTIVE,
        POSTONLY,
        DISABLED
    }
}
