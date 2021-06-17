"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionVerb = exports.ActionType = exports.OptionType = exports.ButtonType = exports.InputType = exports.FrontendFramework = exports.BackendFramework = void 0;
var BackendFramework;
(function (BackendFramework) {
    BackendFramework["Loopback"] = "LOOPBACK";
    BackendFramework["Nest"] = "NEST";
    BackendFramework["Fastify"] = "FASTIFY";
    BackendFramework["Express"] = "EXPRESS";
    BackendFramework["Springboot"] = "SPRINGBOOT";
})(BackendFramework = exports.BackendFramework || (exports.BackendFramework = {}));
;
var FrontendFramework;
(function (FrontendFramework) {
    FrontendFramework["Angular"] = "ANGULAR";
    FrontendFramework["Pure"] = "PURE";
    FrontendFramework["React"] = "REACT";
    FrontendFramework["Svelte"] = "SVELTE";
    FrontendFramework["Vue"] = "VUE";
})(FrontendFramework = exports.FrontendFramework || (exports.FrontendFramework = {}));
;
var InputType;
(function (InputType) {
    InputType["Text"] = "text";
    InputType["Password"] = "password";
    InputType["Email"] = "email";
    InputType["Date"] = "date";
})(InputType = exports.InputType || (exports.InputType = {}));
;
var ButtonType;
(function (ButtonType) {
    ButtonType["Submit"] = "submit";
    ButtonType["Reset"] = "reset";
    ButtonType["Link"] = "link";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
;
var OptionType;
(function (OptionType) {
    OptionType["Api"] = "API";
    OptionType["Object"] = "OBJECT";
})(OptionType = exports.OptionType || (exports.OptionType = {}));
;
var ActionType;
(function (ActionType) {
    ActionType["Api"] = "API";
    ActionType["Link"] = "LINK";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
;
var ActionVerb;
(function (ActionVerb) {
    ActionVerb["Post"] = "POST";
    ActionVerb["Get"] = "GET";
    ActionVerb["Patch"] = "PATCH";
    ActionVerb["Put"] = "PUT";
    ActionVerb["Delete"] = "DELETE";
})(ActionVerb = exports.ActionVerb || (exports.ActionVerb = {}));
;
;
;
;
