"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendResponse {
    static getAttributeTypeMap() {
        return SendResponse.attributeTypeMap;
    }
}
exports.SendResponse = SendResponse;
SendResponse.discriminator = undefined;
SendResponse.attributeTypeMap = [
    {
        "name": "success",
        "baseName": "success",
        "type": "boolean"
    },
    {
        "name": "withdrawalId",
        "baseName": "withdrawal_id",
        "type": "string"
    }
];
