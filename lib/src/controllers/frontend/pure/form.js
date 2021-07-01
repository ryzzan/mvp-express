"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormPure = void 0;
var shared_functions_1 = require("../angular/shared-functions");
var FormPure = /** @class */ (function () {
    function FormPure() {
        this.sharedFunctions = new shared_functions_1.SharedFunctions;
        this.setFormHtml = function (formObject) { };
        this.setFormDirective = function (formObject) { };
        this.setFormInterface = function (formObject) { };
        this.setFormService = function (formObject) { };
    }
    return FormPure;
}());
exports.FormPure = FormPure;
