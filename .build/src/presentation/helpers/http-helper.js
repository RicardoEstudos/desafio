"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.noContent = exports.created = exports.ok = exports.badRequest = void 0;
const badRequest = (error) => ({
    statusCode: 400,
    body: error
});
exports.badRequest = badRequest;
const ok = (data) => ({
    statusCode: 200,
    body: data
});
exports.ok = ok;
const created = () => ({
    statusCode: 201,
    body: {}
});
exports.created = created;
const noContent = () => ({
    statusCode: 204,
    body: {}
});
exports.noContent = noContent;
const notFound = () => ({
    statusCode: 404,
    body: {}
});
exports.notFound = notFound;
