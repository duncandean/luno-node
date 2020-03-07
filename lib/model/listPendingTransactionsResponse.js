"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListPendingTransactionsResponse {
    static getAttributeTypeMap() {
        return ListPendingTransactionsResponse.attributeTypeMap;
    }
}
exports.ListPendingTransactionsResponse = ListPendingTransactionsResponse;
ListPendingTransactionsResponse.discriminator = undefined;
ListPendingTransactionsResponse.attributeTypeMap = [
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
