"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostLimitOrderResponse {
    static getAttributeTypeMap() {
        return PostLimitOrderResponse.attributeTypeMap;
    }
}
exports.PostLimitOrderResponse = PostLimitOrderResponse;
PostLimitOrderResponse.discriminator = undefined;
PostLimitOrderResponse.attributeTypeMap = [
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    }
];
