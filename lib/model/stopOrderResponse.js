"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StopOrderResponse {
    static getAttributeTypeMap() {
        return StopOrderResponse.attributeTypeMap;
    }
}
exports.StopOrderResponse = StopOrderResponse;
StopOrderResponse.discriminator = undefined;
StopOrderResponse.attributeTypeMap = [
    {
        "name": "success",
        "baseName": "success",
        "type": "boolean"
    }
];
