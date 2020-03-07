"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendLightningResponse {
    static getAttributeTypeMap() {
        return SendLightningResponse.attributeTypeMap;
    }
}
exports.SendLightningResponse = SendLightningResponse;
SendLightningResponse.discriminator = undefined;
SendLightningResponse.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "withdrawalId",
        "baseName": "withdrawal_id",
        "type": "string"
    }
];
