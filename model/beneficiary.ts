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

export class Beneficiary {
    'bankAccountBranch'?: string;
    'bankAccountNumber'?: string;
    'bankAccountType'?: string;
    'bankCountry'?: string;
    'bankName'?: string;
    'bankRecipient'?: string;
    'createdAt'?: string;
    'id'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankAccountBranch",
            "baseName": "bank_account_branch",
            "type": "string"
        },
        {
            "name": "bankAccountNumber",
            "baseName": "bank_account_number",
            "type": "string"
        },
        {
            "name": "bankAccountType",
            "baseName": "bank_account_type",
            "type": "string"
        },
        {
            "name": "bankCountry",
            "baseName": "bank_country",
            "type": "string"
        },
        {
            "name": "bankName",
            "baseName": "bank_name",
            "type": "string"
        },
        {
            "name": "bankRecipient",
            "baseName": "bank_recipient",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Beneficiary.attributeTypeMap;
    }
}

