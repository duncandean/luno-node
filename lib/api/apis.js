"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./accountsApi"));
const accountsApi_1 = require("./accountsApi");
__export(require("./beneficiariesApi"));
const beneficiariesApi_1 = require("./beneficiariesApi");
__export(require("./lightningApi"));
const lightningApi_1 = require("./lightningApi");
__export(require("./marketApi"));
const marketApi_1 = require("./marketApi");
__export(require("./ordersApi"));
const ordersApi_1 = require("./ordersApi");
__export(require("./quotesApi"));
const quotesApi_1 = require("./quotesApi");
__export(require("./receiveApi"));
const receiveApi_1 = require("./receiveApi");
__export(require("./sendApi"));
const sendApi_1 = require("./sendApi");
__export(require("./withdrawalsApi"));
const withdrawalsApi_1 = require("./withdrawalsApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [accountsApi_1.AccountsApi, beneficiariesApi_1.BeneficiariesApi, lightningApi_1.LightningApi, marketApi_1.MarketApi, ordersApi_1.OrdersApi, quotesApi_1.QuotesApi, receiveApi_1.ReceiveApi, sendApi_1.SendApi, withdrawalsApi_1.WithdrawalsApi];
