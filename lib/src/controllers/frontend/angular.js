"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeToAngular = void 0;
var CodeToAngular = /** @class */ (function () {
    function CodeToAngular() {
        var _this = this;
        this.setAngularCode = function (objectToCode) {
            var codeHtml = '', codeDirective = '', codeInterface = '';
            if (objectToCode.form) {
                codeHtml += _this.setFormHtml(objectToCode.form);
                codeDirective += _this.setFormDirective(objectToCode.form);
                codeInterface += _this.setFormInterface(objectToCode.form);
            }
            if (objectToCode.table) {
                codeHtml += _this.setTableHtml(objectToCode.table);
                codeDirective += _this.setTableDirective(objectToCode.table);
                codeInterface += _this.setTableInterface(objectToCode.form);
            }
            return { html: codeHtml, directive: codeDirective, interface: codeInterface };
        };
        this.setFormHtml = function (formArray) {
            var codeHtml = '';
            formArray.forEach(function (form) {
                var array = form.elements, formIdAsPropertyName = _this.idToPropertyName(form.id);
                codeHtml += _this.setFormHtmlElement(form, array, formIdAsPropertyName);
            });
            return codeHtml;
        };
        this.setFormHtmlElement = function (form, array, formIdAsPropertyName, isArray) {
            var codeHtml = '', codeForm = '';
            array.forEach(function (element) {
                if (element.array) {
                    codeForm += "<mat-card *ngFor=\"let " + element.array.id + "Item of " + formIdAsPropertyName + "FormGroups." + element.array.id + "; index as i\">";
                    codeForm += "<mat-card-header>" + element.array.label + " {{1 + i}}<mat-card-header>";
                    codeForm += _this.setFormHtmlElement(form, element.array.elements, formIdAsPropertyName, true);
                    codeForm += "</mat-card>";
                }
                // Create code: input
                if (element.input) {
                    var input = element.input;
                    codeForm += "<mat-form-field>";
                    codeForm += "<mat-label>" + input.label + "</mat-label>";
                    codeForm += "<input matInput type=\"" + input.type + "\" formControlName=\"" + input.name + "\" id=\"" + input.id + "\" placeholder=\"" + input.placeholder + "\" " + (input.required ? 'required' : '') + " ngModel autocomplete=\"new-password\">";
                    codeForm += "</mat-form-field>";
                }
                // Create code: select
                if (element.select) {
                    var select = element.select;
                    codeForm += "<mat-form-field>";
                    codeForm += "<mat-label>" + select.label + "</mat-label>";
                    codeForm += "<mat-select><mat-option *ngFor=\"let " + select.name + "Item of " + select.name + "SelectObject\" [value]=\"" + select.name + "Item.value\">{{" + select.name + "Item.valueView}}</mat-option></mat-select>";
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
        this.setTableHtml = function (tableArray) {
            var codeHtml = '';
            tableArray.forEach(function (table) {
                var codeTable = '', array = table.elements, tableIdAsPropertyName = _this.idToPropertyName(table.id), tableIdAsClassName = _this.idToClassName(table.id);
                array.forEach(function (element) {
                    codeTable += "<ng-container matColumnDef=\"" + element.row.field + "\">";
                    codeTable += "<th mat-header-cell *matHeaderCellDef> " + element.column.label + " </th>";
                    codeTable += "<td mat-cell *matCellDef=\"let element\"> {{element." + element.row.field + "}} </td>";
                    codeTable += "</ng-container>";
                });
                codeTable += "<tr mat-header-row *matHeaderRowDef=\"" + tableIdAsPropertyName + "DisplayedColumns\"></tr>";
                codeTable += "<tr mat-row *matRowDef=\"let row; columns: " + tableIdAsPropertyName + "DisplayedColumns;\"></tr>";
                codeHtml += "<table mat-table [dataSource]=\"" + tableIdAsPropertyName + "DataSource\" class=\"mat-elevation-z8\">";
                codeHtml += codeTable;
                codeHtml += "</table>";
            });
            return codeHtml;
        };
        this.setFormDirective = function (formArray) {
            var codeTypescript = '', codeForm = '', codeSelectObject = '', codeAction = '', array, formIdAsPropertyName, formIdAsClassName;
            formArray.forEach(function (form) {
                codeForm = '',
                    codeAction = '',
                    codeSelectObject = '',
                    array = form.elements,
                    formIdAsPropertyName = _this.idToPropertyName(form.id),
                    formIdAsClassName = _this.idToClassName(form.id);
                // Create code: form group
                codeForm += formIdAsPropertyName + "Form = new FormGroup({";
                array.forEach(function (element) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                    var typeEmail = (((_a = element.input) === null || _a === void 0 ? void 0 : _a.type) === 'email') ? true : false, typeText = (((_b = element.input) === null || _b === void 0 ? void 0 : _b.type) === 'text') ? true : false, typePassword = (((_c = element.input) === null || _c === void 0 ? void 0 : _c.type) === 'password') ? true : false, typeDate = (((_d = element.input) === null || _d === void 0 ? void 0 : _d.type) === 'date') ? true : false, required = ((_e = element.input) === null || _e === void 0 ? void 0 : _e.required) ? true : false;
                    if (typeText || typePassword || typeEmail || typeDate) {
                        codeForm += "'" + ((_f = element.input) === null || _f === void 0 ? void 0 : _f.name) + "': new FormControl(" + (((_g = element.input) === null || _g === void 0 ? void 0 : _g.defaultValue) ? "'" + ((_h = element.input) === null || _h === void 0 ? void 0 : _h.defaultValue) + "'" : null) + ", [" + (required ? 'Validators.required,' : '') + " " + (typeEmail ? 'Validators.email,' : '') + "]), ";
                    }
                    // Create code: select
                    if ((_k = (_j = element.select) === null || _j === void 0 ? void 0 : _j.options) === null || _k === void 0 ? void 0 : _k.object) {
                    }
                });
                codeForm += "});";
                // Create code: submit
                array.forEach(function (element) {
                    var _a, _b, _c, _d, _e;
                    // Create code: button action
                    if (((_a = element.button) === null || _a === void 0 ? void 0 : _a.type) === 'submit' && ((_b = element.button) === null || _b === void 0 ? void 0 : _b.action) && ((_c = element.button) === null || _c === void 0 ? void 0 : _c.action.type) === 'API') {
                        codeAction += formIdAsPropertyName + "Submit = () => {fetch('" + ((_d = element.button) === null || _d === void 0 ? void 0 : _d.action.url) + "', {method: '" + ((_e = element.button) === null || _e === void 0 ? void 0 : _e.action.verb.toUpperCase()) + "',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},body: JSON.stringify(this." + formIdAsPropertyName + "Form.value),}).then((data) => {data.json().then((keys) => {})});}";
                    }
                });
                // Create code: select object
                array.forEach(function (element) {
                    var _a, _b;
                    // Create code: select
                    if ((_b = (_a = element.select) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.object) {
                        var objectArray = element.select.options.object;
                        codeForm += element.select.name + "SelectObject = [";
                        objectArray.forEach(function (selectObject) {
                            codeForm += "{value: '" + selectObject.value + "', valueView: '" + selectObject.valueView + "'}, ";
                        });
                        codeForm += "];";
                    }
                });
                codeTypescript += "import { Component } from '@angular/core';";
                codeTypescript += "import { FormControl, FormGroup, Validators } from '@angular/forms';";
                codeTypescript += "@Component({selector: 'app-" + form.id + "', templateUrl: './" + form.id + ".component.html', styleUrls: ['./" + form.id + ".component.css']})";
                codeTypescript += "export class " + formIdAsClassName + "Component {";
                codeTypescript += codeForm.replace(/\, \]/gi, ']').replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
                codeTypescript += codeAction;
                codeTypescript += "}";
            });
            return codeTypescript;
        };
        this.setTableDirective = function (tableArray) {
            var codeTypescript = '', codeTable = '', codeAction = '', array, tableIdAsPropertyName, tableIdAsClassName;
            tableArray.forEach(function (table) {
                codeTable = '',
                    array = table.elements,
                    tableIdAsPropertyName = _this.idToPropertyName(table.id),
                    tableIdAsClassName = _this.idToClassName(table.id);
                if (table.action.type === 'api') {
                    codeAction += tableIdAsPropertyName + "Table = () => {fetch('" + table.action.url + "', {method: 'GET',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},}).then((data) => {data.json().then((keys) => {return keys;})});}";
                }
                codeTable += tableIdAsPropertyName + "DataSource = this." + tableIdAsPropertyName + "Table();";
                codeTable += tableIdAsPropertyName + "DisplayedColumns: string[] = [";
                array.forEach(function (element) {
                    codeTable += "'" + element.row.field + "',";
                });
                codeTable += "]";
                codeTypescript += "import { Component } from '@angular/core';";
                codeTypescript += "@Component({selector: 'app-" + table.id + "', templateUrl: './" + table.id + ".component.html', styleUrls: ['./" + table.id + ".component.css']})";
                codeTypescript += "export class " + tableIdAsClassName + "Component {";
                codeTypescript += codeTable.replace(',]', ']');
                codeTypescript += codeAction;
                codeTypescript += "}";
            });
            return codeTypescript;
        };
        this.setFormService = function (formArray) {
            var codeTypescript = '', codeForm = '', codeAction = '', array, formIdAsPropertyName, formIdAsClassName;
            formArray.forEach(function (form) {
                codeAction = '',
                    array = form.elements,
                    formIdAsPropertyName = _this.idToPropertyName(form.id),
                    formIdAsClassName = _this.idToClassName(form.id);
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
        this.setTableService = function (formArray) {
        };
        this.setFormInterface = function (formArray) {
            var codeTypescript = '', codeForm = '', codeAction = '', array, formIdAsPropertyName, formIdAsClassName;
            formArray.forEach(function (form) {
                codeAction = '',
                    array = form.elements,
                    formIdAsPropertyName = _this.idToPropertyName(form.id),
                    formIdAsClassName = _this.idToClassName(form.id);
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
            /**
             * TO-DO
             * Deal with enums
             */
            return codeTypescript;
        };
        this.setTableInterface = function (formArray) {
            // TO-DO
        };
        this.idToPropertyName = function (id) {
            var propertyName = '';
            var array = id.split('-');
            propertyName += array[0];
            for (var i = 0; i < array.length; i++) {
                var element = array[i];
                if (i > 0)
                    propertyName += element.charAt(0).toUpperCase() + element.slice(1);
            }
            return propertyName;
        };
        this.idToClassName = function (id) {
            var className = '';
            var array = id.split('-');
            className += array[0].charAt(0).toUpperCase() + array[0].slice(1);
            for (var i = 0; i < array.length; i++) {
                var element = array[i];
                if (i > 0)
                    className += element.charAt(0).toUpperCase() + element.slice(1);
            }
            return className;
        };
    }
    return CodeToAngular;
}());
exports.CodeToAngular = CodeToAngular;
