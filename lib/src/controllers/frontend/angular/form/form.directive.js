"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDirective = void 0;
var FormDirective = /** @class */ (function () {
    function FormDirective() {
        this.setImport = function (form) {
            var elements = form.elements;
            var codeImport = "import { Component } from '@angular/core';", importObject = {
                forms: {
                    validators: false,
                    formArray: false,
                },
                router: {
                    activatedRoute: false,
                    router: false,
                },
            };
            elements.forEach(function (element) {
                if (element.array) {
                    importObject.forms.formArray = true;
                }
                if (element.input) {
                    if (element.input.validators)
                        importObject.forms.validators;
                }
                if (element.select) {
                    if (element.select.validators)
                        importObject.forms.validators;
                }
            });
            /** Forms */
            codeImport += "import {FormBuilder";
            if (importObject.forms.formArray)
                codeImport += ",FormArray,FormGroup";
            if (importObject.forms.validators)
                codeImport += ",Validators";
            codeImport += "} from '@angular/forms';";
            /** Router */
            codeImport += "import {ActivatedRoute,Router} from '@angular/router';";
            return codeImport;
        };
        this.setDecoratorComponent = function () { };
        this.setClass = function () { };
        this.setClassConstructor = function () { };
        this.setFormProperty = function () { };
        this.setFormArray = function () { };
        this.setFormAction = function () { };
        this.setTableProperty = function () { };
        this.setSelectObject = function () { };
    }
    return FormDirective;
}());
exports.FormDirective = FormDirective;
