import {
    FormButtonTypeEnum,
    FormInterface,
    FormElementInterface,
    // FormTabElementInterface,
    // RequestTypeEnum,
} from "../../../../interfaces/frontend";
import { Directive } from "./directive";
// import { FormDirective } from "./form.directive";
import {
    FormTemplate
} from "./form/form.template";
import {
    SharedFunctions
} from './shared-functions';

export class FormAngular {
    sharedFunction = new SharedFunctions;
    setFormHtml = (form: FormInterface, isTable?: boolean) => {
        const template = new FormTemplate,
        formPropertyName = this.sharedFunction.setIdToPropertyName(form.id);
        let codeHtml = '';
        form.elements.forEach((element: FormElementInterface) => {
            const input = element.input,
            select = element.select,
            tabs = element.tabs,
            array = element.array,
            button = element.button;
            
            if (input) codeHtml += template.setInput(input);
            if (select) codeHtml += template.setSelect(select);
            if (tabs) codeHtml += template.setTab(tabs);
            if (array) codeHtml += template.setArray(array);
            if (button) codeHtml += template.setButton(button);
            
            // codeHtml += (form.dialog?.template || isTable) ? '' : `<mat-card>`;
            // if ((form.title || form.subtitle) && !isTable && !form.dialog?.template) {
            //     codeHtml += `<mat-card-header>`;
            // } 
            // if (form.title && !isTable) {
            //     codeHtml += form.dialog?.template ? `<h1 mat-dialog-title>${form.title.toLocaleLowerCase()}</h1>` : `<mat-card-title>{{actionText}}${form.title.toLocaleLowerCase()}</mat-card-title>`;
            // }
            // if (form.subtitle && !isTable) {
            //     codeHtml += form.dialog?.template ? `<div>${form.subtitle}</div>` : `<mat-card-subtitle>${form.subtitle}</mat-card-subtitle>`;
            // }
            // if ((form.title || form.subtitle) && !isTable && !form.dialog?.template) {
            //     codeHtml += `</mat-card-header>`;
            // } 
            // if (!isTable) {
            //     codeHtml += form.dialog?.template ? `<div mat-dialog-content>` : `<mat-card-content>`;
            // }
            // if (form.elements) {
            //     codeHtml += this.setFormHtmlElement(form, form.elements, formIdAsPropertyName);
            // }

            // if(!isTable) {
            //     codeHtml += form.dialog?.template ? `</div>` : `</mat-card-content>`;
            // }
            // if(form.actions) {
            //     codeHtml += form.dialog?.template ? `<div mat-dialog-actions>` : `<mat-card-actions>`;
            //     codeHtml += this.setFormHtmlElement(form, form.actions.elements, formIdAsPropertyName);
            //     codeHtml += form.dialog?.template ? `</div>` : `</mat-card-actions>`;
            // }
            // codeHtml += (form.dialog?.template || isTable) ? '' : `</mat-card>`;
        });

        form.actions?.forEach((element: FormElementInterface) => {
            const input = element.input,
            select = element.select,
            tabs = element.tabs,
            array = element.array,
            button = element.button;

            if (input) codeHtml += template.setInput(input);
            if (select) codeHtml += template.setSelect(select);
            if (tabs) codeHtml += template.setTab(tabs);
            if (array) codeHtml += template.setArray(array);
            if (button) codeHtml += template.setButton(button);
        });
        
        return codeHtml;
    }

    // setFormHtmlElement = (form: Form, array: Array < FormElementInterface > , formIdAsPropertyName: string, isArray ? : boolean, isTab ? : boolean) => {
    //     let codeHtml = '',
    //         codeForm = '';


    
    //     });
    //     codeHtml += (isArray || form.dialog ? .template) ? '' : `<form id="${form.id}" [formGroup]="${formIdAsPropertyName}Form" (ngSubmit)="${formIdAsPropertyName}Submit()">`;
    //     codeHtml += codeForm;
    //     codeHtml += (isArray || form.dialog ? .template) ? '' : `</form>`;
    //     return codeHtml;
    // }

    // setFormDirective = (formArray: Form, isTable ? : boolean) => {
    //     let codeTypescript = '',
    //         codeForm = '',
    //         codeSelectObject = '',
    //         codeAction = '',
    //         codeArrayAdd = '',
    //         codeArrayGet = '',
    //         codeArrayNew = '',
    //         codeArrayRemove = '',
    //         codeConstructor = 'constructor(',
    //         array: any,
    //         formIdAsPropertyName: any,
    //         formIdAsClassName;

    //     formArray.forEach(
    //         (form: Form) => {
    //             codeForm = '',
    //                 codeAction = '',
    //                 codeSelectObject = '',
    //                 array = form.elements ? form.elements : form.tabs,
    //                 formIdAsPropertyName = this.sharedFunction.stringToLowerCamelCaseName(form.id),
    //                 formIdAsClassName = this.sharedFunction.stringToUpperCamelCase(form.id);

    //             /** Create code: dialog component */
    //             if (form.dialog ? .template) {
    //                 // Create code: button action
    //                 codeConstructor += `public ${formIdAsPropertyName}DialogRef: MatDialogRef<${formIdAsClassName}Component>,`;
    //                 if (form.dialog ? .dialogDataInterface) codeConstructor += `@Inject(MAT_DIALOG_DATA) public data: ${formIdAsClassName}DialogData,`;
    //                 codeAction += `${formIdAsClassName}OnNoClick(): void{ this.${formIdAsPropertyName}DialogRef.close(); }`;
    //             }

    //             codeConstructor += `) {this.setForm();};`;

    //             codeTypescript += isTable ? '' : `import { Component } from '@angular/core';`;
    //             codeTypescript += isTable ? '' : `import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';`;
    //             codeTypescript += isTable ? '' : `import { ActivatedRoute, Router } from '@angular/router';`;
    //             if (form.dialog ? .template) codeTypescript += `import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';`;
    //             if (form.dialog ? .dialogDataInterface) codeTypescript += `export interface ${formIdAsClassName}DialogData {${this.sharedFunction.objectToString(form.dialog.dialogDataInterface)}}`;
    //             codeTypescript += isTable ? '' : `@Component({selector: 'app-${form.id}', templateUrl: './${form.id}.component.html', styleUrls: ['./${form.id}.component.css']})`;
    //             codeTypescript += isTable ? '' : `export class ${formIdAsClassName}Component {`;
    //             codeTypescript += `id: string = this.${formIdAsPropertyName}Route.snapshot.params['id']; isAddModule: boolean = !this.id; actionText = 'Cadastrar ';`;
    //             codeTypescript += codeConstructor.replace(/\, \)/gi, ')').replace(/\, \,/gi, '');
    //             codeTypescript += codeSelectObject.replace(/\, \]/gi, ']').replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
    //             codeTypescript += codeForm.replace(/\, \]/gi, ']').replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
    //             codeTypescript += codeArrayNew + codeArrayAdd + codeArrayGet + codeArrayRemove;
    //             codeTypescript += codeAction;
    //             codeTypescript += isTable ? '' : `}`;
    //         }
    //     );
    //     return codeTypescript;
    // }

    setFormDirectiveElement = (array: Array < FormElementInterface > , formIdAsPropertyName: string, isTable ? : boolean, isArray ? : boolean) => {
        const directive = new Directive;
    //     let codeForm = '',
    //         codeSelectObject = '',
    //         codeArrayNew = '',
    //         codeArrayGet = '',
    //         codeArrayAdd = '',
    //         codeArrayRemove = '';

    //     array.forEach(
    //         (element: FormElementInterface) => {
    //             let typeEmail = (element.input ? .type === 'email') ? true : false,
    //                 typeText = (element.input ? .type === 'text') ? true : false,
    //                 typeNumber = (element.input ? .type === 'number') ? true : false,
    //                 typePassword = (element.input ? .type === 'password') ? true : false,
    //                 typeDate = (element.input ? .type === 'date') ? true : false,
    //                 required = (element.input ? .required) ? true : false;
   
    }

    setFormService = (formArray: any[]) => {
    //     let codeTypescript = '',
    //         codeForm = '',
    //         codeAction = '',
    //         array,
    //         formIdAsPropertyName: any,
    //         formIdAsClassName;

    //     formArray.forEach(
    //         (form: {
    //             elements: any;id: any;
    //         }) => {
    //             codeAction = '',
    //                 array = form.elements,
    //                 formIdAsPropertyName = this.sharedFunction.stringToLowerCamelCaseName(form.id),
    //                 formIdAsClassName = this.sharedFunction.stringToUpperCamelCase(form.id);

    //             array.forEach(
    //                 (element: {
    //                     input: {
    //                         type: string;required: {
    //                             is: any;
    //                         };name: any;defaultValue: any;
    //                     }
    //                 }) => {
    //                     let typeEmail = (element.input ? .type === 'email') ? true : false,
    //                         typeText = (element.input ? .type === 'text') ? true : false,
    //                         typePassword = (element.input ? .type === 'password') ? true : false,
    //                         typeNumber = (element.input ? .type === 'number') ? true : false,
    //                         typeDate = (element.input ? .type === 'date') ? true : false,
    //                         required = (element.input ? .required) ? true : false;

    //                     // Create code: attribute
    //                     if (typeText || typePassword || typeEmail) {
    //                         codeForm += `${element.input?.name} ${required ? ':' : '?:'} 'string', `;
    //                     }
    //                     codeForm += typeNumber ? `${element.input?.name} ${required ? ':' : '?:'} 'number', ` : '';
    //                     codeForm += typeDate ? `${element.input?.name} ${required ? ':' : '?:'} 'date', ` : '';
    //                 }
    //             );
    //             codeForm += `};`;

    //             codeTypescript += `export interface ${formIdAsClassName}Interface {`;
    //             codeTypescript += codeForm.replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
    //             codeTypescript += `}`;
    //         }
    //     );

    //     codeTypescript = `import { Observable, throwError } from 'rxjs'; import { catchError, retry } from 'rxjs/operators';`;
    }

    setFormInterface = (formArray: any) => {
    //     let codeTypescript = '',
    //         codeForm = '',
    //         codeAction = '',
    //         array: any,
    //         formIdAsPropertyName: any,
    //         formIdAsClassName;

    //     formArray.forEach(
    //         (form: Form) => {
    //             codeAction = '',
    //                 array = form.elements ? form.elements : form.tabs,
    //                 formIdAsPropertyName = this.sharedFunction.stringToLowerCamelCaseName(form.id),
    //                 formIdAsClassName = this.sharedFunction.stringToUpperCamelCase(form.id);

    //             if (form.elements) {
    //                 array.forEach(
    //                     (element: FormElementInterface) => {
    //                         let typeEmail = (element.input ? .type === 'email') ? true : false,
    //                             typeText = (element.input ? .type === 'text') ? true : false,
    //                             typePassword = (element.input ? .type === 'password') ? true : false,
    //                             // typeNumber = (element.input?.type === 'number') ? true : false,
    //                             typeDate = (element.input ? .type === 'date') ? true : false,
    //                             required = (element.input ? .required) ? true : false;

    //                         // Create code: attribute
    //                         if (typeText || typePassword || typeEmail) {
    //                             codeForm += `${element.input?.name} ${required ? ':' : '?:'} 'string', `;
    //                         }
    //                         // codeForm += typeNumber ? `${element.input?.name} ${required ? ':' : '?:'} 'number', `: '';
    //                         codeForm += typeDate ? `${element.input?.name} ${required ? ':' : '?:'} 'date', ` : '';
    //                     }
    //                 );
    //             }

    //             if (form.tabs) {
    //                 array.forEach((tab: FormTabElementInterface) => {
    //                     tab.elements.forEach(
    //                         (element: FormElementInterface) => {
    //                             let typeEmail = (element.input ? .type === 'email') ? true : false,
    //                                 typeText = (element.input ? .type === 'text') ? true : false,
    //                                 typePassword = (element.input ? .type === 'password') ? true : false,
    //                                 // typeNumber = (element.input?.type === 'number') ? true : false,
    //                                 typeDate = (element.input ? .type === 'date') ? true : false,
    //                                 required = (element.input ? .required) ? true : false;

    //                             // Create code: attribute
    //                             if (typeText || typePassword || typeEmail) {
    //                                 codeForm += `${element.input?.name} ${required ? ':' : '?:'} 'string', `;
    //                             }
    //                             // codeForm += typeNumber ? `${element.input?.name} ${required ? ':' : '?:'} 'number', `: '';
    //                             codeForm += typeDate ? `${element.input?.name} ${required ? ':' : '?:'} 'date', ` : '';
    //                         }
    //                     );
    //                 });
    //             }
    //             codeForm += `};`;

    //             codeTypescript += `export interface ${formIdAsClassName}Interface {`;
    //             codeTypescript += codeForm.replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
    //             codeTypescript += `}`;
    //         }
    //     );

    //     /**
    //      * TO-DO
    //      * Deal with enums
    //      */

    //     return codeTypescript;
    }
}