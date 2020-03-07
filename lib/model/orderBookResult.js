"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderBookResult {
    static getAttributeTypeMap() {
        return OrderBookResult.attributeTypeMap;
    }
}
exports.OrderBookResult = OrderBookResult;
OrderBookResult.discriminator = undefined;
OrderBookResult.attributeTypeMap = [
    {
        "name": "asks",
        "baseName": "asks",
        "type": "Array<OrderBookEntry>"
    },
    {
        "name": "bids",
        "baseName": "bids",
        "type": "Array<OrderBookEntry>"
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "number"
    }
];
