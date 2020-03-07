"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CancelWithdrawalResponse {
    static getAttributeTypeMap() {
        return CancelWithdrawalResponse.attributeTypeMap;
    }
}
exports.CancelWithdrawalResponse = CancelWithdrawalResponse;
CancelWithdrawalResponse.discriminator = undefined;
CancelWithdrawalResponse.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "externalId",
        "baseName": "external_id",
        "type": "string"
    },
    {
        "name": "fee",
        "baseName": "fee",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
