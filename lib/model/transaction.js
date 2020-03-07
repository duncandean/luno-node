"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }
}
exports.Transaction = Transaction;
Transaction.discriminator = undefined;
Transaction.attributeTypeMap = [
    {
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "available",
        "baseName": "available",
        "type": "string"
    },
    {
        "name": "availableDelta",
        "baseName": "available_delta",
        "type": "string"
    },
    {
        "name": "balance",
        "baseName": "balance",
        "type": "string"
    },
    {
        "name": "balanceDelta",
        "baseName": "balance_delta",
        "type": "string"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "detailFields",
        "baseName": "detail_fields",
        "type": "DetailFields"
    },
    {
        "name": "details",
        "baseName": "details",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "rowIndex",
        "baseName": "row_index",
        "type": "number"
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "string"
    }
];
