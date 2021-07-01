"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeToPure = void 0;
var form_1 = require("./pure/form");
//  import { TablePure } from './pure/table';
//  import { TreePure } from './pure/tree';
var CodeToPure = /** @class */ (function () {
    function CodeToPure() {
        var _this = this;
        this.formPure = new form_1.FormPure;
        //  tablePure = new TablePure;
        //  treePure = new TreePure;
        this.setPureCode = function (objectToCode) {
            var codeHtml = '', codeDirective = '', codeInterface = '';
            if (objectToCode.form) {
                codeHtml += _this.formPure.setFormHtml(objectToCode.form);
                codeDirective += _this.formPure.setFormDirective(objectToCode.form);
                codeInterface += _this.formPure.setFormInterface(objectToCode.form);
            }
            //  if (objectToCode.table) {
            //      codeHtml += this.tablePure.setTableHtml(objectToCode.table);
            //      codeDirective += this.tablePure.setTableDirective(objectToCode.table);
            //      codeInterface +=  this.tablePure.setTableInterface(objectToCode.table);
            //  }
            //  if (objectToCode.tree) {
            //      codeHtml += this.treePure.setTreeHtml(objectToCode.tree);
            //      codeDirective += this.treePure.setTreeDirective(objectToCode.tree);
            //      codeInterface +=  this.treePure.setTreeInterface(objectToCode.tree);
            //  }
            return { html: codeHtml, directive: codeDirective, interface: codeInterface };
        };
    }
    return CodeToPure;
}());
exports.CodeToPure = CodeToPure;
