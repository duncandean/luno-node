"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ticker {
    static getAttributeTypeMap() {
        return Ticker.attributeTypeMap;
    }
}
exports.Ticker = Ticker;
Ticker.discriminator = undefined;
Ticker.attributeTypeMap = [
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
        "type": "Ticker.StatusEnum"
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "string"
    }
];
(function (Ticker) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        StatusEnum[StatusEnum["POSTONLY"] = 'POSTONLY'] = "POSTONLY";
        StatusEnum[StatusEnum["DISABLED"] = 'DISABLED'] = "DISABLED";
    })(StatusEnum = Ticker.StatusEnum || (Ticker.StatusEnum = {}));
})(Ticker = exports.Ticker || (exports.Ticker = {}));
