"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListBeneficiariesResponse {
    static getAttributeTypeMap() {
        return ListBeneficiariesResponse.attributeTypeMap;
    }
}
exports.ListBeneficiariesResponse = ListBeneficiariesResponse;
ListBeneficiariesResponse.discriminator = undefined;
ListBeneficiariesResponse.attributeTypeMap = [
    {
        "name": "beneficiaries",
        "baseName": "beneficiaries",
        "type": "Array<Beneficiary>"
    }
];
