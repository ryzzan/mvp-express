/**
 * TO-DO
 *  - Tree
 *  - Services
 */
import { Directive } from "./angular/directive";
import { FormAngular } from './angular/form';
import { ObjectToCode } from "../../../interfaces/frontend";
import { SharedFunctions } from "./angular/shared-functions";
import { TableAngular } from './angular/table';
// import { TreeAngular } from './angular/tree';

export class CodeToAngular {
    formAngular = new FormAngular;
    directive = new Directive;
    tableAngular = new TableAngular;
    // treeAngular = new TreeAngular;

    sharedFunction = new SharedFunctions;

    public setAngularCode = (objectToCode: ObjectToCode) => {
        let codeTemplate = '', codeDirective = '', codeInterface = '';
        const form = objectToCode.form, 
        table = objectToCode.table;
        if (form) {
            const importObject = {}, 
            formIdAsClassName = this.sharedFunction.setIdToClassName(form?.id),
            formPropertyName = this.sharedFunction.setIdToPropertyName(form?.id);
            
            codeTemplate += `<mat-card><form id="${form.id}" [formGroup]="${formPropertyName}Form" (ngSubmit)="${formPropertyName}Submit()">`;
            codeTemplate += this.formAngular.setFormHtml(form);
            codeTemplate +=`</form></mat-card>`;

            codeDirective += this.directive.setImport(objectToCode, importObject);
            codeDirective += `@Component({selector: 'app-${form.id}', templateUrl: './${form.id}.component.html', styleUrls: ['./${form.id}.component.css']})`;
            codeDirective += `export class ${formIdAsClassName}Component {`;
            codeDirective += this.directive.setClassConstructor(objectToCode);
            codeDirective += this.directive.setObject(objectToCode);
            codeDirective += `}`;
            // codeInterface +=  this.formAngular.setFormInterface(form);
        }
        
        if (table) {
            const importObject = {}, 
            tableIdAsClassName = this.sharedFunction.setIdToClassName(table?.id);
            
            codeTemplate += this.tableAngular.setTableHtml(table);
            
            codeDirective += this.directive.setImport(objectToCode, importObject);
            codeDirective += `@Component({selector: 'app-${table.id}', templateUrl: './${table.id}.component.html', styleUrls: ['./${table.id}.component.css']})`;
            codeDirective += `export class ${tableIdAsClassName}Component {`;
            codeDirective += this.directive.setClassConstructor(objectToCode);
            codeDirective += this.directive.setTableObject(objectToCode);
            codeDirective += this.directive.setObject(objectToCode);
            codeDirective += `}`;
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
    }
}