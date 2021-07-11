"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormAngular = void 0;
// import { FormDirective } from "./form.directive";
var form_template_1 = require("./form/form.template");
var shared_functions_1 = require("./shared-functions");
var FormAngular = /** @class */ (function () {
    function FormAngular() {
        var _this = this;
        this.sharedFunction = new shared_functions_1.SharedFunctions;
        this.setFormHtml = function (form, isTable) {
            var _a;
            var template = new form_template_1.FormTemplate, formPropertyName = _this.sharedFunction.setIdToPropertyName(form.id);
            var codeHtml = '';
            form.elements.forEach(function (element) {
                var input = element.input, select = element.select, tabs = element.tabs, array = element.array, button = element.button;
                if (input)
                    codeHtml += template.setInput(input);
                if (select)
                    codeHtml += template.setSelect(select);
                if (tabs)
                    codeHtml += template.setTab(tabs);
                if (array)
                    codeHtml += template.setArray(array);
                if (button)
                    codeHtml += template.setButton(button);
            });
            (_a = form.actions) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
                var input = element.input, select = element.select, tabs = element.tabs, array = element.array, button = element.button;
                if (input)
                    codeHtml += template.setInput(input);
                if (select)
                    codeHtml += template.setSelect(select);
                if (tabs)
                    codeHtml += template.setTab(tabs);
                if (array)
                    codeHtml += template.setArray(array);
                if (button)
                    codeHtml += template.setButton(button);
            });
            return codeHtml;
        };
        this.setFormService = function (formArray) {
        };
        this.setFormInterface = function (formArray) {
        };
    }
    return FormAngular;
}());
exports.FormAngular = FormAngular;
