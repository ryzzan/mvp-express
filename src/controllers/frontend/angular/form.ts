import { Form, FormElementInterface, FormTabElementInterface } from "../../../../interfaces/frontend";
import { SharedFunctions } from './shared-functions';

export class FormAngular {
    shared = new SharedFunctions;
    setFormHtml = (formArray: Array<Form>) => {
        let codeHtml = '';
        formArray.forEach((form: Form) => {
            let formIdAsPropertyName = this.shared.idToPropertyName(form.id);
            codeHtml += form.isDialog ? '' : `<mat-card>`;
            if (form.title) {
                codeHtml += form.isDialog ? `<h1 mat-dialog-title>${form.title}</h1>` : `<mat-card-header>${form.title}</mat-card-header>`;
            }
            codeHtml += form.isDialog ? `<div mat-dialog-content>` : `<mat-card-content>`;
            if (form.elements) {
                codeHtml += this.setFormHtmlElement(form, form.elements, formIdAsPropertyName);
            }

            /** Create code: tabs */
            if (form.tabs) {
                codeHtml += `<mat-tab-group>`;
                form.tabs.forEach((tab:FormTabElementInterface) => {
                    codeHtml += `<mat-tab label="${tab.label}" id="${tab.id}">`;
                    codeHtml += this.setFormHtmlElement(form, tab.elements, formIdAsPropertyName);
                    codeHtml += `</mat-tab>`;
                });
                codeHtml += `</mat-tab-group>`;
            }
            codeHtml += form.isDialog ? `</div>` : `</mat-card-content>`;
            if(form.actions) {
                codeHtml += form.isDialog ? `<div mat-dialog-actions>` : `<mat-card-actions>`;
                codeHtml += this.setFormHtmlElement(form, form.actions.elements, formIdAsPropertyName);
                codeHtml += form.isDialog ? `</div>` : `</mat-card-actions>`;
            }
            codeHtml += form.isDialog ? '' : `</mat-card>`;
        });

        return codeHtml;
    }

    setFormHtmlElement = (form: Form, array: Array<FormElementInterface>, formIdAsPropertyName: string, isArray?: boolean, isTab?: boolean) => {
        let codeHtml = '',
            codeForm = '';
        
        array.forEach((element: FormElementInterface) => {
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
                let input = element.input, placeholder = input.placeholder ? `placeholder="${input.placeholder}"` : '';

                codeForm += `<mat-form-field>`;
                codeForm += `<mat-label>${input.label}</mat-label>`;
                codeForm += `<input matInput type="${input.type}" formControlName="${input.name}" id="${input.id}" ${placeholder} ${input.required ? 'required' : ''} autocomplete="new-password">`;
                codeForm += `</mat-form-field>`;
            }

            // Create code: select
            if (element.select) {
                let select = element.select,
                    isMultiple = element.select.isMultiple ? 'multiple' : '';

                codeForm += `<mat-form-field>`;
                codeForm += `<mat-label>${select.label}</mat-label>`;
                codeForm += `<mat-select formControlName="${select.name}" ${isMultiple}><mat-option *ngFor="let ${select.name}Item of ${select.name}SelectObject" [value]="${select.name}Item.value">{{${select.name}Item.valueView}}</mat-option></mat-select>`;
                codeForm += `</mat-form-field>`;
            }

            /** Create code: slide toggle */
            if (element.slide) {
                let slide = element.slide;

                codeForm += `<mat-form-field>`;
                codeForm += `<mat-label>${slide.label}</mat-label>`;
                codeForm += `<mat-slide-toggle>${slide.label}</mat-slide-toggle>`;
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

    setFormDirective = (formArray: Array<Form>) => {
        let codeTypescript = '',
            codeForm = '',
            codeSelectObject = '',
            codeAction = '',
            codeArrayAdd = '',
            codeArrayGet = '',
            codeArrayNew = '',
            codeArrayRemove = '',
            codeConstructor = 'constructor(',
            array: any,
            formIdAsPropertyName: any,
            formIdAsClassName;
            
        formArray.forEach(
            (form: Form) => {
                codeForm = '',
                codeAction = '',
                codeSelectObject = '',
                array = form.elements ? form.elements : form.tabs,
                formIdAsPropertyName = this.shared.idToPropertyName(form.id),
                formIdAsClassName = this.shared.idToClassName(form.id);

                /** Create code: form group */
                codeConstructor += `private ${formIdAsPropertyName}FormBuilder: FormBuilder, private ${formIdAsPropertyName}Route: ActivatedRoute, private ${formIdAsPropertyName}Router: Router,`
                codeForm += `${formIdAsPropertyName}Form = this.${formIdAsPropertyName}FormBuilder.group({`;
                if (form.elements) {
                    codeForm += this.setFormDirectiveElement(array, formIdAsPropertyName).codeForm;
                }
                if (form.tabs) {
                    array.forEach((tab: FormTabElementInterface)=>{
                        codeForm += this.setFormDirectiveElement(tab.elements, formIdAsPropertyName).codeForm;
                    });
                }
                codeForm += `});`;
                codeForm += `setForm = () => {`;
                codeForm += `if (!this.isAddModule) {console.log(29);`;
                codeForm += `/** TO-DO */`;
                codeForm += `/** Service this.userService.getById(this.id).pipe(first()).subscribe(x => this.form.patchValue(x));*/`;
                codeForm += `}}`;

                /** Create code: select object */
                if (form.elements) {
                    codeSelectObject += this.setFormDirectiveElement(array, formIdAsPropertyName).codeSelectObject;
                }
                if (form.tabs) {
                    array.forEach((tab: FormTabElementInterface) => {
                        codeSelectObject += this.setFormDirectiveElement(tab.elements, formIdAsPropertyName).codeSelectObject;
                    });
                }

                /** Create code: form array */
                if (form.elements) {
                    codeArrayAdd += this.setFormDirectiveElement(array, formIdAsPropertyName).codeArrayAdd;
                    codeArrayGet += this.setFormDirectiveElement(array, formIdAsPropertyName).codeArrayGet;
                    codeArrayNew += this.setFormDirectiveElement(array, formIdAsPropertyName).codeArrayNew;
                    codeArrayRemove += this.setFormDirectiveElement(array, formIdAsPropertyName).codeArrayRemove;
                }
                if (form.tabs) {
                    array.forEach((tab: FormTabElementInterface) => {
                        codeArrayAdd += this.setFormDirectiveElement(tab.elements, formIdAsPropertyName).codeArrayAdd;
                        codeArrayGet += this.setFormDirectiveElement(tab.elements, formIdAsPropertyName).codeArrayGet;
                        codeArrayNew += this.setFormDirectiveElement(tab.elements, formIdAsPropertyName).codeArrayNew;
                        codeArrayRemove += this.setFormDirectiveElement(tab.elements, formIdAsPropertyName).codeArrayRemove;
                    });
                }

                /** Create code: submit */
                if (form.elements) {
                    array.forEach((element: FormElementInterface) => {
                        // Create code: button action
                        if (element.button?.type === 'submit' && element.button?.action && element.button?.action.type === 'API') {
                            codeAction += `${formIdAsPropertyName}Submit = () => {fetch('${element.button?.action.url}', {method: '${element.button.action.verb?.toUpperCase()}',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},body: JSON.stringify(this.${formIdAsPropertyName}Form.value),}).then((data) => {data.json().then((keys) => {})});}`;
                        }
                    });
                }
                if (form.tabs) {
                    array.forEach((tab: FormTabElementInterface) => {
                        tab.elements.forEach((element: FormElementInterface) => {
                            // Create code: button action
                            if (element.button?.type === 'submit' && element.button?.action && element.button?.action.type === 'API') {
                                codeAction += `${formIdAsPropertyName}Submit = () => {fetch('${element.button?.action.url}', {method: '${element.button.action.verb?.toUpperCase()}',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},body: JSON.stringify(this.${formIdAsPropertyName}Form.value),}).then((data) => {data.json().then((keys) => {})});}`;
                            }
                        });
                    });
                }
                if (form.actions) {
                    form.actions.elements.forEach((action: FormElementInterface) => {
                            // Create code: button action
                            if (action.button?.type === 'submit' && action.button?.action && action.button?.action.type === 'API') {
                                codeAction += `${formIdAsPropertyName}Submit = () => {fetch('${action.button?.action.url}', {method: '${action.button.action.verb?.toUpperCase()}',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},body: JSON.stringify(this.${formIdAsPropertyName}Form.value),}).then((data) => {data.json().then((keys) => {})});}`;
                            }
                    });
                }

                /** Create code: dialog */
                if (form.isDialog) {
                    codeConstructor += `public ${formIdAsPropertyName}DialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData`;
                    codeAction += `${formIdAsClassName}OnNoClick(): void{ this.${formIdAsPropertyName}DialogRef.close(); }`;
                }
                
                codeConstructor += `) {this.setForm();};`;
                codeTypescript += `import { Component } from '@angular/core';`;
                codeTypescript += `import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';`;
                codeTypescript += `import { ActivatedRoute, Router } from '@angular/router';`;
                codeTypescript += form.isDialog ? `import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';` : '';
                codeTypescript += `@Component({selector: 'app-${form.id}', templateUrl: './${form.id}.component.html', styleUrls: ['./${form.id}.component.css']})`;
                codeTypescript += `export class ${formIdAsClassName}Component {`; 
                codeTypescript += `id: string = this.${formIdAsPropertyName}Route.snapshot.params['id']; isAddModule: boolean = !this.id;`;
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

    setFormDirectiveElement = (array: Array<FormElementInterface>, formIdAsPropertyName: string, isArray?: boolean) => {
        let codeForm = '',
            codeSelectObject = '',
            codeArrayNew = '',
            codeArrayGet = '',
            codeArrayAdd = '',
            codeArrayRemove = '';
        
        array.forEach(
            (element: FormElementInterface) => {
                let typeEmail = (element.input?.type === 'email') ? true : false,
                    typeText = (element.input?.type === 'text') ? true : false,
                    typeNumber = (element.input?.type === 'number') ? true : false,
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
                    
                if (typeText || typePassword || typeEmail || typeDate || typeNumber) {
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
                    formIdAsPropertyName = this.shared.idToPropertyName(form.id),
                    formIdAsClassName = this.shared.idToClassName(form.id);
            
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

    setFormInterface = (formArray: any[]) => {
        let codeTypescript = '',
            codeForm = '',
            codeAction = '',
            array: any,
            formIdAsPropertyName: any,
            formIdAsClassName;

        formArray.forEach(
            (form: Form) => {
                codeAction = '',
                array = form.elements ? form.elements : form.tabs,
                formIdAsPropertyName = this.shared.idToPropertyName(form.id),
                formIdAsClassName = this.shared.idToClassName(form.id);

                if (form.elements) {
                    array.forEach(
                        (element: FormElementInterface) => {
                            let typeEmail = (element.input?.type === 'email') ? true : false,
                                typeText = (element.input?.type === 'text') ? true : false,
                                typePassword = (element.input?.type === 'password') ? true : false,
                                // typeNumber = (element.input?.type === 'number') ? true : false,
                                typeDate = (element.input?.type === 'date') ? true : false,
                                required = (element.input?.required) ? true : false;
                                
                            // Create code: attribute
                            if (typeText || typePassword || typeEmail) {
                                codeForm += `${element.input?.name} ${required ? ':' : '?:'} 'string', `;
                            }
                            // codeForm += typeNumber ? `${element.input?.name} ${required ? ':' : '?:'} 'number', `: '';
                            codeForm += typeDate ? `${element.input?.name} ${required ? ':' : '?:'} 'date', `: '';
                        }
                    );
                }

                if (form.tabs) {
                    array.forEach((tab: FormTabElementInterface) => {
                        tab.elements.forEach(
                            (element: FormElementInterface) => {
                                let typeEmail = (element.input?.type === 'email') ? true : false,
                                    typeText = (element.input?.type === 'text') ? true : false,
                                    typePassword = (element.input?.type === 'password') ? true : false,
                                    // typeNumber = (element.input?.type === 'number') ? true : false,
                                    typeDate = (element.input?.type === 'date') ? true : false,
                                    required = (element.input?.required) ? true : false;
                                    
                                // Create code: attribute
                                if (typeText || typePassword || typeEmail) {
                                    codeForm += `${element.input?.name} ${required ? ':' : '?:'} 'string', `;
                                }
                                // codeForm += typeNumber ? `${element.input?.name} ${required ? ':' : '?:'} 'number', `: '';
                                codeForm += typeDate ? `${element.input?.name} ${required ? ':' : '?:'} 'date', `: '';
                            }
                        );
                    });
                }
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
}