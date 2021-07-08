"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeToAngular = void 0;
/**
 * TO-DO
 *  - Tree
 *  - Services
 */
var directive_1 = require("./angular/directive");
var form_1 = require("./angular/form");
var shared_functions_1 = require("./angular/shared-functions");
var table_1 = require("./angular/table");
// import { TreeAngular } from './angular/tree';
var CodeToAngular = /** @class */ (function () {
    function CodeToAngular() {
        var _this = this;
        this.formAngular = new form_1.FormAngular;
        this.directive = new directive_1.Directive;
        this.tableAngular = new table_1.TableAngular;
        // treeAngular = new TreeAngular;
        this.sharedFunction = new shared_functions_1.SharedFunctions;
        this.setAngularCode = function (objectToCode) {
            var codeTemplate = '', codeDirective = '', codeInterface = '';
            var form = objectToCode.form, table = objectToCode.table;
            if (form) {
                var importObject = {}, formIdAsClassName = _this.sharedFunction.setIdToClassName(form === null || form === void 0 ? void 0 : form.id), formPropertyName = _this.sharedFunction.setIdToPropertyName(form === null || form === void 0 ? void 0 : form.id);
                codeTemplate += "<mat-card><form id=\"" + form.id + "\" [formGroup]=\"" + formPropertyName + "Form\" (ngSubmit)=\"" + formPropertyName + "Submit()\">";
                codeTemplate += _this.formAngular.setFormHtml(form);
                codeTemplate += "</form></mat-card>";
                codeDirective += _this.directive.setImport(objectToCode, importObject);
                codeDirective += "@Component({selector: 'app-" + form.id + "', templateUrl: './" + form.id + ".component.html', styleUrls: ['./" + form.id + ".component.css']})";
                codeDirective += "export class " + formIdAsClassName + "Component {";
                codeDirective += _this.directive.setClassConstructor(objectToCode);
                codeDirective += _this.directive.setObject(objectToCode);
                codeDirective += "}";
                // codeInterface +=  this.formAngular.setFormInterface(form);
            }
            if (table) {
                var importObject = {}, tableIdAsClassName = _this.sharedFunction.setIdToClassName(table === null || table === void 0 ? void 0 : table.id);
                codeTemplate += _this.tableAngular.setTableHtml(table);
                codeDirective += _this.directive.setImport(objectToCode, importObject);
                codeDirective += "@Component({selector: 'app-" + table.id + "', templateUrl: './" + table.id + ".component.html', styleUrls: ['./" + table.id + ".component.css']})";
                codeDirective += "export class " + tableIdAsClassName + "Component {";
                codeDirective += _this.directive.setClassConstructor(objectToCode);
                codeDirective += _this.directive.setTableObject(objectToCode);
                codeDirective += _this.directive.setObject(objectToCode);
                codeDirective += "}";
                //     codeInterface +=  this.tableAngular.setTableInterface(table);
            }
            // if (objectToCode.tree) {
            //     codeTemplate += this.treeAngular.setTreeHtml(objectToCode.tree);
            //     codeDirective += this.treeAngular.setTreeDirective(objectToCode.tree);
            //     codeInterface +=  this.treeAngular.setTreeInterface(objectToCode.tree);
            // }
            return {
                template: codeTemplate,
                directive: codeDirective.replace(/\, \]/gi, ']').replace(/\, \}/gi, '}').replace(/\, \,/gi, ''),
                interface: codeInterface
            };
        };
    }
    return CodeToAngular;
}());
exports.CodeToAngular = CodeToAngular;
