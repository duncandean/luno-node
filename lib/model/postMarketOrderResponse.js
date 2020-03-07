"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostMarketOrderResponse {
    static getAttributeTypeMap() {
        return PostMarketOrderResponse.attributeTypeMap;
    }
}
exports.PostMarketOrderResponse = PostMarketOrderResponse;
PostMarketOrderResponse.discriminator = undefined;
PostMarketOrderResponse.attributeTypeMap = [
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    }
];
