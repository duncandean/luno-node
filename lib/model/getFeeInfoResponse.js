"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetFeeInfoResponse {
    static getAttributeTypeMap() {
        return GetFeeInfoResponse.attributeTypeMap;
    }
}
exports.GetFeeInfoResponse = GetFeeInfoResponse;
GetFeeInfoResponse.discriminator = undefined;
GetFeeInfoResponse.attributeTypeMap = [
    {
        "name": "makerFee",
        "baseName": "maker_fee",
        "type": "string"
    },
    {
        "name": "takerFee",
        "baseName": "taker_fee",
        "type": "string"
    },
    {
        "name": "thirtyDayVolume",
        "baseName": "thirty_day_volume",
        "type": "string"
    }
];
