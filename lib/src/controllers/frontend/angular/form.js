"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormAngular = void 0;
var shared_functions_1 = require("./shared-functions");
var FormAngular = /** @class */ (function () {
    function FormAngular() {
        var _this = this;
        this.shared = new shared_functions_1.SharedFunctions;
        this.setFormHtml = function (formArray) {
            var codeHtml = '';
            formArray.forEach(function (form) {
                var formIdAsPropertyName = _this.shared.idToPropertyName(form.id);
                codeHtml += "<mat-card><mat-card-content>";
                if (form.elements) {
                    codeHtml += _this.setFormHtmlElement(form, form.elements, formIdAsPropertyName);
                }
                /** Create code: tabs */
                if (form.tabs) {
                    codeHtml += "<mat-tab-group>";
                    form.tabs.forEach(function (tab) {
                        codeHtml += "<mat-tab label=\"" + tab.label + "\" id=\"" + tab.id + "\">";
                        codeHtml += _this.setFormHtmlElement(form, tab.elements, formIdAsPropertyName);
                        codeHtml += "</mat-tab>";
                    });
                    codeHtml += "</mat-tab-group>";
                }
                codeHtml += "</mat-card-content>";
                if (form.actions) {
                    codeHtml += "<mat-card-actions>";
                    codeHtml += _this.setFormHtmlElement(form, form.actions.elements, formIdAsPropertyName);
                    codeHtml += "</mat-card-actions>";
                }
                codeHtml += "</mat-card>";
            });
            return codeHtml;
        };
        this.setFormHtmlElement = function (form, array, formIdAsPropertyName, isArray, isTab) {
            var codeHtml = '', codeForm = '';
            array.forEach(function (element) {
                if (element.array) {
                    var add = 'add' + element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1), remove = 'remove' + element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1);
                    codeForm += "<ng-container formArrayName=\"" + element.array.id + "\"><mat-card *ngFor=\"let _ of " + element.array.id + ".controls; index as i\"><ng-container [formGroupName]=\"i\">";
                    codeForm += "<mat-card-header>" + element.array.label + " {{1 + i}}</mat-card-header><mat-card-content>";
                    codeForm += _this.setFormHtmlElement(form, element.array.elements, formIdAsPropertyName, true);
                    codeForm += "</mat-card-content><mat-card-actions>";
                    codeForm += "<button mat-button type=\"button\" color=\"warn\" (click)=\"" + remove + "(i)\">Remover " + element.array.label.toLowerCase() + "</button>";
                    codeForm += "</mat-card-actions></ng-container></mat-card></ng-container>";
                    codeForm += "<mat-card><mat-card-content>";
                    codeForm += "<button mat-button type=\"button\" (click)=" + add + "()>Adicionar " + element.array.label.toLowerCase() + "</button></mat-card-content></mat-card>";
                }
                // Create code: input
                if (element.input) {
                    var input = element.input, placeholder = input.placeholder ? "placeholder=\"" + input.placeholder + "\"" : '';
                    codeForm += "<mat-form-field>";
                    codeForm += "<mat-label>" + input.label + "</mat-label>";
                    codeForm += "<input matInput type=\"" + input.type + "\" formControlName=\"" + input.name + "\" id=\"" + input.id + "\" " + placeholder + " " + (input.required ? 'required' : '') + " autocomplete=\"new-password\">";
                    codeForm += "</mat-form-field>";
                }
                // Create code: select
                if (element.select) {
                    var select = element.select, isMultiple = element.select.isMultiple ? 'multiple' : '';
                    codeForm += "<mat-form-field>";
                    codeForm += "<mat-label>" + select.label + "</mat-label>";
                    codeForm += "<mat-select formControlName=\"" + select.name + "\" " + isMultiple + "><mat-option *ngFor=\"let " + select.name + "Item of " + select.name + "SelectObject\" [value]=\"" + select.name + "Item.value\">{{" + select.name + "Item.valueView}}</mat-option></mat-select>";
                    codeForm += "</mat-form-field>";
                }
                /** Create code: slide toggle */
                if (element.slide) {
                    var slide = element.slide;
                    codeForm += "<mat-form-field>";
                    codeForm += "<mat-label>" + slide.label + "</mat-label>";
                    codeForm += "<mat-slide-toggle>" + slide.label + "</mat-slide-toggle>";
                    codeForm += "</mat-form-field>";
                }
                // Create code: button
                if (element.button) {
                    var button = element.button;
                    codeForm += "<button mat-raised-button color=\"primary\">" + button.label + "</button>";
                }
            });
            codeHtml += isArray ? '' : "<form id=\"" + form.id + "\" [formGroup]=\"" + formIdAsPropertyName + "Form\" (ngSubmit)=\"" + formIdAsPropertyName + "Submit()\">";
            codeHtml += codeForm;
            codeHtml += isArray ? '' : "</form>";
            return codeHtml;
        };
        this.setFormDirective = function (formArray) {
            var codeTypescript = '', codeForm = '', codeSelectObject = '', codeAction = '', codeArrayAdd = '', codeArrayGet = '', codeArrayNew = '', codeArrayRemove = '', codeConstructor = 'constructor(', array, formIdAsPropertyName, formIdAsClassName;
            formArray.forEach(function (form) {
                codeForm = '',
                    codeAction = '',
                    codeSelectObject = '',
                    array = form.elements ? form.elements : form.tabs,
                    formIdAsPropertyName = _this.shared.idToPropertyName(form.id),
                    formIdAsClassName = _this.shared.idToClassName(form.id);
                /** Create code: form group */
                codeConstructor += "private " + formIdAsPropertyName + "FormBuilder: FormBuilder, private " + formIdAsPropertyName + "Route: ActivatedRoute, private " + formIdAsPropertyName + "Router: Router,";
                codeForm += formIdAsPropertyName + "Form = this." + formIdAsPropertyName + "FormBuilder.group({";
                if (form.elements) {
                    codeForm += _this.setFormDirectiveElement(array, formIdAsPropertyName).codeForm;
                }
                if (form.tabs) {
                    array.forEach(function (tab) {
                        codeForm += _this.setFormDirectiveElement(tab.elements, formIdAsPropertyName).codeForm;
                    });
                }
                codeForm += "});";
                codeForm += "setForm = () => {";
                codeForm += "if (!this.isAddModule) {console.log(29);";
                codeForm += "/** TO-DO */";
                codeForm += "/** Service this.userService.getById(this.id).pipe(first()).subscribe(x => this.form.patchValue(x));*/";
                codeForm += "}}";
                /** Create code: select object */
                if (form.elements) {
                    codeSelectObject += _this.setFormDirectiveElement(array, formIdAsPropertyName).codeSelectObject;
                }
                if (form.tabs) {
                    array.forEach(function (tab) {
                        codeSelectObject += _this.setFormDirectiveElement(tab.elements, formIdAsPropertyName).codeSelectObject;
                    });
                }
                /** Create code: form array */
                if (form.elements) {
                    codeArrayAdd += _this.setFormDirectiveElement(array, formIdAsPropertyName).codeArrayAdd;
                    codeArrayGet += _this.setFormDirectiveElement(array, formIdAsPropertyName).codeArrayGet;
                    codeArrayNew += _this.setFormDirectiveElement(array, formIdAsPropertyName).codeArrayNew;
                    codeArrayRemove += _this.setFormDirectiveElement(array, formIdAsPropertyName).codeArrayRemove;
                }
                if (form.tabs) {
                    array.forEach(function (tab) {
                        codeArrayAdd += _this.setFormDirectiveElement(tab.elements, formIdAsPropertyName).codeArrayAdd;
                        codeArrayGet += _this.setFormDirectiveElement(tab.elements, formIdAsPropertyName).codeArrayGet;
                        codeArrayNew += _this.setFormDirectiveElement(tab.elements, formIdAsPropertyName).codeArrayNew;
                        codeArrayRemove += _this.setFormDirectiveElement(tab.elements, formIdAsPropertyName).codeArrayRemove;
                    });
                }
                /** Create code: submit */
                if (form.elements) {
                    array.forEach(function (element) {
                        var _a, _b, _c, _d, _e;
                        // Create code: button action
                        if (((_a = element.button) === null || _a === void 0 ? void 0 : _a.type) === 'submit' && ((_b = element.button) === null || _b === void 0 ? void 0 : _b.action) && ((_c = element.button) === null || _c === void 0 ? void 0 : _c.action.type) === 'API') {
                            codeAction += formIdAsPropertyName + "Submit = () => {fetch('" + ((_d = element.button) === null || _d === void 0 ? void 0 : _d.action.url) + "', {method: '" + ((_e = element.button.action.verb) === null || _e === void 0 ? void 0 : _e.toUpperCase()) + "',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},body: JSON.stringify(this." + formIdAsPropertyName + "Form.value),}).then((data) => {data.json().then((keys) => {})});}";
                        }
                    });
                }
                if (form.tabs) {
                    array.forEach(function (tab) {
                        tab.elements.forEach(function (element) {
                            var _a, _b, _c, _d, _e;
                            // Create code: button action
                            if (((_a = element.button) === null || _a === void 0 ? void 0 : _a.type) === 'submit' && ((_b = element.button) === null || _b === void 0 ? void 0 : _b.action) && ((_c = element.button) === null || _c === void 0 ? void 0 : _c.action.type) === 'API') {
                                codeAction += formIdAsPropertyName + "Submit = () => {fetch('" + ((_d = element.button) === null || _d === void 0 ? void 0 : _d.action.url) + "', {method: '" + ((_e = element.button.action.verb) === null || _e === void 0 ? void 0 : _e.toUpperCase()) + "',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},body: JSON.stringify(this." + formIdAsPropertyName + "Form.value),}).then((data) => {data.json().then((keys) => {})});}";
                            }
                        });
                    });
                }
                if (form.actions) {
                    form.actions.elements.forEach(function (action) {
                        var _a, _b, _c, _d, _e;
                        // Create code: button action
                        if (((_a = action.button) === null || _a === void 0 ? void 0 : _a.type) === 'submit' && ((_b = action.button) === null || _b === void 0 ? void 0 : _b.action) && ((_c = action.button) === null || _c === void 0 ? void 0 : _c.action.type) === 'API') {
                            codeAction += formIdAsPropertyName + "Submit = () => {fetch('" + ((_d = action.button) === null || _d === void 0 ? void 0 : _d.action.url) + "', {method: '" + ((_e = action.button.action.verb) === null || _e === void 0 ? void 0 : _e.toUpperCase()) + "',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},body: JSON.stringify(this." + formIdAsPropertyName + "Form.value),}).then((data) => {data.json().then((keys) => {})});}";
                        }
                    });
                }
                codeConstructor += ") {this.setForm();};";
                codeTypescript += "import { Component } from '@angular/core';";
                codeTypescript += "import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';";
                codeTypescript += "import { ActivatedRoute, Router } from '@angular/router';";
                codeTypescript += "@Component({selector: 'app-" + form.id + "', templateUrl: './" + form.id + ".component.html', styleUrls: ['./" + form.id + ".component.css']})";
                codeTypescript += "export class " + formIdAsClassName + "Component {";
                codeTypescript += "id: string = this." + formIdAsPropertyName + "Route.snapshot.params['id']; isAddModule: boolean = !this.id;";
                codeTypescript += codeConstructor.replace(/\, \)/gi, ')').replace(/\, \,/gi, '');
                codeTypescript += codeSelectObject.replace(/\, \]/gi, ']').replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
                codeTypescript += codeForm.replace(/\, \]/gi, ']').replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
                codeTypescript += codeArrayNew + codeArrayAdd + codeArrayGet + codeArrayRemove;
                codeTypescript += codeAction;
                codeTypescript += "}";
            });
            return codeTypescript;
        };
        this.setFormDirectiveElement = function (array, formIdAsPropertyName, isArray) {
            var codeForm = '', codeSelectObject = '', codeArrayNew = '', codeArrayGet = '', codeArrayAdd = '', codeArrayRemove = '';
            array.forEach(function (element) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
                var typeEmail = (((_a = element.input) === null || _a === void 0 ? void 0 : _a.type) === 'email') ? true : false, typeText = (((_b = element.input) === null || _b === void 0 ? void 0 : _b.type) === 'text') ? true : false, typeNumber = (((_c = element.input) === null || _c === void 0 ? void 0 : _c.type) === 'number') ? true : false, typePassword = (((_d = element.input) === null || _d === void 0 ? void 0 : _d.type) === 'password') ? true : false, typeDate = (((_e = element.input) === null || _e === void 0 ? void 0 : _e.type) === 'date') ? true : false, required = ((_f = element.input) === null || _f === void 0 ? void 0 : _f.required) ? true : false;
                if (element.array) {
                    var add = 'add' + element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1), remove = 'remove' + element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1), newArray = 'new' + element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1);
                    codeForm += element.array.id + ": this." + formIdAsPropertyName + "FormBuilder.array([]),";
                    codeSelectObject += _this.setFormDirectiveElement(element.array.elements, formIdAsPropertyName, true).codeSelectObject;
                    codeArrayAdd += add + "() {this." + element.array.id + ".push(this." + newArray + "())}";
                    codeArrayGet += "get " + element.array.id + "(): FormArray {return this." + formIdAsPropertyName + "Form.get('" + element.array.id + "') as FormArray};";
                    codeArrayNew += newArray + "(): FormGroup { return this." + formIdAsPropertyName + "FormBuilder.group({";
                    codeArrayNew += _this.setFormDirectiveElement(element.array.elements, formIdAsPropertyName, true).codeForm;
                    codeArrayNew += "})};";
                    codeArrayRemove += remove + "(i:number) {this." + element.array.id + ".removeAt(i)}";
                }
                if (typeText || typePassword || typeEmail || typeDate || typeNumber) {
                    codeForm += ((_g = element.input) === null || _g === void 0 ? void 0 : _g.name) + ": [" + (((_h = element.input) === null || _h === void 0 ? void 0 : _h.defaultValue) ? "'" + ((_j = element.input) === null || _j === void 0 ? void 0 : _j.defaultValue) + "'" : null) + ", [" + (required ? 'Validators.required,' : '') + " " + (typeEmail ? 'Validators.email,' : '') + "]],";
                }
                if ((_k = element.select) === null || _k === void 0 ? void 0 : _k.options) {
                    codeForm += ((_l = element.select) === null || _l === void 0 ? void 0 : _l.name) + ": [" + (((_m = element.select) === null || _m === void 0 ? void 0 : _m.defaultValue) ? "'" + ((_o = element.select) === null || _o === void 0 ? void 0 : _o.defaultValue) + "'" : null) + ", [" + (required ? 'Validators.required,' : '') + " " + (typeEmail ? 'Validators.email,' : '') + "]],";
                    if ((_q = (_p = element.select) === null || _p === void 0 ? void 0 : _p.options) === null || _q === void 0 ? void 0 : _q.object) {
                        var objectArray = element.select.options.object;
                        codeSelectObject += element.select.name + "SelectObject = [";
                        objectArray.forEach(function (selectObject) {
                            codeSelectObject += "{value: '" + selectObject.value + "', valueView: '" + selectObject.valueView + "'}, ";
                        });
                        codeSelectObject += "];";
                    }
                }
            });
            return { codeForm: codeForm, codeSelectObject: codeSelectObject, codeArrayAdd: codeArrayAdd, codeArrayGet: codeArrayGet, codeArrayNew: codeArrayNew, codeArrayRemove: codeArrayRemove };
        };
        this.setFormService = function (formArray) {
            var codeTypescript = '', codeForm = '', codeAction = '', array, formIdAsPropertyName, formIdAsClassName;
            formArray.forEach(function (form) {
                codeAction = '',
                    array = form.elements,
                    formIdAsPropertyName = _this.shared.idToPropertyName(form.id),
                    formIdAsClassName = _this.shared.idToClassName(form.id);
                array.forEach(function (element) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                    var typeEmail = (((_a = element.input) === null || _a === void 0 ? void 0 : _a.type) === 'email') ? true : false, typeText = (((_b = element.input) === null || _b === void 0 ? void 0 : _b.type) === 'text') ? true : false, typePassword = (((_c = element.input) === null || _c === void 0 ? void 0 : _c.type) === 'password') ? true : false, typeNumber = (((_d = element.input) === null || _d === void 0 ? void 0 : _d.type) === 'number') ? true : false, typeDate = (((_e = element.input) === null || _e === void 0 ? void 0 : _e.type) === 'date') ? true : false, required = ((_f = element.input) === null || _f === void 0 ? void 0 : _f.required) ? true : false;
                    // Create code: attribute
                    if (typeText || typePassword || typeEmail) {
                        codeForm += ((_g = element.input) === null || _g === void 0 ? void 0 : _g.name) + " " + (required ? ':' : '?:') + " 'string', ";
                    }
                    codeForm += typeNumber ? ((_h = element.input) === null || _h === void 0 ? void 0 : _h.name) + " " + (required ? ':' : '?:') + " 'number', " : '';
                    codeForm += typeDate ? ((_j = element.input) === null || _j === void 0 ? void 0 : _j.name) + " " + (required ? ':' : '?:') + " 'date', " : '';
                });
                codeForm += "};";
                codeTypescript += "export interface " + formIdAsClassName + "Interface {";
                codeTypescript += codeForm.replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
                codeTypescript += "}";
            });
            codeTypescript = "import { Observable, throwError } from 'rxjs'; import { catchError, retry } from 'rxjs/operators';";
        };
        this.setFormInterface = function (formArray) {
            var codeTypescript = '', codeForm = '', codeAction = '', array, formIdAsPropertyName, formIdAsClassName;
            formArray.forEach(function (form) {
                codeAction = '',
                    array = form.elements ? form.elements : form.tabs,
                    formIdAsPropertyName = _this.shared.idToPropertyName(form.id),
                    formIdAsClassName = _this.shared.idToClassName(form.id);
                if (form.elements) {
                    array.forEach(function (element) {
                        var _a, _b, _c, _d, _e, _f, _g;
                        var typeEmail = (((_a = element.input) === null || _a === void 0 ? void 0 : _a.type) === 'email') ? true : false, typeText = (((_b = element.input) === null || _b === void 0 ? void 0 : _b.type) === 'text') ? true : false, typePassword = (((_c = element.input) === null || _c === void 0 ? void 0 : _c.type) === 'password') ? true : false, 
                        // typeNumber = (element.input?.type === 'number') ? true : false,
                        typeDate = (((_d = element.input) === null || _d === void 0 ? void 0 : _d.type) === 'date') ? true : false, required = ((_e = element.input) === null || _e === void 0 ? void 0 : _e.required) ? true : false;
                        // Create code: attribute
                        if (typeText || typePassword || typeEmail) {
                            codeForm += ((_f = element.input) === null || _f === void 0 ? void 0 : _f.name) + " " + (required ? ':' : '?:') + " 'string', ";
                        }
                        // codeForm += typeNumber ? `${element.input?.name} ${required ? ':' : '?:'} 'number', `: '';
                        codeForm += typeDate ? ((_g = element.input) === null || _g === void 0 ? void 0 : _g.name) + " " + (required ? ':' : '?:') + " 'date', " : '';
                    });
                }
                if (form.tabs) {
                    array.forEach(function (tab) {
                        tab.elements.forEach(function (element) {
                            var _a, _b, _c, _d, _e, _f, _g;
                            var typeEmail = (((_a = element.input) === null || _a === void 0 ? void 0 : _a.type) === 'email') ? true : false, typeText = (((_b = element.input) === null || _b === void 0 ? void 0 : _b.type) === 'text') ? true : false, typePassword = (((_c = element.input) === null || _c === void 0 ? void 0 : _c.type) === 'password') ? true : false, 
                            // typeNumber = (element.input?.type === 'number') ? true : false,
                            typeDate = (((_d = element.input) === null || _d === void 0 ? void 0 : _d.type) === 'date') ? true : false, required = ((_e = element.input) === null || _e === void 0 ? void 0 : _e.required) ? true : false;
                            // Create code: attribute
                            if (typeText || typePassword || typeEmail) {
                                codeForm += ((_f = element.input) === null || _f === void 0 ? void 0 : _f.name) + " " + (required ? ':' : '?:') + " 'string', ";
                            }
                            // codeForm += typeNumber ? `${element.input?.name} ${required ? ':' : '?:'} 'number', `: '';
                            codeForm += typeDate ? ((_g = element.input) === null || _g === void 0 ? void 0 : _g.name) + " " + (required ? ':' : '?:') + " 'date', " : '';
                        });
                    });
                }
                codeForm += "};";
                codeTypescript += "export interface " + formIdAsClassName + "Interface {";
                codeTypescript += codeForm.replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
                codeTypescript += "}";
            });
            /**
             * TO-DO
             * Deal with enums
             */
            return codeTypescript;
        };
    }
    return FormAngular;
}());
exports.FormAngular = FormAngular;
