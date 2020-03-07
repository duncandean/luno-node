export declare class Beneficiary {
    'bankAccountBranch'?: string;
    'bankAccountNumber'?: string;
    'bankAccountType'?: string;
    'bankCountry'?: string;
    'bankName'?: string;
    'bankRecipient'?: string;
    'createdAt'?: string;
    'id'?: string;
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
