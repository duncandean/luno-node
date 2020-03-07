"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetOrderResponse {
    static getAttributeTypeMap() {
        return GetOrderResponse.attributeTypeMap;
    }
}
exports.GetOrderResponse = GetOrderResponse;
GetOrderResponse.discriminator = undefined;
GetOrderResponse.attributeTypeMap = [
    {
        "name": "base",
        "baseName": "base",
        "type": "string"
    },
    {
        "name": "completedTimestamp",
        "baseName": "completed_timestamp",
        "type": "string"
    },
    {
        "name": "counter",
        "baseName": "counter",
        "type": "string"
    },
    {
        "name": "creationTimestamp",
        "baseName": "creation_timestamp",
        "type": "string"
    },
    {
        "name": "expirationTimestamp",
        "baseName": "expiration_timestamp",
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
        "name": "limitPrice",
        "baseName": "limit_price",
        "type": "string"
    },
    {
        "name": "limitVolume",
        "baseName": "limit_volume",
        "type": "string"
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
        "name": "state",
        "baseName": "state",
        "type": "GetOrderResponse.StateEnum"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "GetOrderResponse.TypeEnum"
    }
];
(function (GetOrderResponse) {
    let StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["PENDING"] = 'PENDING'] = "PENDING";
        StateEnum[StateEnum["COMPLETE"] = 'COMPLETE'] = "COMPLETE";
    })(StateEnum = GetOrderResponse.StateEnum || (GetOrderResponse.StateEnum = {}));
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["BID"] = 'BID'] = "BID";
        TypeEnum[TypeEnum["ASK"] = 'ASK'] = "ASK";
    })(TypeEnum = GetOrderResponse.TypeEnum || (GetOrderResponse.TypeEnum = {}));
})(GetOrderResponse = exports.GetOrderResponse || (exports.GetOrderResponse = {}));
