/**
 * Luno API
 * The Luno API provides developers with a wealth of financial information provided through the Luno platform.  Through this secure system developers can:  <ul>    <li>Create accounts for trading in cryptocurrencies</li>    <li>Access current and historic cryptocurrency market data</li>    <li>Submit trade orders and view order status</li>    <li>Buy and sell Bitcoin and Ethereum</li>    <li>Send and receive Bitcoin and Ethereum</li>    <li>Generate Bitcoin and Ethereum wallet addresses</li>  </ul>   The Luno API brings the world of Bitcoin and Ethereum to your doorstep. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class Ticker {
    'ask'?: string;
    'bid'?: string;
    'lastTrade'?: string;
    'pair'?: string;
    'rolling24HourVolume'?: string;
    /**
    * <code>ACTIVE</code> when the market is trading normally  <code>POSTONLY</code> when the market has been suspended and only post-only orders will be accepted  <code>DISABLED</code> when the market is shutdown and no orders can be accepted
    */
    'status'?: Ticker.StatusEnum;
    'timestamp'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ask",
            "baseName": "ask",
            "type": "string"
        },
        {
            "name": "bid",
            "baseName": "bid",
            "type": "string"
        },
        {
            "name": "lastTrade",
            "baseName": "last_trade",
            "type": "string"
        },
        {
            "name": "pair",
            "baseName": "pair",
            "type": "string"
        },
        {
            "name": "rolling24HourVolume",
            "baseName": "rolling_24_hour_volume",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Ticker.StatusEnum"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Ticker.attributeTypeMap;
    }
}

export namespace Ticker {
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        POSTONLY = <any> 'POSTONLY',
        DISABLED = <any> 'DISABLED'
    }
}
