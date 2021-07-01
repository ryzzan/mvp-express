"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeToAngular = void 0;
var form_1 = require("./angular/form");
// import { TableAngular } from './angular/table';
// import { TreeAngular } from './angular/tree';
var CodeToAngular = /** @class */ (function () {
    function CodeToAngular() {
        var _this = this;
        this.formAngular = new form_1.FormAngular;
        // tableAngular = new TableAngular;
        // treeAngular = new TreeAngular;
        this.setAngularCode = function (objectToCode) {
            var codeHtml = '', codeDirective = '', codeInterface = '';
            if (objectToCode.form) {
                codeHtml += _this.formAngular.setFormHtml(objectToCode.form);
                // codeDirective += this.formAngular.setFormDirective(objectToCode.form);
                // codeInterface +=  this.formAngular.setFormInterface(objectToCode.form);
            }
            // if (objectToCode.table) {
            //     codeHtml += this.tableAngular.setTableHtml(objectToCode.table);
            //     codeDirective += this.tableAngular.setTableDirective(objectToCode.table);
            //     codeInterface +=  this.tableAngular.setTableInterface(objectToCode.table);
            // }
            // if (objectToCode.tree) {
            //     codeHtml += this.treeAngular.setTreeHtml(objectToCode.tree);
            //     codeDirective += this.treeAngular.setTreeDirective(objectToCode.tree);
            //     codeInterface +=  this.treeAngular.setTreeInterface(objectToCode.tree);
            // }
            return { html: codeHtml, directive: codeDirective, interface: codeInterface };
        };
    }
    return CodeToAngular;
}());
exports.CodeToAngular = CodeToAngular;
