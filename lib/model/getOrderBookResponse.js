"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetOrderBookResponse {
    static getAttributeTypeMap() {
        return GetOrderBookResponse.attributeTypeMap;
    }
}
exports.GetOrderBookResponse = GetOrderBookResponse;
GetOrderBookResponse.discriminator = undefined;
GetOrderBookResponse.attributeTypeMap = [
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
