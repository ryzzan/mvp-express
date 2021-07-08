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
            var codeArray = "<ng-container formArrayName=\"" + arrayPropertyName + "\"><mat-card *ngFor=\"let _ of " + arrayPropertyName + ".controls; index as i\"><ng-container [formGroupName]=\"i\">";
            codeArray += "<mat-card-header>" + array.label + " {{1 + i}}</mat-card-header><mat-card-content>";
            codeArray += _this.formTemplate.setFormHtml(array);
            codeArray += "</mat-card-content><mat-card-actions>";
            codeArray += "<button mat-button type=\"button\" color=\"warn\" (click)=\"" + remove + "(i)\">Remover " + array.label.toLowerCase() + "</button>";
            codeArray += "</mat-card-actions></ng-container></mat-card></ng-container>";
            codeArray += "<mat-card><mat-card-content>";
            codeArray += "<button mat-button type=\"button\" (click)=" + add + "()>Adicionar " + array.label.toLowerCase() + "</button></mat-card-content></mat-card>";
            return codeArray;
        };
        this.setInput = function (input) {
            var placeholder = input.placeholder ? "placeholder=\"" + input.placeholder + "\"" : '', required = input.isRequired ? 'required' : '';
            var codeInput = "<mat-form-field>";
            codeInput += "<mat-label>" + input.label + "</mat-label>";
            codeInput += "<input matInput type=\"" + input.type + "\" formControlName=\"" + input.name + "\" " + placeholder + " " + required + " autocomplete=\"new-password\">";
            codeInput += "</mat-form-field>";
            return codeInput;
        };
        this.setSelect = function (select) {
            var multiple = select.isMultiple ? 'multiple' : '', required = select.isRequired ? 'required' : '';
            var codeSelect = "<mat-form-field>";
            codeSelect += "<mat-label>" + select.label + "</mat-label>";
            codeSelect += "<mat-select formControlName=\"" + select.name + "\" " + required + " " + multiple + "><mat-option *ngFor=\"let " + select.name + "Item of " + select.name + "SelectObject\" [value]=\"" + select.name + "Item.value\">{{" + select.name + "Item.value}}</mat-option></mat-select>";
            codeSelect += "</mat-form-field>";
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
            var color = '', dialogAction = '', label = (button.type === frontend_1.FormButtonTypeEnum.Submit) ? "{{isAddModule ? 'Criar' : 'Editar'}}" : button.label;
            // dialogAction = (form.dialog?.template) ? `mat-dialog-close` : '';
            if (button.type === frontend_1.FormButtonTypeEnum.Submit)
                color = "color=\"primary\" " + dialogAction;
            if (button.type === frontend_1.FormButtonTypeEnum.Delete)
                color = "color=\"warn\" " + dialogAction;
            if (button.type === frontend_1.FormButtonTypeEnum.Reset)
                color = "color=\"accent\"";
            var codeButton = "<button mat-raised-button " + color + ">" + label + "</button>";
            return codeButton;
        };
        this.setTab = function (tabs) {
            var codeTab = "<mat-tab-group>";
            tabs.forEach(function (tab) {
                codeTab += "<mat-tab label=\"" + tab.label + "\" id=\"" + tab.id + "\">";
                codeTab += _this.formTemplate.setFormHtml(tab);
                codeTab += "</mat-tab>";
            });
            codeTab += "</mat-tab-group>";
            return codeTab;
        };
    }
    return FormTemplate;
}());
exports.FormTemplate = FormTemplate;
