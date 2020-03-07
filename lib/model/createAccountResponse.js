"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateAccountResponse {
    static getAttributeTypeMap() {
        return CreateAccountResponse.attributeTypeMap;
    }
}
exports.CreateAccountResponse = CreateAccountResponse;
CreateAccountResponse.discriminator = undefined;
CreateAccountResponse.attributeTypeMap = [
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
