"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReceiveLightningResponse {
    static getAttributeTypeMap() {
        return ReceiveLightningResponse.attributeTypeMap;
    }
}
exports.ReceiveLightningResponse = ReceiveLightningResponse;
ReceiveLightningResponse.discriminator = undefined;
ReceiveLightningResponse.attributeTypeMap = [
    {
        "name": "invoiceId",
        "baseName": "invoice_id",
        "type": "string"
    },
    {
        "name": "paymentRequest",
        "baseName": "payment_request",
        "type": "string"
    }
];
