"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetTickersResponse {
    static getAttributeTypeMap() {
        return GetTickersResponse.attributeTypeMap;
    }
}
exports.GetTickersResponse = GetTickersResponse;
GetTickersResponse.discriminator = undefined;
GetTickersResponse.attributeTypeMap = [
    {
        "name": "tickers",
        "baseName": "tickers",
        "type": "Array<Ticker>"
    }
];
