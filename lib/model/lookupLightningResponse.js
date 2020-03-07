"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LookupLightningResponse {
    static getAttributeTypeMap() {
        return LookupLightningResponse.attributeTypeMap;
    }
}
exports.LookupLightningResponse = LookupLightningResponse;
LookupLightningResponse.discriminator = undefined;
LookupLightningResponse.attributeTypeMap = [
    {
        "name": "paymentRequest",
        "baseName": "payment_request",
        "type": "string"
    },
    {
        "name": "settledAmount",
        "baseName": "settled_amount",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
