"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetBalancesResponse {
    static getAttributeTypeMap() {
        return GetBalancesResponse.attributeTypeMap;
    }
}
exports.GetBalancesResponse = GetBalancesResponse;
GetBalancesResponse.discriminator = undefined;
GetBalancesResponse.attributeTypeMap = [
    {
        "name": "balance",
        "baseName": "balance",
        "type": "Array<AccountBalance>"
    }
];
