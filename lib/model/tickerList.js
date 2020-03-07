"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TickerList {
    static getAttributeTypeMap() {
        return TickerList.attributeTypeMap;
    }
}
exports.TickerList = TickerList;
TickerList.discriminator = undefined;
TickerList.attributeTypeMap = [
    {
        "name": "tickers",
        "baseName": "tickers",
        "type": "Array<Ticker>"
    }
];
