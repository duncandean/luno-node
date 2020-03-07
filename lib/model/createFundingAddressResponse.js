"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateFundingAddressResponse {
    static getAttributeTypeMap() {
        return CreateFundingAddressResponse.attributeTypeMap;
    }
}
exports.CreateFundingAddressResponse = CreateFundingAddressResponse;
CreateFundingAddressResponse.discriminator = undefined;
CreateFundingAddressResponse.attributeTypeMap = [
    {
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "string"
    },
    {
        "name": "addressMeta",
        "baseName": "address_meta",
        "type": "Array<AddressMeta>"
    },
    {
        "name": "asset",
        "baseName": "asset",
        "type": "string"
    },
    {
        "name": "assignedAt",
        "baseName": "assigned_at",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "qrCodeUri",
        "baseName": "qr_code_uri",
        "type": "string"
    },
    {
        "name": "receiveFee",
        "baseName": "receive_fee",
        "type": "string"
    },
    {
        "name": "totalReceived",
        "baseName": "total_received",
        "type": "string"
    },
    {
        "name": "totalUnconfirmed",
        "baseName": "total_unconfirmed",
        "type": "string"
    }
];
