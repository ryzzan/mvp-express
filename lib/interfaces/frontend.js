"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterLogicalOperatorEnum = exports.FilterComparisonOperatorEnum = exports.FilterTypeEnum = exports.ActionVerbEnum = exports.ActionTypeEnum = exports.RequestTypeEnum = exports.ButtonTypeEnum = exports.InputTypeEnum = exports.FrontendFrameworkEnum = exports.BackendFrameworkEnum = void 0;
var BackendFrameworkEnum;
(function (BackendFrameworkEnum) {
    BackendFrameworkEnum["Loopback"] = "LOOPBACK";
    BackendFrameworkEnum["Nest"] = "NEST";
    BackendFrameworkEnum["Fastify"] = "FASTIFY";
    BackendFrameworkEnum["Express"] = "EXPRESS";
    BackendFrameworkEnum["Springboot"] = "SPRINGBOOT";
})(BackendFrameworkEnum = exports.BackendFrameworkEnum || (exports.BackendFrameworkEnum = {}));
;
var FrontendFrameworkEnum;
(function (FrontendFrameworkEnum) {
    FrontendFrameworkEnum["Angular"] = "ANGULAR";
    FrontendFrameworkEnum["Pure"] = "PURE";
    FrontendFrameworkEnum["React"] = "REACT";
    FrontendFrameworkEnum["Svelte"] = "SVELTE";
    FrontendFrameworkEnum["Vue"] = "VUE";
})(FrontendFrameworkEnum = exports.FrontendFrameworkEnum || (exports.FrontendFrameworkEnum = {}));
;
var InputTypeEnum;
(function (InputTypeEnum) {
    InputTypeEnum["Text"] = "text";
    InputTypeEnum["Password"] = "password";
    InputTypeEnum["Email"] = "email";
    InputTypeEnum["Date"] = "date";
    InputTypeEnum["Number"] = "number";
})(InputTypeEnum = exports.InputTypeEnum || (exports.InputTypeEnum = {}));
;
var ButtonTypeEnum;
(function (ButtonTypeEnum) {
    ButtonTypeEnum["Submit"] = "submit";
    ButtonTypeEnum["Reset"] = "reset";
    ButtonTypeEnum["Link"] = "link";
})(ButtonTypeEnum = exports.ButtonTypeEnum || (exports.ButtonTypeEnum = {}));
;
var RequestTypeEnum;
(function (RequestTypeEnum) {
    RequestTypeEnum["Api"] = "API";
    RequestTypeEnum["Object"] = "OBJECT";
})(RequestTypeEnum = exports.RequestTypeEnum || (exports.RequestTypeEnum = {}));
;
var ActionTypeEnum;
(function (ActionTypeEnum) {
    ActionTypeEnum["Api"] = "API";
    ActionTypeEnum["Link"] = "LINK";
})(ActionTypeEnum = exports.ActionTypeEnum || (exports.ActionTypeEnum = {}));
;
var ActionVerbEnum;
(function (ActionVerbEnum) {
    ActionVerbEnum["Post"] = "POST";
    ActionVerbEnum["Get"] = "GET";
    ActionVerbEnum["Patch"] = "PATCH";
    ActionVerbEnum["Put"] = "PUT";
    ActionVerbEnum["Delete"] = "DELETE";
})(ActionVerbEnum = exports.ActionVerbEnum || (exports.ActionVerbEnum = {}));
;
var FilterTypeEnum;
(function (FilterTypeEnum) {
    FilterTypeEnum["Api"] = "API";
    FilterTypeEnum["Object"] = "OBJECT";
})(FilterTypeEnum = exports.FilterTypeEnum || (exports.FilterTypeEnum = {}));
var FilterComparisonOperatorEnum;
(function (FilterComparisonOperatorEnum) {
    FilterComparisonOperatorEnum["Equal"] = "eq";
    FilterComparisonOperatorEnum["Greater"] = "gt";
    FilterComparisonOperatorEnum["GreaterOrEqual"] = "gte";
    FilterComparisonOperatorEnum["InArray"] = "in";
    FilterComparisonOperatorEnum["Less"] = "lt";
    FilterComparisonOperatorEnum["LessOrEqual"] = "lte";
    FilterComparisonOperatorEnum["NotEqual"] = "ne";
    FilterComparisonOperatorEnum["NotInArray"] = "nin";
})(FilterComparisonOperatorEnum = exports.FilterComparisonOperatorEnum || (exports.FilterComparisonOperatorEnum = {}));
var FilterLogicalOperatorEnum;
(function (FilterLogicalOperatorEnum) {
    FilterLogicalOperatorEnum["And"] = "and";
    FilterLogicalOperatorEnum["Not"] = "not";
    FilterLogicalOperatorEnum["Nor"] = "nor";
    FilterLogicalOperatorEnum["Or"] = "or";
})(FilterLogicalOperatorEnum = exports.FilterLogicalOperatorEnum || (exports.FilterLogicalOperatorEnum = {}));
;
;
;
;
;
