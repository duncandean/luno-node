"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetTickerResponse {
    static getAttributeTypeMap() {
        return GetTickerResponse.attributeTypeMap;
    }
}
exports.GetTickerResponse = GetTickerResponse;
GetTickerResponse.discriminator = undefined;
GetTickerResponse.attributeTypeMap = [
    {
        "name": "ask",
        "baseName": "ask",
        "type": "string"
    },
    {
        "name": "bid",
        "baseName": "bid",
        "type": "string"
    },
    {
        "name": "lastTrade",
        "baseName": "last_trade",
        "type": "string"
    },
    {
        "name": "pair",
        "baseName": "pair",
        "type": "string"
    },
    {
        "name": "rolling24HourVolume",
        "baseName": "rolling_24_hour_volume",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetTickerResponse.StatusEnum"
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "string"
    }
];
(function (GetTickerResponse) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        StatusEnum[StatusEnum["POSTONLY"] = 'POSTONLY'] = "POSTONLY";
        StatusEnum[StatusEnum["DISABLED"] = 'DISABLED'] = "DISABLED";
    })(StatusEnum = GetTickerResponse.StatusEnum || (GetTickerResponse.StatusEnum = {}));
})(GetTickerResponse = exports.GetTickerResponse || (exports.GetTickerResponse = {}));
