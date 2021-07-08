import {
    DialogInterface,
    DirectiveElements,
    FormElementInterface,
    FormInterface,
    ObjectToCode,
    TableElementInterface,
    TableInterface
} from "../../../../interfaces/frontend";
import {
    SharedFunctions
} from "./shared-functions";
import {
    TableDirective
} from "./table/table.directive";

export class Directive {
    constructor() {}

    sharedFunction = new SharedFunctions;
    /** IMPORT */
    setImport = (object: ObjectToCode, importObject: DirectiveElements) => {
        let codeImport = '';

        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                if (key === 'form') {
                    const form = object[key];
                    if (form) {
                        codeImport += `import {FormBuilder,`
                        this.setImportForm(form).forEach(element => {
                            if (element === 'formArray') codeImport += `FormArray,FormGroup`;
                            if (element === 'formValidators') codeImport += `,Validators`;
                        });
                        codeImport += `} from '@angular/forms';`;

                        codeImport += `import { ActivatedRoute, Router } from '@angular/router';`;
                    }
                }

                if (key === 'table') {
                    const tableObject = object[key];
                    for (const element in tableObject) {
                        if (Object.prototype.hasOwnProperty.call(tableObject, element)) {
                            if (element === 'elements') {
                                const elements = tableObject.elements;

                                elements.forEach(tag => {
                                    if (tag.row) {
                                        if (tag.row.menu) {
                                            const menus = tag.row.menu;

                                            menus.forEach(menu => {
                                                if (menu.dialog) {
                                                    const dialogTemplateAsClassName = this.sharedFunction.setIdToClassName(menu.dialog.templateFolder);
                                                    importObject.dialog = true;

                                                    codeImport += `import {${dialogTemplateAsClassName}Component} from '../${menu.dialog.templateFolder}/${menu.dialog.templateFolder}.component';`
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    }
                }
            }
        }

        codeImport += `import {Component} from '@angular/core';`;

        for (const key in importObject) {

            /** Dialog import */
            if (key === 'dialog' && importObject[key]) codeImport += `import {MatDialog} from '@angular/material/dialog';`;
        }

        return codeImport;
    }

    setImportForm = (form: FormInterface, importArray: Array<string> = ['form']) => {
        let array: Array<string> = importArray;
        for (const element in form) {
            if (Object.prototype.hasOwnProperty.call(form, element)) {
                if (element === 'elements') {
                    const elements = form[element];
                    array = this.setImportFormElements(elements, importArray);
                }
            }
        }

        return array;
    }

    setImportFormElements = (elements: Array < FormElementInterface >, importArray: Array<string>) => {
        let arrayImport = importArray;
        elements.forEach(object => {
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    if (key === 'tabs') {
                        const tabs = object[key]
                        if (tabs) {
                            tabs.forEach(tab => {
                                this.setImportForm(tab, arrayImport);
                            });
                        }
                    }

                    if (key === 'array') {
                        const array = object[key];
                        if (array) { 
                            arrayImport.push('formArray');
                        }
                    }

                    if (key === 'input') {

                    }

                    if (key === 'select') {

                    }
                }
            }
        })
        
        return arrayImport;
    }

    /** CONSTRUCTOR */
    setClassConstructor = (object: ObjectToCode) => {
        let codeConstructor = 'constructor(';

        for (const property in object) {
            if (Object.prototype.hasOwnProperty.call(object, property)) {
                if (property === 'form') {
                    const formObject = object[property],
                        formIdAsPropertyName = formObject ? this.sharedFunction.setIdToPropertyName(formObject.id) : '';

                    codeConstructor += `private ${formIdAsPropertyName}Builder: FormBuilder,private ${formIdAsPropertyName}Route: ActivatedRoute,`;

                    for (const element in formObject) {
                        if (Object.prototype.hasOwnProperty.call(formObject, element)) {
                            if (element === 'elements') {
                                const elements = formObject[element];
                                elements.forEach(tag => {
                                    for (const k in tag) {
                                        if (Object.prototype.hasOwnProperty.call(tag, k)) {
                                            if (tag === 'array') {
                                                // NOTHING HERE?
                                            }
                                        }
                                    }
                                })
                            }
                        }
                    }
                }

                if (property === 'table') {
                    const tableObject = object[property];
                    for (const element in tableObject) {
                        if (Object.prototype.hasOwnProperty.call(tableObject, element)) {
                            if (element === 'elements') {
                                const elements = tableObject.elements;

                                elements.forEach(tag => {
                                    if (tag.row) {
                                        if (tag.row.menu) {
                                            const menus = tag.row.menu;

                                            menus.forEach(menu => {
                                                if (menu.dialog) {
                                                    const dialogTemplateAsClassName = this.sharedFunction.setIdToClassName(menu.dialog.templateFolder),
                                                        tableIdAsPropertyName = this.sharedFunction.setIdToPropertyName(tableObject.id);

                                                    codeConstructor += `private ${tableIdAsPropertyName}Dialog: MatDialog,`
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    }
                }
            }
        }
        codeConstructor += `) {}`;

        return codeConstructor;
    }


    setTableObject = (object: ObjectToCode) => {
        let codeTableObject = '';

        for (const property in object) {
            if (Object.prototype.hasOwnProperty.call(object, property)) {
                if (property === 'table') {
                    const tableObject = object[property];

                    for (const element in tableObject) {
                        if (Object.prototype.hasOwnProperty.call(tableObject, element)) {
                            const tableIdAsPropertyName = this.sharedFunction.setIdToPropertyName(tableObject.id);
                            if (element === 'object') {
                                const object = tableObject[element];

                                codeTableObject += `${tableIdAsPropertyName}DataSource = ${JSON.stringify(object)};`;
                            }

                            if (element === 'elements') {
                                const rows = tableObject[element];
                                codeTableObject += `${tableIdAsPropertyName}DisplayedColumns: string[] = [`;
                                rows.forEach((row: TableElementInterface) => {
                                    codeTableObject += `'${row.row.field}',`;
                                });
                                codeTableObject += `];`;
                            }
                        }
                    }
                }
            }
        }

        return codeTableObject;
    }

    setObject = (object: ObjectToCode) => {
        let codeObject = '';
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                if (key === 'form') {
                    const form = object[key];
                    if (form) {
                        const formBuilderName = this.sharedFunction.setIdToPropertyName(form?.id),
                        formClassName = this.sharedFunction.setIdToClassName(form?.id),
                        formPropertyName = this.sharedFunction.setIdToPropertyName(form?.id),
                        formMetaObject = {builderName: formBuilderName, className: formClassName, propertyName: formPropertyName};


                        codeObject += `${formPropertyName}Id: string = this.${formPropertyName}Route.snapshot.params['id']; isAddModule: boolean = !this.${formPropertyName}Id;`;
                        codeObject += `${formBuilderName}Form = this.${formBuilderName}Builder.group({`;
                        codeObject += this.setFormBuilder(form, formMetaObject);
                        codeObject += `});`

                        codeObject += this.setForm(form, formMetaObject);
                    }
                }

                if (key === 'table') {
                    const table = object[key];
                    if (table) {
                        const tableClassName = this.sharedFunction.setIdToClassName(table.id),
                        tablePropertyName = this.sharedFunction.setIdToPropertyName(table.id),
                        tableMetaObject = {className: tableClassName, propertyName: tablePropertyName};

                        codeObject += this.setTable(table, tableMetaObject)
                    }
                }
            }
        }

        return codeObject;
    }

    /** FORM */
    setForm = (form: FormInterface, formMetaObject: {builderName: string, className: string, propertyName: string}) => {
        let codeElements = '';
        for (const element in form) {
            if (Object.prototype.hasOwnProperty.call(form, element)) {
                if (element === 'elements') {
                    const elements = form[element];
                    codeElements += this.setFormElements(elements, formMetaObject);
                }
            }
        }

        return codeElements;
    }

    setFormElements = (elements: Array < FormElementInterface >, formMetaObject: {builderName: string, className: string, propertyName: string}) => {
        let codeElement = '';
        elements.forEach(object => {
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    if (key === 'tabs') {
                        const tabs = object[key]
                        if (tabs) {
                            tabs.forEach(tab => {
                                codeElement += this.setForm(tab, formMetaObject);
                            });
                        }
                    }

                    if (key === 'array') {
                        const array = object[key];
                        if (array) {
                            const arrayClassName = this.sharedFunction.setIdToClassName(array.id),
                            arrayPropertyName = this.sharedFunction.setIdToPropertyName(array.id);

                            let add = `add${arrayClassName}`,
                            remove = `remove${arrayClassName}`,
                            newArray = `new${arrayClassName}`;

                            codeElement += this.setForm(array, formMetaObject);

                            codeElement += `${add}() {this.${arrayPropertyName}.push(this.${newArray}())}`;
                            codeElement += `get ${arrayPropertyName}(): FormArray {return this.${formMetaObject.propertyName}Form.get('${arrayPropertyName}') as FormArray};`;
                            codeElement += `${newArray}(): FormGroup { return this.${formMetaObject.propertyName}Builder.group({`;
                            codeElement += this.setFormBuilderElements(array.elements, formMetaObject);
                            codeElement += `})};`
                            codeElement += `${remove}(i:number) {this.${arrayPropertyName}.removeAt(i)}`;
                        }
                    }

                    if (key === 'input') {

                    }

                    if (key === 'select') {

                    }

                    /** Select objects */
                    if (object.select?.optionsObject) {
                        const selectObjectName = this.sharedFunction.setIdToPropertyName(object.select?.name);
                        codeElement += `${selectObjectName}SelectObject = ${JSON.stringify(object.select.optionsObject)};`;
                    }
                }
            }
        })

        return codeElement;
    }

    setFormBuilder = (form: FormInterface, formMetaObject: {builderName: string, className: string, propertyName: string}) => {
        let codeElements = '';
        for (const element in form) {
            if (Object.prototype.hasOwnProperty.call(form, element)) {
                if (element === 'elements') {
                    const elements = form[element];
                    codeElements += this.setFormBuilderElements(elements, formMetaObject);
                }
            }
        }

        return codeElements;
    }

    setFormBuilderElements = (elements: Array < FormElementInterface >, formMetaObject: {builderName: string, className: string, propertyName: string}) => {
        let codeElement = '';
        elements.forEach(object => {
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    if (key === 'tabs') {
                        const tabs = object[key]
                        if (tabs) {
                            tabs.forEach(tab => {
                                codeElement += this.setFormBuilder(tab, formMetaObject);
                            });
                        }
                    }

                    if (key === 'array') {
                        const array = object[key]
                        if (array) {
                            const arrayClassName = this.sharedFunction.setIdToClassName(array.id),
                            arrayPropertyName = this.sharedFunction.setIdToPropertyName(array.id);

                            codeElement += `${arrayPropertyName}: this.${formMetaObject.propertyName}Builder.array([]),`;
                        }
                    }

                    if (key === 'input') {
                        const element = object[key];
                        if (element?.type === 'email') element.validators?.push('email');
                        if (element?.isRequired) element.validators?.push('required');

                        codeElement += `${element?.name}: [${element?.value ? element?.value : null}, [`
                        if (element?.validators) {
                            codeElement += this.setFormValidators(element.validators);
                        }
                        codeElement += `]],`;
                    }

                    if (key === 'select') {
                        const element = object[key];
                        if (element?.isRequired) element.validators?.push('required');

                        codeElement += `${element?.name}: [null, [`
                        if (element?.validators) {
                            codeElement += this.setFormValidators(element.validators);
                        }
                        codeElement += `]],`;
                    }
                }
            }
        })

        return codeElement;
    }

    setFormValidators = (validators: Array < string > ) => {
        let codeValidator = '';
        validators.forEach(validator => {
            codeValidator += `Validators.${validator},`;
        });
    }

    /** TABLE */
    setTable = (table: TableInterface, tableMetaObject: {className: string, propertyName: string}) => {
        let codeElements = '';
        for (const element in table) {
            if (Object.prototype.hasOwnProperty.call(table, element)) {
                if (element === 'elements') {
                    const elements = table[element];
                    codeElements += this.setTableElements(elements, tableMetaObject);
                }
            }
        }

        return codeElements;
    }

    setTableElements = (elements: Array < TableElementInterface >, tableMetaObject: {className: string, propertyName: string}) => {
        let codeElement = '';
        elements.forEach(object => {
            for (const key in object) {
                console.log(key);
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    if (key === 'row') {
                        const row = object[key],
                        menus = row.menu;

                        menus?.forEach(menu => {
                            if (menu.dialog) {
                                codeElement += this.setDialog(menu.dialog, tableMetaObject.propertyName);
                            }
                        });
                    }
                }
            }
        })

        return codeElement;
    }

    /** DIALOG */
    setDialog = (dialog: DialogInterface, componentCallingDialogId: string) => {
        let codeDialog = '';
        const dialogTemplateAsClassName = this.sharedFunction.setIdToClassName(dialog.templateFolder),
            dialogTemplateAsPropertyName = this.sharedFunction.setIdToPropertyName(dialog.templateFolder),
            tableIdAsPropertyName = this.sharedFunction.setIdToPropertyName(componentCallingDialogId);

        codeDialog += `${dialogTemplateAsPropertyName}OpenDialog = () => {`;
        codeDialog += `const ${dialogTemplateAsPropertyName}DialogRef = this.${tableIdAsPropertyName}Dialog.open(${dialogTemplateAsClassName}Component,{`;

        if (dialog.dialogDataInterface) {
            codeDialog += `,data:`;
            codeDialog += this.sharedFunction.objectToString(dialog.dialogDataInterface);
        }

        codeDialog += `})`;
        codeDialog += `};`;

        return codeDialog;
    }
}