"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListUserTradesResponse {
    static getAttributeTypeMap() {
        return ListUserTradesResponse.attributeTypeMap;
    }
}
exports.ListUserTradesResponse = ListUserTradesResponse;
ListUserTradesResponse.discriminator = undefined;
ListUserTradesResponse.attributeTypeMap = [
    {
        "name": "trades",
        "baseName": "trades",
        "type": "Array<Trade>"
    }
];
