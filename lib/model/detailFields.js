"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DetailFields {
    static getAttributeTypeMap() {
        return DetailFields.attributeTypeMap;
    }
}
exports.DetailFields = DetailFields;
DetailFields.discriminator = undefined;
DetailFields.attributeTypeMap = [
    {
        "name": "cryptoDetails",
        "baseName": "crypto_details",
        "type": "CryptoDetails"
    }
];
