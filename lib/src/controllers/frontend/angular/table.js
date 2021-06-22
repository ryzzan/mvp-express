"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableAngular = void 0;
var shared_functions_1 = require("./shared-functions");
var TableAngular = /** @class */ (function () {
    function TableAngular() {
        var _this = this;
        this.shared = new shared_functions_1.SharedFunctions;
        this.setTableHtml = function (tableArray) {
            var codeHtml = '', rowMenu = '';
            tableArray.forEach(function (table) {
                var codeTable = '', array = table.elements, tableIdAsPropertyName = _this.shared.idToPropertyName(table.id), tableIdAsClassName = _this.shared.idToClassName(table.id);
                array.forEach(function (element) {
                    var _a;
                    var rowElement = '';
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
                            rowMenu += "<button mat-menu-item>";
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
                codeHtml += "<table mat-table [dataSource]=\"" + tableIdAsPropertyName + "DataSource\" class=\"mat-elevation-z8\">";
                codeHtml += codeTable;
                codeHtml += "</table>";
                codeHtml += rowMenu;
            });
            return codeHtml;
        };
        this.setTableDirective = function (tableArray) {
            var codeTypescript = '', codeTable = '', codeAction = '', array, tableIdAsPropertyName, tableIdAsClassName;
            tableArray.forEach(function (table) {
                codeTable = '',
                    array = table.elements,
                    tableIdAsPropertyName = _this.shared.idToPropertyName(table.id),
                    tableIdAsClassName = _this.shared.idToClassName(table.id);
                if (table.data.type === 'API') {
                    codeAction += tableIdAsPropertyName + "Table = () => {fetch('" + table.data.url + "', {method: 'GET',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},}).then((data) => {data.json().then((keys) => {return keys;})});}";
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
        this.setTableService = function (tableArray) {
        };
        this.setTableInterface = function (tableArray) {
            // TO-DO
        };
    }
    return TableAngular;
}());
exports.TableAngular = TableAngular;
