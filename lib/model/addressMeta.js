"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddressMeta {
    static getAttributeTypeMap() {
        return AddressMeta.attributeTypeMap;
    }
}
exports.AddressMeta = AddressMeta;
AddressMeta.discriminator = undefined;
AddressMeta.attributeTypeMap = [
    {
        "name": "label",
        "baseName": "label",
        "type": "string"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    }
];
