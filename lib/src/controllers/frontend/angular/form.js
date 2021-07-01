"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormAngular = void 0;
// import { FormDirective } from "./form.directive";
var form_template_1 = require("./form/form.template");
var shared_functions_1 = require("./shared-functions");
var FormAngular = /** @class */ (function () {
    function FormAngular() {
        this.shared = new shared_functions_1.SharedFunctions;
        this.setFormHtml = function (form, isTable) {
            var template = new form_template_1.FormTemplate;
            var codeHtml = '';
            form.elements.forEach(function (element) {
                if (element.input)
                    codeHtml += template.setInput(element.input);
                if (element.select)
                    codeHtml += template.setSelect(element.select);
                // const formIdAsPropertyName = this.shared.stringToLowerCamelCaseName(form.id);
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
                // /** Create code: tabs */
                // if (form.tabs) {
                //     codeHtml += `<mat-tab-group>`;
                //     form.tabs.forEach((tab:FormTabElementInterface) => {
                //         codeHtml += `<mat-tab label="${tab.label}" id="${tab.id}">`;
                //         codeHtml += this.setFormHtmlElement(form, tab.elements, formIdAsPropertyName);
                //         codeHtml += `</mat-tab>`;
                //     });
                //     codeHtml += `</mat-tab-group>`;
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
            return codeHtml;
        };
        // setFormHtmlElement = (form: Form, array: Array < FormElementInterface > , formIdAsPropertyName: string, isArray ? : boolean, isTab ? : boolean) => {
        //     let codeHtml = '',
        //         codeForm = '';
        //     array.forEach((element: FormElementInterface) => {
        //         /** Create code: array form */
        //         if (element.array) {
        //             const add = `add${this.shared.stringToUpperCamelCase(element.array.id)}`,
        //                 remove = `remove${this.shared.stringToUpperCamelCase(element.array.id)}`;
        //             codeForm += `<ng-container formArrayName="${element.array.id}"><mat-card *ngFor="let _ of ${element.array.id}.controls; index as i"><ng-container [formGroupName]="i">`;
        //             codeForm += `<mat-card-header>${element.array.label} {{1 + i}}</mat-card-header><mat-card-content>`;
        //             codeForm += this.setFormHtmlElement(form, element.array.elements, formIdAsPropertyName, true);
        //             codeForm += `</mat-card-content><mat-card-actions>`;
        //             codeForm += `<button mat-button type="button" color="warn" (click)="${remove}(i)">Remover ${element.array.label.toLowerCase()}</button>`;
        //             codeForm += `</mat-card-actions></ng-container></mat-card></ng-container>`;
        //             codeForm += `<mat-card><mat-card-content>`;
        //             codeForm += `<button mat-button type="button" (click)=${add}()>Adicionar ${element.array.label.toLowerCase()}</button></mat-card-content></mat-card>`;
        //         }
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
        //                 formIdAsPropertyName = this.shared.stringToLowerCamelCaseName(form.id),
        //                 formIdAsClassName = this.shared.stringToUpperCamelCase(form.id);
        //             /** Create code: form group */
        //             codeConstructor += `private ${formIdAsPropertyName}FormBuilder: FormBuilder, private ${formIdAsPropertyName}Route: ActivatedRoute, private ${formIdAsPropertyName}Router: Router,`
        //             codeForm += `${formIdAsPropertyName}Form = this.${formIdAsPropertyName}FormBuilder.group({`;
        //             if (form.elements) {
        //                 codeForm += this.setFormDirectiveElement(array, formIdAsPropertyName, isTable).codeForm;
        //             }
        //             if (form.tabs) {
        //                 array.forEach((tab: FormTabElementInterface) => {
        //                     codeForm += this.setFormDirectiveElement(tab.elements, formIdAsPropertyName, isTable).codeForm;
        //                 });
        //             }
        //             codeForm += `});`;
        //             codeForm += `setForm = () => {`;
        //             codeForm += `if (!this.isAddModule) {console.log(29);`;
        //             codeForm += `this.actionText = 'Editar ';`;
        //             codeForm += `/** TO-DO */`;
        //             codeForm += `/** Service this.userService.getById(this.id).pipe(first()).subscribe(x => this.form.patchValue(x));*/`;
        //             codeForm += `}}`;
        //             /** Create code: select object */
        //             if (form.elements) {
        //                 codeSelectObject += this.setFormDirectiveElement(array, formIdAsPropertyName, isTable).codeSelectObject;
        //             }
        //             if (form.tabs) {
        //                 array.forEach((tab: FormTabElementInterface) => {
        //                     codeSelectObject += this.setFormDirectiveElement(tab.elements, formIdAsPropertyName, isTable).codeSelectObject;
        //                 });
        //             }
        //             /** Create code: form array */
        //             if (form.elements) {
        //                 codeArrayAdd += this.setFormDirectiveElement(array, formIdAsPropertyName, isTable).codeArrayAdd;
        //                 codeArrayGet += this.setFormDirectiveElement(array, formIdAsPropertyName, isTable).codeArrayGet;
        //                 codeArrayNew += this.setFormDirectiveElement(array, formIdAsPropertyName, isTable).codeArrayNew;
        //                 codeArrayRemove += this.setFormDirectiveElement(array, formIdAsPropertyName, isTable).codeArrayRemove;
        //             }
        //             if (form.tabs) {
        //                 array.forEach((tab: FormTabElementInterface) => {
        //                     codeArrayAdd += this.setFormDirectiveElement(tab.elements, formIdAsPropertyName, isTable).codeArrayAdd;
        //                     codeArrayGet += this.setFormDirectiveElement(tab.elements, formIdAsPropertyName, isTable).codeArrayGet;
        //                     codeArrayNew += this.setFormDirectiveElement(tab.elements, formIdAsPropertyName, isTable).codeArrayNew;
        //                     codeArrayRemove += this.setFormDirectiveElement(tab.elements, formIdAsPropertyName, isTable).codeArrayRemove;
        //                 });
        //             }
        //             /** Create code: submit */
        //             if (form.elements) {
        //                 array.forEach((element: FormElementInterface) => {
        //                     // Create code: button action
        //                     if (!(element.button ? .type === FormButtonTypeEnum.Submit && element.button ? .action && element.button ? .action.type === RequestTypeEnum.Api)) return;
        //                     codeAction += `${formIdAsPropertyName}Submit = () => {fetch('${element.button?.action.url}', {method: '${element.button.action.verb?.toUpperCase()}',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},body: JSON.stringify(this.${formIdAsPropertyName}Form.value),}).then((data) => {data.json().then((keys) => {})});}`;
        //                 });
        //             }
        //             if (form.tabs) {
        //                 array.forEach((tab: FormTabElementInterface) => {
        //                     tab.elements.forEach((element: FormElementInterface) => {
        //                         // Create code: button action
        //                         if (!(element.button ? .type === FormButtonTypeEnum.Submit && element.button ? .action && element.button ? .action.type === RequestTypeEnum.Api)) return;
        //                         codeAction += `${formIdAsPropertyName}Submit = () => {fetch('${element.button?.action.url}', {method: '${element.button.action.verb?.toUpperCase()}',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},body: JSON.stringify(this.${formIdAsPropertyName}Form.value),}).then((data) => {data.json().then((keys) => {})});}`;
        //                     });
        //                 });
        //             }
        //             if (form.actions) {
        //                 form.actions.elements.forEach((action: FormElementInterface) => {
        //                     // Create code: button action
        //                     if (!(action.button ? .type === FormButtonTypeEnum.Submit && action.button ? .action && action.button ? .action.type === RequestTypeEnum.Api)) return;
        //                     codeAction += `${formIdAsPropertyName}Submit = () => {fetch('${action.button?.action.url}', {method: '${action.button.action.verb?.toUpperCase()}',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},body: JSON.stringify(this.${formIdAsPropertyName}Form.value),}).then((data) => {data.json().then((keys) => {})});}`;
        //                 });
        //             }
        //             /** Create code: call to dialog */
        //             // if (form.dialog) {
        //             //     array.forEach((element: FormElementInterface) => {
        //             //         if (element.button?.action && element.button?.action.type === RequestTypeEnum.Dialog) {
        //             //             codeAction += `${formIdAsPropertyName}OpenDialog: void = () => {`;
        //             //             codeAction += `const ${formIdAsPropertyName}DialogRef = this.${formIdAsPropertyName}Dialog.open(${form.dialog?.template}),{`;
        //             //             codeAction += `width: '250px'`;
        //             //             if (form.dialog?.dialogDataInterface) {
        //             //                 codeAction += `,data:`;
        //             //                 codeAction += this.shared.objectToString(form.dialog.dialogDataInterface);
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
        //             codeConstructor += `) {this.setForm();};`;
        //             codeTypescript += isTable ? '' : `import { Component } from '@angular/core';`;
        //             codeTypescript += isTable ? '' : `import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';`;
        //             codeTypescript += isTable ? '' : `import { ActivatedRoute, Router } from '@angular/router';`;
        //             if (form.dialog ? .template) codeTypescript += `import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';`;
        //             if (form.dialog ? .dialogDataInterface) codeTypescript += `export interface ${formIdAsClassName}DialogData {${this.shared.objectToString(form.dialog.dialogDataInterface)}}`;
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
        // setFormDirectiveElement = (array: Array < FormElementInterface > , formIdAsPropertyName: string, isTable ? : boolean, isArray ? : boolean) => {
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
        //                 codeForm += `${element.array.id}: this.${formIdAsPropertyName}FormBuilder.array([]),`;
        //                 codeSelectObject += this.setFormDirectiveElement(element.array.elements, formIdAsPropertyName, true).codeSelectObject;
        //                 codeArrayAdd += `${add}() {this.${element.array.id}.push(this.${newArray}())}`;
        //                 codeArrayGet += `get ${element.array.id}(): FormArray {return this.${formIdAsPropertyName}Form.get('${element.array.id}') as FormArray};`;
        //                 codeArrayNew += `${newArray}(): FormGroup { return this.${formIdAsPropertyName}FormBuilder.group({`;
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
        // }
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
        //                 formIdAsPropertyName = this.shared.stringToLowerCamelCaseName(form.id),
        //                 formIdAsClassName = this.shared.stringToUpperCamelCase(form.id);
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
        //                 formIdAsPropertyName = this.shared.stringToLowerCamelCaseName(form.id),
        //                 formIdAsClassName = this.shared.stringToUpperCamelCase(form.id);
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
