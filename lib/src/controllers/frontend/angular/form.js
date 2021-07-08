"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormAngular = void 0;
var directive_1 = require("./directive");
// import { FormDirective } from "./form.directive";
var form_template_1 = require("./form/form.template");
var shared_functions_1 = require("./shared-functions");
var FormAngular = /** @class */ (function () {
    function FormAngular() {
        var _this = this;
        this.sharedFunction = new shared_functions_1.SharedFunctions;
        this.setFormHtml = function (form, isTable) {
            var _a;
            var template = new form_template_1.FormTemplate, formPropertyName = _this.sharedFunction.setIdToPropertyName(form.id);
            var codeHtml = '';
            form.elements.forEach(function (element) {
                var input = element.input, select = element.select, tabs = element.tabs, array = element.array, button = element.button;
                if (input)
                    codeHtml += template.setInput(input);
                if (select)
                    codeHtml += template.setSelect(select);
                if (tabs)
                    codeHtml += template.setTab(tabs);
                if (array)
                    codeHtml += template.setArray(array);
                if (button)
                    codeHtml += template.setButton(button);
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
            (_a = form.actions) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
                var input = element.input, select = element.select, tabs = element.tabs, array = element.array, button = element.button;
                if (input)
                    codeHtml += template.setInput(input);
                if (select)
                    codeHtml += template.setSelect(select);
                if (tabs)
                    codeHtml += template.setTab(tabs);
                if (array)
                    codeHtml += template.setArray(array);
                if (button)
                    codeHtml += template.setButton(button);
            });
            return codeHtml;
        };
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
        //                 formIdAsPropertyName = this.sharedFunction.setIdToPropertyName(form.id),
        //                 formIdAsClassName = this.sharedFunction.setIdToClassName(form.id);
        //             /** Create code: call to dialog */
        //             // if (form.dialog) {
        //             //     array.forEach((element: FormElementInterface) => {
        //             //         if (element.button?.action && element.button?.action.type === RequestTypeEnum.Dialog) {
        //             //             codeAction += `${formIdAsPropertyName}OpenDialog: void = () => {`;
        //             //             codeAction += `const ${formIdAsPropertyName}DialogRef = this.${formIdAsPropertyName}Dialog.open(${form.dialog?.template}),{`;
        //             //             codeAction += `width: '250px'`;
        //             //             if (form.dialog?.dialogDataInterface) {
        //             //                 codeAction += `,data:`;
        //             //                 codeAction += this.sharedFunction.objectToString(form.dialog.dialogDataInterface);
        //             //             } 
        //             //             codeAction += `}`;
        //             //             codeAction += `};`;
        //             //         }
        //             //     });
        //             // }
        //             /** Create code: dialog component */
        //             if (form.dialog ? .template) {
        //                 // Create code: button action
        //                 codeConstructor += `public ${formIdAsPropertyName}DialogRef: MatDialogRef<${formIdAsClassName}Component>,`;
        //                 if (form.dialog ? .dialogDataInterface) codeConstructor += `@Inject(MAT_DIALOG_DATA) public data: ${formIdAsClassName}DialogData,`;
        //                 codeAction += `${formIdAsClassName}OnNoClick(): void{ this.${formIdAsPropertyName}DialogRef.close(); }`;
        //             }
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
        this.setFormDirectiveElement = function (array, formIdAsPropertyName, isTable, isArray) {
            var directive = new directive_1.Directive;
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
            //             if (element.array) {
            //                 let add = 'add' + element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1),
            //                     remove = 'remove' + element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1),
            //                     newArray = 'new' + element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1);
            //                 codeForm += `${element.array.id}: this.${formIdAsPropertyName}Builder.array([]),`;
            //                 codeSelectObject += this.setFormDirectiveElement(element.array.elements, formIdAsPropertyName, true).codeSelectObject;
            //                 codeArrayAdd += `${add}() {this.${element.array.id}.push(this.${newArray}())}`;
            //                 codeArrayGet += `get ${element.array.id}(): FormArray {return this.${formIdAsPropertyName}Form.get('${element.array.id}') as FormArray};`;
            //                 codeArrayNew += `${newArray}(): FormGroup { return this.${formIdAsPropertyName}Builder.group({`;
            //                 codeArrayNew += this.setFormDirectiveElement(element.array.elements, formIdAsPropertyName, true).codeForm;
            //                 codeArrayNew += `})};`
            //                 codeArrayRemove += `${remove}(i:number) {this.${element.array.id}.removeAt(i)}`;
            //             }
            //             if (typeText || typePassword || typeEmail || typeDate || typeNumber) {
            //                 codeForm += `${element.input?.name}: [${element.input?.defaultValue ? `'${element.input?.defaultValue}'` : null}, [${required ? 'Validators.required,' : ''} ${typeEmail ? 'Validators.email,' : ''}]],`;
            //             }
            //             if (element.select ? .options) {
            //                 codeForm += `${element.select?.name}: [${element.select?.defaultValue ? `'${element.select?.defaultValue}'` : null}, [${required ? 'Validators.required,' : ''} ${typeEmail ? 'Validators.email,' : ''}]],`;
            //                 if (element.select ? .options ? .object) {
            //                     const objectArray = element.select.options.object;
            //                     codeSelectObject += `${element.select.name}SelectObject = [`;
            //                     objectArray.forEach(
            //                         (selectObject: {
            //                             value: string;valueView: string;
            //                         }) => {
            //                             codeSelectObject += `{value: '${selectObject.value}', valueView: '${selectObject.valueView}'}, `;
            //                         }
            //                     )
            //                     codeSelectObject += `];`;
            //                 }
            //             }
            //         }
            //     );
            //     return {
            //         codeForm: codeForm,
            //         codeSelectObject: codeSelectObject,
            //         codeArrayAdd: codeArrayAdd,
            //         codeArrayGet: codeArrayGet,
            //         codeArrayNew: codeArrayNew,
            //         codeArrayRemove: codeArrayRemove
            //     };
        };
        // setFormService = (formArray: any[]) => {
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
        //                 formIdAsPropertyName = this.sharedFunction.setIdToPropertyName(form.id),
        //                 formIdAsClassName = this.sharedFunction.setIdToClassName(form.id);
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
        // }
        // setFormInterface = (formArray: any) => {
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
        //                 formIdAsPropertyName = this.sharedFunction.setIdToPropertyName(form.id),
        //                 formIdAsClassName = this.sharedFunction.setIdToClassName(form.id);
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
        // }
    }
    return FormAngular;
}());
exports.FormAngular = FormAngular;
