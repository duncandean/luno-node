"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderBookEntry {
    static getAttributeTypeMap() {
        return OrderBookEntry.attributeTypeMap;
    }
}
exports.OrderBookEntry = OrderBookEntry;
OrderBookEntry.discriminator = undefined;
OrderBookEntry.attributeTypeMap = [
    {
        "name": "price",
        "baseName": "price",
        "type": "string"
    },
    {
        "name": "volume",
        "baseName": "volume",
        "type": "string"
    }
];
