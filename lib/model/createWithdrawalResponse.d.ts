export declare class CreateWithdrawalResponse {
    'amount'?: string;
    'createdAt'?: string;
    'currency'?: string;
    'externalId'?: string;
    'fee'?: string;
    'id'?: string;
    'status'?: string;
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
