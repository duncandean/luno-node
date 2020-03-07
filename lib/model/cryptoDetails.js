"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CryptoDetails {
    static getAttributeTypeMap() {
        return CryptoDetails.attributeTypeMap;
    }
}
exports.CryptoDetails = CryptoDetails;
CryptoDetails.discriminator = undefined;
CryptoDetails.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "string"
    },
    {
        "name": "txid",
        "baseName": "txid",
        "type": "string"
    }
];
