"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const localVarRequest = require("request");
const models_1 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://api.mybitx.com';
var SendApiApiKeys;
(function (SendApiApiKeys) {
})(SendApiApiKeys = exports.SendApiApiKeys || (exports.SendApiApiKeys = {}));
class SendApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
        };
        this.interceptors = [];
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    set defaultHeaders(defaultHeaders) {
        this._defaultHeaders = defaultHeaders;
    }
    get defaultHeaders() {
        return this._defaultHeaders;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[SendApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    send(amount, currency, address, description, message, externalId, hasDestinationTag, destinationTag, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/api/1/send';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            if (amount === null || amount === undefined) {
                throw new Error('Required parameter amount was null or undefined when calling send.');
            }
            if (currency === null || currency === undefined) {
                throw new Error('Required parameter currency was null or undefined when calling send.');
            }
            if (address === null || address === undefined) {
                throw new Error('Required parameter address was null or undefined when calling send.');
            }
            if (amount !== undefined) {
                localVarQueryParameters['amount'] = models_1.ObjectSerializer.serialize(amount, "string");
            }
            if (currency !== undefined) {
                localVarQueryParameters['currency'] = models_1.ObjectSerializer.serialize(currency, "string");
            }
            if (address !== undefined) {
                localVarQueryParameters['address'] = models_1.ObjectSerializer.serialize(address, "string");
            }
            if (description !== undefined) {
                localVarQueryParameters['description'] = models_1.ObjectSerializer.serialize(description, "string");
            }
            if (message !== undefined) {
                localVarQueryParameters['message'] = models_1.ObjectSerializer.serialize(message, "string");
            }
            if (externalId !== undefined) {
                localVarQueryParameters['external_id'] = models_1.ObjectSerializer.serialize(externalId, "string");
            }
            if (hasDestinationTag !== undefined) {
                localVarQueryParameters['has_destination_tag'] = models_1.ObjectSerializer.serialize(hasDestinationTag, "boolean");
            }
            if (destinationTag !== undefined) {
                localVarQueryParameters['destination_tag'] = models_1.ObjectSerializer.serialize(destinationTag, "number");
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
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
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "SendResponse");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
}
exports.SendApi = SendApi;
