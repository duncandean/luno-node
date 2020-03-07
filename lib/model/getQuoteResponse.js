"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetQuoteResponse {
    static getAttributeTypeMap() {
        return GetQuoteResponse.attributeTypeMap;
    }
}
exports.GetQuoteResponse = GetQuoteResponse;
GetQuoteResponse.discriminator = undefined;
GetQuoteResponse.attributeTypeMap = [
    {
        "name": "baseAmount",
        "baseName": "base_amount",
        "type": "string"
    },
    {
        "name": "counterAmount",
        "baseName": "counter_amount",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "discarded",
        "baseName": "discarded",
        "type": "boolean"
    },
    {
        "name": "exercised",
        "baseName": "exercised",
        "type": "boolean"
    },
    {
        "name": "expiresAt",
        "baseName": "expires_at",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "pair",
        "baseName": "pair",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
