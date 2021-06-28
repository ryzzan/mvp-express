"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableAngular = void 0;
var frontend_1 = require("../../../../interfaces/frontend");
var shared_functions_1 = require("./shared-functions");
var form_1 = require("./form");
var TableAngular = /** @class */ (function () {
    function TableAngular() {
        var _this = this;
        this.shared = new shared_functions_1.SharedFunctions;
        this.form = new form_1.FormAngular;
        this.setTableHtml = function (tableArray) {
            var codeHtml = '', rowMenu = '';
            tableArray.forEach(function (table) {
                var codeTable = '', codeTableForm = '', array = table.elements, tableIdAsPropertyName = _this.shared.stringToLowerCamelCaseName(table.id), tableIdAsClassName = _this.shared.stringToUpperCamelCase(table.id);
                /**
                 * Form over table
                 */
                if (table.actions) {
                    codeTableForm += _this.form.setFormHtml([table.actions], true);
                }
                /**
                 * Elements over table
                 */
                array.forEach(function (element) {
                    var _a;
                    var rowElement = '', menuButtonAction = '';
                    if (element.row.type !== 'menu')
                        rowElement = "{{element." + element.row.field + "}}";
                    if (element.row.type === 'menu') {
                        /** Trigger to menu */
                        rowElement += "<button mat-icon-button class=\"icon\" aria-label=\"" + tableIdAsClassName + "\" [matMenuTriggerFor]=\"" + tableIdAsPropertyName + "Menu\">";
                        rowElement += "<mat-icon>" + element.row.icon + "</mat-icon>";
                        rowElement += "</button>";
                        /** Menu itself */
                        rowMenu += "<mat-menu #" + tableIdAsPropertyName + "Menu=\"matMenu\">";
                        (_a = element.row.menu) === null || _a === void 0 ? void 0 : _a.forEach(function (menuItem) {
                            menuButtonAction = '';
                            if (menuItem.action.type && menuItem.action.type == frontend_1.RequestTypeEnum.Link)
                                menuButtonAction = "[routerLink]=\"['" + menuItem.action.url + "']\"";
                            if (menuItem.action.type && menuItem.action.type == frontend_1.RequestTypeEnum.Dialog)
                                menuButtonAction = "(click)=\"" + tableIdAsPropertyName + "OpenDialog()\"";
                            rowMenu += "<button mat-menu-item " + menuButtonAction + ">";
                            rowMenu += menuItem.icon ? "<mat-icon>" + menuItem.icon + "</mat-icon>" : '';
                            rowMenu += "<span>" + menuItem.label + "</span>";
                            rowMenu += "</button>";
                        });
                        rowMenu += "</mat-menu>";
                    }
                    codeTable += "<ng-container matColumnDef=\"" + element.row.field + "\">";
                    codeTable += "<th mat-header-cell *matHeaderCellDef> " + element.column.label + " </th>";
                    codeTable += "<td mat-cell *matCellDef=\"let element\"> " + rowElement + " </td>";
                    codeTable += "</ng-container>";
                });
                codeTable += "<tr mat-header-row *matHeaderRowDef=\"" + tableIdAsPropertyName + "DisplayedColumns\"></tr>";
                codeTable += "<tr mat-row *matRowDef=\"let row; columns: " + tableIdAsPropertyName + "DisplayedColumns;\"></tr>";
                codeHtml += "<mat-card>";
                if (table.title)
                    codeHtml += "<mat-card-title>" + table.title + "</mat-card-title>";
                if (table.subtitle)
                    codeHtml += "<mat-card-subtitle>" + table.subtitle + "</mat-card-subtitle>";
                codeHtml += codeTableForm;
                codeHtml += "<table mat-table [dataSource]=\"" + tableIdAsPropertyName + "DataSource\" class=\"mat-elevation-z8\">";
                codeHtml += codeTable;
                codeHtml += "</table>";
                codeHtml += "</mat-card>";
                codeHtml += rowMenu;
            });
            return codeHtml;
        };
        this.setTableDirective = function (tableArray) {
            var codeTypescript = '', codeConstructor = 'constructor(', codeDialogImport = '', codeTable = '', codeTableForm = '', codeAction = '', array, tableIdAsPropertyName, tableIdAsClassName, hasDialog = false;
            tableArray.forEach(function (table) {
                var _a, _b, _c, _d, _e, _f, _g;
                hasDialog = false,
                    codeDialogImport = '',
                    codeTable = '',
                    codeTableForm = '',
                    array = table.elements,
                    tableIdAsPropertyName = _this.shared.stringToLowerCamelCaseName(table.id),
                    tableIdAsClassName = _this.shared.stringToUpperCamelCase(table.id);
                /**
                 * Create code: call to dialog
                 */
                if ((_a = table.actions) === null || _a === void 0 ? void 0 : _a.dialog) {
                    hasDialog = true;
                    codeDialogImport += "import { " + ((_b = table.actions.dialog) === null || _b === void 0 ? void 0 : _b.template) + " } from '../" + ((_c = table.actions.dialog) === null || _c === void 0 ? void 0 : _c.id) + "/" + ((_d = table.actions.dialog) === null || _d === void 0 ? void 0 : _d.id) + ".component';";
                    codeAction += tableIdAsPropertyName + "OpenDialog = () => {";
                    codeAction += "const " + tableIdAsPropertyName + "DialogRef = this." + tableIdAsPropertyName + "Dialog.open(" + ((_e = table.actions.dialog) === null || _e === void 0 ? void 0 : _e.template) + "),{";
                    if ((_f = table.actions.dialog) === null || _f === void 0 ? void 0 : _f.dialogDataInterface) {
                        codeAction += ",data:";
                        codeAction += _this.shared.objectToString((_g = table.actions) === null || _g === void 0 ? void 0 : _g.dialog.dialogDataInterface);
                    }
                    codeAction += "})";
                    codeAction += "};";
                }
                table.elements.forEach(function (element) {
                    if (element.row.menu) {
                        element.row.menu.forEach(function (menu) {
                            var _a, _b, _c, _d;
                            if (menu.dialog) {
                                hasDialog = true;
                                codeDialogImport += "import { " + ((_a = menu.dialog) === null || _a === void 0 ? void 0 : _a.template) + " } from '../" + ((_b = menu.dialog) === null || _b === void 0 ? void 0 : _b.id) + "/" + ((_c = menu.dialog) === null || _c === void 0 ? void 0 : _c.id) + ".component';";
                                codeAction += tableIdAsPropertyName + "OpenDialog = () => {";
                                codeAction += "const " + tableIdAsPropertyName + "DialogRef = this." + tableIdAsPropertyName + "Dialog.open(" + ((_d = menu.dialog) === null || _d === void 0 ? void 0 : _d.template) + ",{";
                                if (menu.dialog.dialogDataInterface) {
                                    codeAction += ",data:";
                                    codeAction += _this.shared.objectToString(menu.dialog.dialogDataInterface);
                                }
                                codeAction += "})";
                                codeAction += "};";
                            }
                        });
                    }
                });
                /**
                 * Form over table
                 */
                if (table.actions) {
                    codeTableForm += _this.form.setFormDirective([table.actions], true);
                }
                if (table.data.type === 'API') {
                    codeAction += tableIdAsPropertyName + "Table = () => {fetch('" + table.data.url + "', {method: 'GET',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},}).then((data) => {data.json().then((keys) => {return keys;})});}";
                }
                codeTable += tableIdAsPropertyName + "DataSource =";
                codeTable += table.object ? JSON.stringify(table.object) + ";" : "this." + tableIdAsPropertyName + "Table();";
                codeTable += tableIdAsPropertyName + "DisplayedColumns: string[] = [";
                array.forEach(function (element) {
                    codeTable += "'" + element.row.field + "',";
                });
                codeTable += "];";
                if (hasDialog) {
                    codeConstructor += "private " + tableIdAsPropertyName + "Dialog: MatDialog";
                    codeDialogImport += "import {MatDialog} from '@angular/material/dialog';";
                }
                codeConstructor += ") {};";
                codeTypescript += "import { Component } from '@angular/core';";
                codeTypescript += codeDialogImport;
                codeTypescript += "@Component({selector: 'app-" + table.id + "', templateUrl: './" + table.id + ".component.html', styleUrls: ['./" + table.id + ".component.css']})";
                codeTypescript += "export class " + tableIdAsClassName + "Component {";
                codeTypescript += codeConstructor.replace(/\, \)/gi, ')').replace(/\, \,/gi, '');
                codeTypescript += codeTable.replace(',]', ']');
                codeTypescript += codeTableForm.replace(',]', ']');
                codeTypescript += codeAction;
                codeTypescript += "}";
            });
            return codeTypescript;
        };
        this.setTableService = function (tableArray) { };
        this.setTableInterface = function (tableArray) {
            // TO-DO
        };
    }
    return TableAngular;
}());
exports.TableAngular = TableAngular;
