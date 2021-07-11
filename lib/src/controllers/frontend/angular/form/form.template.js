"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormTemplate = void 0;
var frontend_1 = require("../../../../../interfaces/frontend");
var shared_functions_1 = require("../../angular/shared-functions");
var form_1 = require("../form");
var FormTemplate = /** @class */ (function () {
    function FormTemplate() {
        var _this = this;
        this.formTemplate = new form_1.FormAngular;
        this.sharedFunctions = new shared_functions_1.SharedFunctions;
        this.setArray = function (array) {
            var arrayPropertyName = _this.sharedFunctions.setIdToPropertyName(array.id), arrayClassName = _this.sharedFunctions.setIdToClassName(array.id), add = "add" + arrayClassName, remove = "remove" + arrayClassName;
            var codeArray = "<ng-container formArrayName=\"" + arrayPropertyName + "\">\n            <mat-card *ngFor=\"let _ of " + arrayPropertyName + ".controls; index as i\">\n                <ng-container [formGroupName]=\"i\">\n                    <mat-card-header>\n                        " + array.label + " {{1 + i}}\n                    </mat-card-header>\n                    <mat-card-content>\n                        " + _this.formTemplate.setFormHtml(array) + "\n                    </mat-card-content>\n                    <mat-card-actions>\n                        <button mat-button type=\"button\" color=\"warn\" (click)=\"" + remove + "(i)\">\n                            Remover " + array.label.toLowerCase() + "\n                        </button>\n                    </mat-card-actions>\n                </ng-container>\n            </mat-card>\n        </ng-container>\n        <mat-card>\n            <mat-card-content>\n                <button mat-button type=\"button\" (click)=" + add + "()>\n                    Adicionar " + array.label.toLowerCase() + "\n                </button>\n            </mat-card-content>\n        </mat-card>";
            return codeArray;
        };
        this.setInput = function (input) {
            var placeholder = input.placeholder ? "placeholder=\"" + input.placeholder + "\"" : '', required = input.isRequired ? 'required' : '';
            var codeInput = "<mat-form-field>\n            <mat-label>" + input.label + "</mat-label>\n            <input matInput type=\"" + input.type + "\" formControlName=\"" + input.name + "\" " + placeholder + " " + required + " autocomplete=\"new-password\">\n        </mat-form-field>";
            return codeInput;
        };
        this.setSelect = function (select) {
            var multiple = select.isMultiple ? 'multiple' : '', required = select.isRequired ? 'required' : '';
            var codeSelect = "<mat-form-field>\n            <mat-label>" + select.label + "</mat-label>\n            <mat-select formControlName=\"" + select.name + "\" " + required + " " + multiple + ">\n                <mat-option *ngFor=\"let " + select.name + "Item of " + select.name + "SelectObject\" [value]=\"" + select.name + "Item.value\">\n                    {{" + select.name + "Item.value}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>";
            return codeSelect;
        };
        this.setOptgroup = function (optgroup) {
        };
        this.setOptions = function (options) {
        };
        this.setSlide = function (slide) {
            var codeSlide = "<mat-form-field>";
            codeSlide += "<mat-label>" + slide.label + "</mat-label>";
            codeSlide += "<mat-slide-toggle formControlName=\"" + slide.name + "\">" + slide.label + "</mat-slide-toggle>";
            codeSlide += "</mat-form-field>";
            return codeSlide;
        };
        this.setButton = function (button) {
            var color = '', dialogAction = '', label = (button.type === frontend_1.FormButtonTypeEnum.Submit) ? "{{isAddModule ? 'Criar' : 'Editar'}}" : button.label, codeButton = '';
            // dialogAction = (form.dialog?.template) ? `mat-dialog-close` : '';
            if (button.type === frontend_1.FormButtonTypeEnum.Button)
                color = '';
            if (button.type === frontend_1.FormButtonTypeEnum.Submit)
                color = "color=\"primary\" " + dialogAction;
            if (button.type === frontend_1.FormButtonTypeEnum.Delete)
                color = "color=\"warn\" " + dialogAction;
            if (button.type === frontend_1.FormButtonTypeEnum.Reset)
                color = "color=\"accent\"";
            if (button.type === frontend_1.FormButtonTypeEnum.Submit)
                codeButton += "<mat-card-actions>";
            codeButton += "<button mat-raised-button " + color + ">" + label + "</button>";
            if (button.type === frontend_1.FormButtonTypeEnum.Submit)
                codeButton += "</mat-card-actions>";
            return codeButton;
        };
        this.setTab = function (tabs) {
            var codeTab = "<mat-tab-group>";
            tabs.forEach(function (tab) {
                codeTab +=
                    "<mat-tab label=\"" + tab.label + "\" id=\"" + tab.id + "\">\n                " + _this.formTemplate.setFormHtml(tab) + "\n            </mat-tab>";
            });
            codeTab += "</mat-tab-group>";
            return codeTab;
        };
    }
    return FormTemplate;
}());
exports.FormTemplate = FormTemplate;
