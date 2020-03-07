export declare class CreateQuoteResponse {
    'baseAmount'?: string;
    'counterAmount'?: string;
    'createdAt'?: string;
    'discarded'?: boolean;
    'exercised'?: boolean;
    'expiresAt'?: string;
    'id'?: string;
    'pair'?: string;
    'type'?: string;
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
