"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountBalance {
    static getAttributeTypeMap() {
        return AccountBalance.attributeTypeMap;
    }
}
exports.AccountBalance = AccountBalance;
AccountBalance.discriminator = undefined;
AccountBalance.attributeTypeMap = [
    {
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "asset",
        "baseName": "asset",
        "type": "string"
    },
    {
        "name": "balance",
        "baseName": "balance",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "reserved",
        "baseName": "reserved",
        "type": "string"
    },
    {
        "name": "unconfirmed",
        "baseName": "unconfirmed",
        "type": "string"
    }
];
