"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListTransactionsResponse {
    static getAttributeTypeMap() {
        return ListTransactionsResponse.attributeTypeMap;
    }
}
exports.ListTransactionsResponse = ListTransactionsResponse;
ListTransactionsResponse.discriminator = undefined;
ListTransactionsResponse.attributeTypeMap = [
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "pending",
        "baseName": "pending",
        "type": "Array<Transaction>"
    },
    {
        "name": "transactions",
        "baseName": "transactions",
        "type": "Array<Transaction>"
    }
];
