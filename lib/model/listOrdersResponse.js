"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListOrdersResponse {
    static getAttributeTypeMap() {
        return ListOrdersResponse.attributeTypeMap;
    }
}
exports.ListOrdersResponse = ListOrdersResponse;
ListOrdersResponse.discriminator = undefined;
ListOrdersResponse.attributeTypeMap = [
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<Order>"
    }
];
