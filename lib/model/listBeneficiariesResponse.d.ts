import { Beneficiary } from './beneficiary';
export declare class ListBeneficiariesResponse {
    'beneficiaries'?: Array<Beneficiary>;
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
