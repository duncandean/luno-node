"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FeeInfo {
    static getAttributeTypeMap() {
        return FeeInfo.attributeTypeMap;
    }
}
exports.FeeInfo = FeeInfo;
FeeInfo.discriminator = undefined;
FeeInfo.attributeTypeMap = [
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
