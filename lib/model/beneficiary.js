"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Beneficiary {
    static getAttributeTypeMap() {
        return Beneficiary.attributeTypeMap;
    }
}
exports.Beneficiary = Beneficiary;
Beneficiary.discriminator = undefined;
Beneficiary.attributeTypeMap = [
    {
        "name": "bankAccountBranch",
        "baseName": "bank_account_branch",
        "type": "string"
    },
    {
        "name": "bankAccountNumber",
        "baseName": "bank_account_number",
        "type": "string"
    },
    {
        "name": "bankAccountType",
        "baseName": "bank_account_type",
        "type": "string"
    },
    {
        "name": "bankCountry",
        "baseName": "bank_country",
        "type": "string"
    },
    {
        "name": "bankName",
        "baseName": "bank_name",
        "type": "string"
    },
    {
        "name": "bankRecipient",
        "baseName": "bank_recipient",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    }
];
