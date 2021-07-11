"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableAngular = void 0;
var frontend_1 = require("../../../../interfaces/frontend");
var shared_functions_1 = require("./shared-functions");
var form_1 = require("./form");
var TableAngular = /** @class */ (function () {
    function TableAngular() {
        var _this = this;
        this.sharedFunctions = new shared_functions_1.SharedFunctions;
        this.form = new form_1.FormAngular;
        this.setTableHtml = function (table) {
            var codeHtml = '', rowMenu = '', codeTable = '', codeTableForm = '', array = table.elements, tableIdAsPropertyName = _this.sharedFunctions.setIdToPropertyName(table.id), tableIdAsClassName = _this.sharedFunctions.setIdToClassName(table.id);
            /**
             * Form over table
             */
            if (table.actions) {
                var form = table.actions, importObject = {}, formIdAsClassName = _this.sharedFunctions.setIdToClassName(form === null || form === void 0 ? void 0 : form.id), formPropertyName = _this.sharedFunctions.setIdToPropertyName(form === null || form === void 0 ? void 0 : form.id);
                codeTableForm +=
                    "<mat-card>\n                <mat-card-header>\n                    <mat-card-subtitle>\n                        Filtragem <mat-icon>search</mat-icon>\n                    </mat-card-subtitle>\n                </mat-card-header>\n                <form id=\"" + form.id + "\" [formGroup]=\"" + formPropertyName + "Form\" (ngSubmit)=\"" + formPropertyName + "Submit()\">\n                    " + _this.form.setFormHtml(table.actions, true) + "\n                </form>\n            </mat-card>";
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
                        var _a, _b;
                        menuButtonAction = '';
                        if (menuItem.action.type && menuItem.action.type == frontend_1.RequestTypeEnum.Link)
                            menuButtonAction = "[routerLink]=\"['" + menuItem.action.url + "']\"";
                        if (menuItem.dialog && ((_a = menuItem.dialog) === null || _a === void 0 ? void 0 : _a.templateFolder)) {
                            var dialogTemplateAsPropertyName = _this.sharedFunctions.setIdToPropertyName((_b = menuItem.dialog) === null || _b === void 0 ? void 0 : _b.templateFolder);
                            menuButtonAction = "(click)=\"" + dialogTemplateAsPropertyName + "OpenDialog()\"";
                        }
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
            return codeHtml;
        };
        this.setTableDirective = function (table) {
            //         let codeTypescript = '',
            //             codeConstructor = 'constructor(',
            //             codeDialogImport: string = '',
            //             codeTable = '',
            //             codeTableForm = '',
            //             codeAction = '',
            //             array,
            //             tableIdAsPropertyName: string,
            //             tableIdAsClassName,
            //             hasDialog: boolean = false;
            //         tableArray.forEach((table: Table) => {
            //             hasDialog = false,
            //             codeDialogImport = '',
            //             codeTable = '',
            //             codeTableForm = '',
            //             array = table.elements,
            //             tableIdAsPropertyName = this.sharedFunctions.setIdToPropertyName(table.id),
            //             tableIdAsClassName = this.sharedFunctions.setIdToClassName(table.id);
            //             /**
            //              * Form over table
            //              */
            //             if (table.actions) {
            //                 codeTableForm += this.form.setFormDirective([table.actions], true);
            //             }
            //             if (table.data.type === 'API') {
            //                 codeAction += `${tableIdAsPropertyName}Table = () => {fetch('${table.data.url}', {method: 'GET',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},}).then((data) => {data.json().then((keys) => {return keys;})});}`;
            //             }
            //             codeTable += `${tableIdAsPropertyName}DataSource =`;
            //             codeTable += table.object ? `${JSON.stringify(table.object)};` : `this.${tableIdAsPropertyName}Table();`;
            //             codeTable += `${tableIdAsPropertyName}DisplayedColumns: string[] = [`;
            //             array.forEach((element: TableElement) => {
            //                 codeTable += `'${element.row.field}',`;
            //             });
            //             codeTable += `];`;
            //             if (hasDialog) {
            //                 codeConstructor += `private ${tableIdAsPropertyName}Dialog: MatDialog`;
            //                 codeDialogImport += `import {MatDialog} from '@angular/material/dialog';`;
            //             }
            //             codeConstructor += `) {};`;
            //             codeTypescript += `import { Component } from '@angular/core';`;
            //             codeTypescript += codeDialogImport;
            //             codeTypescript += `@Component({selector: 'app-${table.id}', templateUrl: './${table.id}.component.html', styleUrls: ['./${table.id}.component.css']})`;
            //             codeTypescript += `export class ${tableIdAsClassName}Component {`;
            //             codeTypescript += codeConstructor.replace(/\, \)/gi, ')').replace(/\, \,/gi, '');
            //             codeTypescript += codeTable.replace(',]', ']');
            //             codeTypescript += codeTableForm.replace(',]', ']');
            //             codeTypescript += codeAction;
            //             codeTypescript += `}`;
            //         });
            //         return codeTypescript;
            //     }
            //     setTableService = (tableArray: any) => {}
            //     setTableInterface = (tableArray: any) => {
            //         // TO-DO
        };
    }
    return TableAngular;
}());
exports.TableAngular = TableAngular;
