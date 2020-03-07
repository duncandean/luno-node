"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExerciseQuoteResponse {
    static getAttributeTypeMap() {
        return ExerciseQuoteResponse.attributeTypeMap;
    }
}
exports.ExerciseQuoteResponse = ExerciseQuoteResponse;
ExerciseQuoteResponse.discriminator = undefined;
ExerciseQuoteResponse.attributeTypeMap = [
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
