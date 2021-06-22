/**
 * TO-DO
 *  - Tree
 *  - Services
 */
import { ObjectToCode } from "../../../interfaces/frontend";
import { FormAngular } from './angular/form';
import { TableAngular } from './angular/table';
import { TreeAngular } from './angular/tree';

export class CodeToAngular {
    formAngular = new FormAngular;
    tableAngular = new TableAngular;
    treeAngular = new TreeAngular;

    public setAngularCode = (objectToCode: ObjectToCode) => {
        let codeHtml = '', codeDirective = '', codeInterface = '';
        
        if (objectToCode.form) {
            codeHtml += this.formAngular.setFormHtml(objectToCode.form);
            codeDirective += this.formAngular.setFormDirective(objectToCode.form);
            codeInterface +=  this.formAngular.setFormInterface(objectToCode.form);
        }
        
        if (objectToCode.table) {
            codeHtml += this.tableAngular.setTableHtml(objectToCode.table);
            codeDirective += this.tableAngular.setTableDirective(objectToCode.table);
            codeInterface +=  this.tableAngular.setTableInterface(objectToCode.table);
        }

        if (objectToCode.tree) {
            codeHtml += this.treeAngular.setTreeHtml(objectToCode.tree);
            codeDirective += this.treeAngular.setTreeDirective(objectToCode.tree);
            codeInterface +=  this.treeAngular.setTreeInterface(objectToCode.tree);
        }
    
        return {html: codeHtml, directive: codeDirective, interface: codeInterface};
    }
}