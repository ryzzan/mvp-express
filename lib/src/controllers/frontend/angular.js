"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeToAngular = void 0;
var form_1 = require("./angular/form");
var table_1 = require("./angular/table");
var tree_1 = require("./angular/tree");
var CodeToAngular = /** @class */ (function () {
    function CodeToAngular() {
        var _this = this;
        this.formAngular = new form_1.FormAngular;
        this.tableAngular = new table_1.TableAngular;
        this.treeAngular = new tree_1.TreeAngular;
        this.setAngularCode = function (objectToCode) {
            var codeHtml = '', codeDirective = '', codeInterface = '';
            if (objectToCode.form) {
                codeHtml += _this.formAngular.setFormHtml(objectToCode.form);
                codeDirective += _this.formAngular.setFormDirective(objectToCode.form);
                codeInterface += _this.formAngular.setFormInterface(objectToCode.form);
            }
            if (objectToCode.table) {
                codeHtml += _this.tableAngular.setTableHtml(objectToCode.table);
                codeDirective += _this.tableAngular.setTableDirective(objectToCode.table);
                codeInterface += _this.tableAngular.setTableInterface(objectToCode.table);
            }
            if (objectToCode.tree) {
                codeHtml += _this.treeAngular.setTreeHtml(objectToCode.tree);
                codeDirective += _this.treeAngular.setTreeDirective(objectToCode.tree);
                codeInterface += _this.treeAngular.setTreeInterface(objectToCode.tree);
            }
            return { html: codeHtml, directive: codeDirective, interface: codeInterface };
        };
    }
    return CodeToAngular;
}());
exports.CodeToAngular = CodeToAngular;
