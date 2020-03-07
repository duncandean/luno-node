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

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { GetFeeInfoResponse } from '../model/getFeeInfoResponse';
import { GetOrderResponse } from '../model/getOrderResponse';
import { ListOrdersResponse } from '../model/listOrdersResponse';
import { ListUserTradesResponse } from '../model/listUserTradesResponse';
import { PostLimitOrderResponse } from '../model/postLimitOrderResponse';
import { PostMarketOrderResponse } from '../model/postMarketOrderResponse';
import { StopOrderResponse } from '../model/stopOrderResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.mybitx.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum OrdersApiApiKeys {
}

export class OrdersApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: OrdersApiApiKeys, value: string) {
        (this.authentications as any)[OrdersApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Returns the fees and 30 day trading volume (as of midnight) for a given currency pair.  For complete details, please see <a href=\"en/countries\">Fees & Features</a>.  Permissions required: <code>Perm_R_Orders</code>
     * @summary Get fee information
     * @param pair Get fee information about this pair.
     */
    public async getFeeInfo (pair: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: GetFeeInfoResponse;  }> {
        const localVarPath = this.basePath + '/api/1/fee_info';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'pair' is not null or undefined
        if (pair === null || pair === undefined) {
            throw new Error('Required parameter pair was null or undefined when calling getFeeInfo.');
        }

        if (pair !== undefined) {
            localVarQueryParameters['pair'] = ObjectSerializer.serialize(pair, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: GetFeeInfoResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetFeeInfoResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get an Order\'s details by its ID.  Permissions required: <code>Perm_R_Orders</code>
     * @summary Get order
     * @param id The order ID.
     */
    public async getOrder (id: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: GetOrderResponse;  }> {
        const localVarPath = this.basePath + '/api/1/orders/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getOrder.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: GetOrderResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetOrderResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns a list of the most recently placed Orders. Users can specify an optional <code>state=PENDING</code> parameter to restrict the results to only open Orders. Users can also specify the market by using the optional currency pair parameter. The list is truncated after 100 items.  Permissions required: <code>Perm_R_Orders</code>
     * @summary List orders
     * @param state Filter to only orders of this state
     * @param pair Filter to only orders of this currency pair
     * @param createdBefore Filter to orders created before this timestamp (Unix milliseconds)
     * @param limit Limit to this many orders
     */
    public async listOrders (state?: 'PENDING' | 'COMPLETE', pair?: string, createdBefore?: number, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: ListOrdersResponse;  }> {
        const localVarPath = this.basePath + '/api/1/listorders';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (state !== undefined) {
            localVarQueryParameters['state'] = ObjectSerializer.serialize(state, "'PENDING' | 'COMPLETE'");
        }

        if (pair !== undefined) {
            localVarQueryParameters['pair'] = ObjectSerializer.serialize(pair, "string");
        }

        if (createdBefore !== undefined) {
            localVarQueryParameters['created_before'] = ObjectSerializer.serialize(createdBefore, "number");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: ListOrdersResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ListOrdersResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns a list of the recent Trades for a given currency pair for this user, sorted by oldest first. If <code>before</code> is specified, then Trades are returned sorted by most-recent first.  <code>type</code> in the response indicates the type of Order that was placed to participate in the trade. Possible types: <code>BID</code>, <code>ASK</code>.  If <code>is_buy</code> in the response is true, then the Order which completed the trade (market taker) was a Bid Order.  Results of this query may lag behind the latest data.  Permissions required: <code>Perm_R_Orders</code>
     * @summary List trades
     * @param pair Filter to trades of this currency pair.
     * @param since Filter to trades on or after this timestamp.
     * @param before Filter to trades before this timestamp.
     * @param afterSeq Filter to trades from (including) this sequence number. Default behaviour is not to include this filter.
     * @param beforeSeq Filter to trades before (excluding) this sequence number. Default behaviour is not to include this filter.
     * @param sortDesc If set to true, sorts trades in descending order, otherwise ascending order will be assumed.
     * @param limit Limit to this number of trades (default 100).
     */
    public async listUserTrades (pair: string, since?: string, before?: string, afterSeq?: number, beforeSeq?: number, sortDesc?: boolean, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: ListUserTradesResponse;  }> {
        const localVarPath = this.basePath + '/api/1/listtrades';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'pair' is not null or undefined
        if (pair === null || pair === undefined) {
            throw new Error('Required parameter pair was null or undefined when calling listUserTrades.');
        }

        if (pair !== undefined) {
            localVarQueryParameters['pair'] = ObjectSerializer.serialize(pair, "string");
        }

        if (since !== undefined) {
            localVarQueryParameters['since'] = ObjectSerializer.serialize(since, "string");
        }

        if (before !== undefined) {
            localVarQueryParameters['before'] = ObjectSerializer.serialize(before, "string");
        }

        if (afterSeq !== undefined) {
            localVarQueryParameters['after_seq'] = ObjectSerializer.serialize(afterSeq, "number");
        }

        if (beforeSeq !== undefined) {
            localVarQueryParameters['before_seq'] = ObjectSerializer.serialize(beforeSeq, "number");
        }

        if (sortDesc !== undefined) {
            localVarQueryParameters['sort_desc'] = ObjectSerializer.serialize(sortDesc, "boolean");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: ListUserTradesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ListUserTradesResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Create a new Trade Order.  <b>Warning!</b> Orders cannot be reversed once they have executed. Please ensure your program has been thoroughly tested before submitting Orders.  If no <code>base_account_id</code> or <code>counter_account_id</code> are specified, your default base currency or counter currency account will be used. You can find your Account IDs by calling the <a href=\"#operation/getBalances\">Balances</a> API.  Permissions required: <code>Perm_W_Orders</code>
     * @summary Post limit order
     * @param pair The currency pair to trade.
     * @param type &lt;code&gt;BID&lt;/code&gt; for a bid (buy) limit order&lt;br&gt; &lt;code&gt;ASK&lt;/code&gt; for an ask (sell) limit order
     * @param volume Amount of cryptocurrency to buy or sell as a decimal string in units of the currency.
     * @param price Limit price as a decimal string in units of ZAR/BTC.
     * @param postOnly Post-only Orders will be cancelled if they would otherwise have traded immediately. For example, if there\&#39;s a bid at ZAR 100,000 and you place a post-only ask at ZAR 100,000, your order will be cancelled instead of trading. If the best bid is ZAR 100,000 and you place a post-only ask at ZAR 101,000, your order won\&#39;t trade but will go into the order book.
     * @param baseAccountId The base currency Account to use in the trade.
     * @param counterAccountId The counter currency Account to use in the trade.
     */
    public async postLimitOrder (pair: string, type: 'BID' | 'ASK', volume: string, price: string, postOnly?: boolean, baseAccountId?: number, counterAccountId?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: PostLimitOrderResponse;  }> {
        const localVarPath = this.basePath + '/api/1/postorder';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'pair' is not null or undefined
        if (pair === null || pair === undefined) {
            throw new Error('Required parameter pair was null or undefined when calling postLimitOrder.');
        }

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling postLimitOrder.');
        }

        // verify required parameter 'volume' is not null or undefined
        if (volume === null || volume === undefined) {
            throw new Error('Required parameter volume was null or undefined when calling postLimitOrder.');
        }

        // verify required parameter 'price' is not null or undefined
        if (price === null || price === undefined) {
            throw new Error('Required parameter price was null or undefined when calling postLimitOrder.');
        }

        if (pair !== undefined) {
            localVarQueryParameters['pair'] = ObjectSerializer.serialize(pair, "string");
        }

        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "'BID' | 'ASK'");
        }

        if (postOnly !== undefined) {
            localVarQueryParameters['post_only'] = ObjectSerializer.serialize(postOnly, "boolean");
        }

        if (volume !== undefined) {
            localVarQueryParameters['volume'] = ObjectSerializer.serialize(volume, "string");
        }

        if (price !== undefined) {
            localVarQueryParameters['price'] = ObjectSerializer.serialize(price, "string");
        }

        if (baseAccountId !== undefined) {
            localVarQueryParameters['base_account_id'] = ObjectSerializer.serialize(baseAccountId, "number");
        }

        if (counterAccountId !== undefined) {
            localVarQueryParameters['counter_account_id'] = ObjectSerializer.serialize(counterAccountId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: PostLimitOrderResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PostLimitOrderResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Create a new Market Order.  A Market Order executes immediately, and either buys as much of the asset that can be bought for a set amount of fiat currency, or sells a set amount of the asset for as much as possible.  <b>Warning!</b> Orders cannot be reversed once they have executed. Please ensure your program has been thoroughly tested before submitting Orders.  If no <code>base_account_id</code> or <code>counter_account_id</code> are specified, the default base currency or counter currency account will be used. Users can find their account IDs by calling the <a href=\"#operation/getBalances\">Balances</a> request.  Permissions required: <code>Perm_W_Orders</code>
     * @summary Post market order
     * @param pair The currency pair to trade.
     * @param type &lt;code&gt;BUY&lt;/code&gt; to buy an asset&lt;br&gt; &lt;code&gt;SELL&lt;/code&gt; to sell an asset
     * @param counterVolume For a &lt;code&gt;BUY&lt;/code&gt; order: amount of the counter currency to use (e.g. how much EUR to use to buy BTC in the BTC/EUR market)
     * @param baseVolume For a &lt;code&gt;SELL&lt;/code&gt; order: amount of the base currency to use (e.g. how much BTC to sell for EUR in the BTC/EUR market)
     * @param baseAccountId The base currency account to use in the trade.
     * @param counterAccountId The counter currency account to use in the trade.
     */
    public async postMarketOrder (pair: string, type: 'BUY' | 'SELL', counterVolume?: string, baseVolume?: string, baseAccountId?: number, counterAccountId?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: PostMarketOrderResponse;  }> {
        const localVarPath = this.basePath + '/api/1/marketorder';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'pair' is not null or undefined
        if (pair === null || pair === undefined) {
            throw new Error('Required parameter pair was null or undefined when calling postMarketOrder.');
        }

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling postMarketOrder.');
        }

        if (pair !== undefined) {
            localVarQueryParameters['pair'] = ObjectSerializer.serialize(pair, "string");
        }

        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "'BUY' | 'SELL'");
        }

        if (counterVolume !== undefined) {
            localVarQueryParameters['counter_volume'] = ObjectSerializer.serialize(counterVolume, "string");
        }

        if (baseVolume !== undefined) {
            localVarQueryParameters['base_volume'] = ObjectSerializer.serialize(baseVolume, "string");
        }

        if (baseAccountId !== undefined) {
            localVarQueryParameters['base_account_id'] = ObjectSerializer.serialize(baseAccountId, "number");
        }

        if (counterAccountId !== undefined) {
            localVarQueryParameters['counter_account_id'] = ObjectSerializer.serialize(counterAccountId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: PostMarketOrderResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PostMarketOrderResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Request to stop an Order.  <b>Note!</b>: Once as Order has been completed, it can not be reversed. The return value from this request will indicate if the Stop request was successful or not.  Permissions required: <code>Perm_W_Orders</code>
     * @summary Stop order
     * @param orderId The Order identifier as a string.
     */
    public async stopOrder (orderId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: StopOrderResponse;  }> {
        const localVarPath = this.basePath + '/api/1/stoporder';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling stopOrder.');
        }

        if (orderId !== undefined) {
            localVarQueryParameters['order_id'] = ObjectSerializer.serialize(orderId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: StopOrderResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "StopOrderResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
