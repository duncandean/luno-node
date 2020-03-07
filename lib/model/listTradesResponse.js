"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListTradesResponse {
    static getAttributeTypeMap() {
        return ListTradesResponse.attributeTypeMap;
    }
}
exports.ListTradesResponse = ListTradesResponse;
ListTradesResponse.discriminator = undefined;
ListTradesResponse.attributeTypeMap = [
    {
        "name": "trades",
        "baseName": "trades",
        "type": "Array<Trade>"
    }
];
