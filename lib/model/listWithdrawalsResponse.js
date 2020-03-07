"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListWithdrawalsResponse {
    static getAttributeTypeMap() {
        return ListWithdrawalsResponse.attributeTypeMap;
    }
}
exports.ListWithdrawalsResponse = ListWithdrawalsResponse;
ListWithdrawalsResponse.discriminator = undefined;
ListWithdrawalsResponse.attributeTypeMap = [
    {
        "name": "withdrawals",
        "baseName": "withdrawals",
        "type": "Array<Withdrawal>"
    }
];
