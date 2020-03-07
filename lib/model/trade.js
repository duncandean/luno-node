"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Trade {
    static getAttributeTypeMap() {
        return Trade.attributeTypeMap;
    }
}
exports.Trade = Trade;
Trade.discriminator = undefined;
Trade.attributeTypeMap = [
    {
        "name": "base",
        "baseName": "base",
        "type": "string"
    },
    {
        "name": "counter",
        "baseName": "counter",
        "type": "string"
    },
    {
        "name": "feeBase",
        "baseName": "fee_base",
        "type": "string"
    },
    {
        "name": "feeCounter",
        "baseName": "fee_counter",
        "type": "string"
    },
    {
        "name": "isBuy",
        "baseName": "is_buy",
        "type": "boolean"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "pair",
        "baseName": "pair",
        "type": "string"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string"
    },
    {
        "name": "sequence",
        "baseName": "sequence",
        "type": "number"
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "Trade.TypeEnum"
    },
    {
        "name": "volume",
        "baseName": "volume",
        "type": "string"
    }
];
(function (Trade) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["BID"] = 'BID'] = "BID";
        TypeEnum[TypeEnum["ASK"] = 'ASK'] = "ASK";
    })(TypeEnum = Trade.TypeEnum || (Trade.TypeEnum = {}));
})(Trade = exports.Trade || (exports.Trade = {}));
