/**
 * TO-DO
 *  - Form tab
 *  - Services
 */
import { ObjectToCode, FormElement } from "../../../interfaces/frontend";

export class CodeToAngular {
    public setAngularCode = (objectToCode: ObjectToCode) => {
        let codeHtml = '', codeDirective = '', codeInterface = '';
        
        if (objectToCode.form) {
            codeHtml += this.setFormHtml(objectToCode.form);
            codeDirective += this.setFormDirective(objectToCode.form);
            codeInterface +=  this.setFormInterface(objectToCode.form);
        }
        
        if (objectToCode.table) {
            codeHtml += this.setTableHtml(objectToCode.table);
            codeDirective += this.setTableDirective(objectToCode.table);
            codeInterface +=  this.setTableInterface(objectToCode.form);
        }
    
        return {html: codeHtml, directive: codeDirective, interface: codeInterface};
    }

    setFormHtml = (formArray: any[]) => {
        let codeHtml = '';
        formArray.forEach((form: { elements: any; id: any; }) => {
            let array = form.elements,
                formIdAsPropertyName = this.idToPropertyName(form.id);
            codeHtml += `<mat-card><mat-card-content>`;
            codeHtml += this.setFormHtmlElement(form, array, formIdAsPropertyName);
            codeHtml += `</mat-card-content></mat-card>`;
        });

        return codeHtml;
    }

    setFormHtmlElement = (form: { elements: any; id: any; }, array: Array<FormElement>, formIdAsPropertyName: string, isArray?: boolean) => {
        let codeHtml = '',
            codeForm = '';
        array.forEach((element: FormElement) => {
            if (element.array) {
                let add = 'add'+element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1),
                remove = 'remove'+element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1);
                codeForm += `<ng-container formArrayName="${element.array.id}"><mat-card *ngFor="let _ of ${element.array.id}.controls; index as i"><ng-container [formGroupName]="i">`;
                codeForm += `<mat-card-header>${element.array.label} {{1 + i}}</mat-card-header><mat-card-content>`;
                codeForm += this.setFormHtmlElement(form, element.array.elements, formIdAsPropertyName, true);
                codeForm += `</mat-card-content><mat-card-actions>`;
                codeForm += `<button mat-button type="button" color="warn" (click)="${remove}(i)">Remover ${element.array.label.toLowerCase()}</button>`;
                codeForm += `</mat-card-actions></ng-container></mat-card></ng-container>`;
                codeForm += `<mat-card><mat-card-content>`;
                codeForm += `<button mat-button type="button" (click)=${add}()>Adicionar ${element.array.label.toLowerCase()}</button></mat-card-content></mat-card>`;
            }

            // Create code: input
            if (element.input) {
                let input = element.input;

                codeForm += `<mat-form-field>`;
                codeForm += `<mat-label>${input.label}</mat-label>`;
                codeForm += `<input matInput type="${input.type}" formControlName="${input.name}" id="${input.id}" placeholder="${input.placeholder}" ${input.required ? 'required' : ''} autocomplete="new-password">`;
                codeForm += `</mat-form-field>`;
            }

            // Create code: select
            if (element.select) {
                let select = element.select;

                codeForm += `<mat-form-field>`;
                codeForm += `<mat-label>${select.label}</mat-label>`;
                codeForm += `<mat-select formControlName="${select.name}"><mat-option *ngFor="let ${select.name}Item of ${select.name}SelectObject" [value]="${select.name}Item.value">{{${select.name}Item.valueView}}</mat-option></mat-select>`;
                codeForm += `</mat-form-field>`;
            }

            // Create code: button
            if (element.button) {
                let button = element.button;
                codeForm += `<button mat-raised-button color="primary">${button.label}</button>`;
            }
        });
        codeHtml += isArray ? '' : `<form id="${form.id}" [formGroup]="${formIdAsPropertyName}Form" (ngSubmit)="${formIdAsPropertyName}Submit()">`;
        codeHtml += codeForm;
        codeHtml += isArray ? '' : `</form>`;
        return codeHtml;
    } 

    setTableHtml = (tableArray: any) => {
        let codeHtml = '';
        tableArray.forEach((table: { elements: any; id: any; action: any; }) => {
            let codeTable = '',
                array = table.elements,
                tableIdAsPropertyName = this.idToPropertyName(table.id),
                tableIdAsClassName = this.idToClassName(table.id);
                
            array.forEach((element: { row: { field: any; }; column: { label: any; }; }) => {
                codeTable += `<ng-container matColumnDef="${element.row.field}">`;
                codeTable += `<th mat-header-cell *matHeaderCellDef> ${element.column.label} </th>`;
                codeTable += `<td mat-cell *matCellDef="let element"> {{element.${element.row.field}}} </td>`;
                codeTable += `</ng-container>`;
            });
    
            codeTable += `<tr mat-header-row *matHeaderRowDef="${tableIdAsPropertyName}DisplayedColumns"></tr>`;
            codeTable += `<tr mat-row *matRowDef="let row; columns: ${tableIdAsPropertyName}DisplayedColumns;"></tr>`;
    
            codeHtml += `<table mat-table [dataSource]="${tableIdAsPropertyName}DataSource" class="mat-elevation-z8">`;
            codeHtml += codeTable;
            codeHtml += `</table>`;
        });
        return codeHtml;
    }

    setFormDirective = (formArray: any[]) => {
        let codeTypescript = '',
            codeForm = '',
            codeSelectObject = '',
            codeAction = '',
            codeArrayAdd = '',
            codeArrayGet = '',
            codeArrayNew = '',
            codeArrayRemove = '',
            codeConstructor = 'constructor(',
            array,
            formIdAsPropertyName: any,
            formIdAsClassName;
            
        formArray.forEach(
            (form: { elements: any; id: any; }) => {
                codeForm = '',
                codeAction = '',
                codeSelectObject = '',
                array = form.elements,
                formIdAsPropertyName = this.idToPropertyName(form.id),
                formIdAsClassName = this.idToClassName(form.id);

                /** Create code: form group */
                codeConstructor += `private ${formIdAsPropertyName}FormBuilder: FormBuilder,`
                codeForm += `${formIdAsPropertyName}Form = this.${formIdAsPropertyName}FormBuilder.group({`;
                codeForm += this.setFormDirectiveElement(array, formIdAsPropertyName).codeForm;
                codeForm += `});`;

                /** Create code: select object */
                codeSelectObject += this.setFormDirectiveElement(array, formIdAsPropertyName).codeSelectObject;

                /** Create code: form array */
                codeArrayAdd += this.setFormDirectiveElement(array, formIdAsPropertyName).codeArrayAdd;
                codeArrayGet += this.setFormDirectiveElement(array, formIdAsPropertyName).codeArrayGet;
                codeArrayNew += this.setFormDirectiveElement(array, formIdAsPropertyName).codeArrayNew;
                codeArrayRemove += this.setFormDirectiveElement(array, formIdAsPropertyName).codeArrayRemove;

                /** Create code: submit */
                array.forEach((element: {button: { type: string; action: { type: string; url: any; verb: string; }}}) => {
                    // Create code: button action
                    if (element.button?.type === 'submit' && element.button?.action && element.button?.action.type === 'API') {
                        codeAction += `${formIdAsPropertyName}Submit = () => {fetch('${element.button?.action.url}', {method: '${element.button?.action.verb.toUpperCase()}',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},body: JSON.stringify(this.${formIdAsPropertyName}Form.value),}).then((data) => {data.json().then((keys) => {})});}`;
                    }
                });
                
                codeConstructor += `) {};`;
                codeTypescript += `import { Component } from '@angular/core';`;
                codeTypescript += `import { FormBuilder, FormGroup, Validators } from '@angular/forms';`;
                codeTypescript += `@Component({selector: 'app-${form.id}', templateUrl: './${form.id}.component.html', styleUrls: ['./${form.id}.component.css']})`;
                codeTypescript += `export class ${formIdAsClassName}Component {`;
                codeTypescript += codeConstructor.replace(/\, \)/gi, ')').replace(/\, \,/gi, '');
                codeTypescript += codeSelectObject.replace(/\, \]/gi, ']').replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
                codeTypescript += codeForm.replace(/\, \]/gi, ']').replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
                codeTypescript += codeArrayNew + codeArrayAdd + codeArrayGet + codeArrayRemove;
                codeTypescript += codeAction;
                codeTypescript += `}`;
            }
        );
        return codeTypescript;
    }

    setFormDirectiveElement = (array: Array<FormElement>, formIdAsPropertyName: string, isArray?: boolean) => {
        let codeForm = '',
            codeSelectObject = '',
            codeArrayNew = '',
            codeArrayGet = '',
            codeArrayAdd = '',
            codeArrayRemove = '';
        
        array.forEach(
            (element: FormElement) => {
                let typeEmail = (element.input?.type === 'email') ? true : false,
                    typeText = (element.input?.type === 'text') ? true : false,
                    typePassword = (element.input?.type === 'password') ? true : false,
                    typeDate = (element.input?.type === 'date') ? true : false,
                    required = (element.input?.required) ? true : false;
                
                if (element.array) {
                    let add = 'add'+element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1),
                        remove = 'remove'+element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1),
                        newArray = 'new'+element.array.id.charAt(0).toUpperCase() + element.array.id.slice(1);

                    codeForm += `${element.array.id}: this.${formIdAsPropertyName}FormBuilder.array([]),`;

                    codeSelectObject += this.setFormDirectiveElement(element.array.elements, formIdAsPropertyName, true).codeSelectObject;
                    codeArrayAdd += `${add}() {this.${element.array.id}.push(this.${newArray}())}`;
                    codeArrayGet += `get ${element.array.id}(): FormArray {return this.${formIdAsPropertyName}Form.get('${element.array.id}') as FormArray};`;
                    codeArrayNew += `${newArray}(): FormGroup { return this.${formIdAsPropertyName}FormBuilder.group({`;
                    codeArrayNew += this.setFormDirectiveElement(element.array.elements, formIdAsPropertyName, true).codeForm;
                    codeArrayNew += `})};`
                    codeArrayRemove += `${remove}(i:number) {this.${element.array.id}.removeAt(i)}`;
                }
                    
                if (typeText || typePassword || typeEmail || typeDate) {
                    codeForm += `${element.input?.name}: [${element.input?.defaultValue ? `'${element.input?.defaultValue}'` : null}, [${required ? 'Validators.required,' : ''} ${typeEmail ? 'Validators.email,' : ''}]],`;
                }

                if (element.select?.options) {
                    codeForm += `${element.select?.name}: [${element.select?.defaultValue ? `'${element.select?.defaultValue}'` : null}, [${required ? 'Validators.required,' : ''} ${typeEmail ? 'Validators.email,' : ''}]],`;
                    
                    if (element.select?.options?.object) {
                        const objectArray = element.select.options.object;
                        codeSelectObject += `${element.select.name}SelectObject = [`;
                        objectArray.forEach(
                            (selectObject: {value: string; valueView: string;}) => {
                                codeSelectObject += `{value: '${selectObject.value}', valueView: '${selectObject.valueView}'}, `;
                            }
                        )
                        codeSelectObject += `];`;
                    }
                }
            }
        );

        return {codeForm: codeForm, codeSelectObject: codeSelectObject, codeArrayAdd: codeArrayAdd, codeArrayGet: codeArrayGet, codeArrayNew: codeArrayNew, codeArrayRemove: codeArrayRemove};
    }

    setTableDirective = (tableArray: any) => {
        let codeTypescript = '',
        codeTable = '',
        codeAction = '',
        array,
        tableIdAsPropertyName,
        tableIdAsClassName;
        
        tableArray.forEach((table: { elements: any; id: any; action: { type: string; url: any; }; }) => {
            codeTable = '',
            array = table.elements,
            tableIdAsPropertyName = this.idToPropertyName(table.id),
            tableIdAsClassName = this.idToClassName(table.id);
    
            if (table.action.type === 'api') {
                codeAction += `${tableIdAsPropertyName}Table = () => {fetch('${table.action.url}', {method: 'GET',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},}).then((data) => {data.json().then((keys) => {return keys;})});}`;
            }

            codeTable += `${tableIdAsPropertyName}DataSource = this.${tableIdAsPropertyName}Table();`;
            codeTable += `${tableIdAsPropertyName}DisplayedColumns: string[] = [`;
            array.forEach((element: { row: { field: any; }; }) => {
                codeTable += `'${element.row.field}',`;
            });
            codeTable += `]`;
    
            codeTypescript += `import { Component } from '@angular/core';`;
            codeTypescript += `@Component({selector: 'app-${table.id}', templateUrl: './${table.id}.component.html', styleUrls: ['./${table.id}.component.css']})`;
            codeTypescript += `export class ${tableIdAsClassName}Component {`;
            codeTypescript += codeTable.replace(',]', ']');
            codeTypescript += codeAction;
            codeTypescript += `}`;
        });
    
        return codeTypescript;
    }

    setFormService = (formArray: any[]) => {
        let codeTypescript = '',
            codeForm = '',
            codeAction = '',
            array,
            formIdAsPropertyName: any,
            formIdAsClassName;
            
            formArray.forEach(
                (form: { elements: any; id: any; }) => {
                    codeAction = '',
                    array = form.elements,
                    formIdAsPropertyName = this.idToPropertyName(form.id),
                    formIdAsClassName = this.idToClassName(form.id);
            
                    array.forEach(
                        (element: {input: { type: string; required: { is: any; }; name: any; defaultValue: any; }}) => {
                            let typeEmail = (element.input?.type === 'email') ? true : false,
                                typeText = (element.input?.type === 'text') ? true : false,
                                typePassword = (element.input?.type === 'password') ? true : false,
                                typeNumber = (element.input?.type === 'number') ? true : false,
                                typeDate = (element.input?.type === 'date') ? true : false,
                                required = (element.input?.required) ? true : false;
                                
                            // Create code: attribute
                            if (typeText || typePassword || typeEmail) {
                                codeForm += `${element.input?.name} ${required ? ':' : '?:'} 'string', `;
                            }
                            codeForm += typeNumber ? `${element.input?.name} ${required ? ':' : '?:'} 'number', `: '';
                            codeForm += typeDate ? `${element.input?.name} ${required ? ':' : '?:'} 'date', `: '';
                        }
                    );
                    codeForm += `};`;
                    
                    codeTypescript += `export interface ${formIdAsClassName}Interface {`;
                    codeTypescript += codeForm.replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
                    codeTypescript += `}`;
                }
            );
        
        codeTypescript = `import { Observable, throwError } from 'rxjs'; import { catchError, retry } from 'rxjs/operators';`;
    }

    setTableService = (formArray: any) => {
    }

    setFormInterface = (formArray: any[]) => {
        let codeTypescript = '',
            codeForm = '',
            codeAction = '',
            array,
            formIdAsPropertyName: any,
            formIdAsClassName;

        formArray.forEach(
            (form: { elements: any; id: any; }) => {
                codeAction = '',
                array = form.elements,
                formIdAsPropertyName = this.idToPropertyName(form.id),
                formIdAsClassName = this.idToClassName(form.id);
        
                array.forEach(
                    (element: {input: { type: string; required: { is: any; }; name: any; defaultValue: any; }}) => {
                        let typeEmail = (element.input?.type === 'email') ? true : false,
                            typeText = (element.input?.type === 'text') ? true : false,
                            typePassword = (element.input?.type === 'password') ? true : false,
                            typeNumber = (element.input?.type === 'number') ? true : false,
                            typeDate = (element.input?.type === 'date') ? true : false,
                            required = (element.input?.required) ? true : false;
                            
                        // Create code: attribute
                        if (typeText || typePassword || typeEmail) {
                            codeForm += `${element.input?.name} ${required ? ':' : '?:'} 'string', `;
                        }
                        codeForm += typeNumber ? `${element.input?.name} ${required ? ':' : '?:'} 'number', `: '';
                        codeForm += typeDate ? `${element.input?.name} ${required ? ':' : '?:'} 'date', `: '';
                    }
                );
                codeForm += `};`;
                
                codeTypescript += `export interface ${formIdAsClassName}Interface {`;
                codeTypescript += codeForm.replace(/\, \}/gi, '}').replace(/\, \,/gi, '');
                codeTypescript += `}`;
            }
        );

        /**
         * TO-DO
         * Deal with enums
         */

        return codeTypescript;
    }

    setTableInterface = (formArray: any) => {
        // TO-DO
    }

    idToPropertyName = (id: string) => {
        let propertyName = '';
        const array = id.split('-');
        propertyName += array[0];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
            if (i > 0) propertyName += element.charAt(0).toUpperCase() + element.slice(1);
        }
    
        return propertyName;
    }

    idToClassName = (id: string) => {
        let className = '';
        const array = id.split('-');
        className += array[0].charAt(0).toUpperCase() + array[0].slice(1);
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
            if (i > 0) className += element.charAt(0).toUpperCase() + element.slice(1);
        }
    
        return className;
    }
}

