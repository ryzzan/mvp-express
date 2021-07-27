import {
  DialogInterface,
  ObjectToCode,
  TableElementInterface,
} from '../../../../../interfaces/frontend';
import { TextTransformation } from '../../../../utils/text.transformation';
import { Directive, FormMetaObject } from './directives.interface';
import FormDirective from './form.directive';

export default class TableDirective implements Directive {
  formMetaObject: FormMetaObject;
  elements: Array<TableElementInterface>;
  newImports: Array<string> = [];
  constructor(
    formMetaObject: FormMetaObject,
    elements: Array<TableElementInterface>,
  ) {
    this.formMetaObject = formMetaObject;
    this.elements = elements;
  }
  injectVariables(template: string, objectToCode: ObjectToCode): string {
    let variablesTemplate = `
      ${this.setTableObject()}
      ${this.formMetaObject.propertyName}DataSource: any = [];      
    `;

    if (objectToCode.table?.actions) {
      const formDirective = new FormDirective(this.formMetaObject, objectToCode.table.actions.elements);
      variablesTemplate += `${this.formMetaObject.propertyName}Form: FormGroup;
      ${formDirective.setForm(objectToCode.table.actions.elements, objectToCode)}`
    }
    return template.replace('%VARIABLES%', variablesTemplate);
  }
  injectImports(template: string): string {
    let importsTemplate = `
      import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
      import { ActivatedRoute } from '@angular/router';
      import { MatDialog } from '@angular/material/dialog';
      import { %pascalfy(${this.formMetaObject.propertyName})%Service } from './${this.formMetaObject.builderName}.service';
    `;
    this.newImports.forEach(imports => {
      importsTemplate += imports;
    });

    return template.replace('%IMPORTS%', importsTemplate);
  }

  injectDependencies(template: string): string {
    let dependenciesTemplate = `private _formBuilder: FormBuilder, private _dialog: MatDialog, private _${this.formMetaObject.propertyName}Service: %pascalfy(${this.formMetaObject.propertyName})%Service`;
    return template.replace('%DEPENDENCIES%', dependenciesTemplate);
  }

  injectConstructor(template: string, objectToCode: ObjectToCode): string {
    let defaultConstructor = `
      this._${this.formMetaObject.propertyName}Service.getAll().then((result) => {
        this.${this.formMetaObject.propertyName}DataSource = result
      }).catch(err => console.log(err))
    `;

    if (objectToCode.table?.actions) {
      const formDirective = new FormDirective(this.formMetaObject, objectToCode.table.actions.elements);
      defaultConstructor += `
      this.${this.formMetaObject.propertyName}Form = this._formBuilder.group({${formDirective.setFormBuilder(
        objectToCode.table.actions.elements, objectToCode
      )}});`;
    }

    return template.replace('%CONSTRUCTOR_CODE%', defaultConstructor);
  }

  injectActions(template: string): string {
    const actionsTemplate = `
      ${this.setTableElements()}
      ${this.formMetaObject.propertyName}Submit() {
        this._${this.formMetaObject.propertyName}Service.save(this.${this.formMetaObject.propertyName}Form).then((res) => {

        }).catch((err) => console.log(err));
      }
    `;
    return template.replace('%ACTIONS%', actionsTemplate);
  }

  setTableObject(): string {
    let codeTableObject = '';

    codeTableObject += `${this.formMetaObject.propertyName}DisplayedColumns: string[] = [`;
    this.elements.forEach((element: TableElementInterface) => {
      codeTableObject += `'${element.row.field}',`;
    });
    codeTableObject += `];`;

    return codeTableObject;
  }

  setTableElements(): string {
    let codeElement = '';
    this.elements.forEach(object => {
      if (object.row) {
        const menus = object.row.menu;

        menus?.forEach(menu => {
          if (menu.dialog) {
            codeElement += this.setDialog(menu.dialog);
          }
        });
      }
    });

    return codeElement;
  }

  setDialog(dialog: DialogInterface): string {
    let codeDialog = '';
    const dialogTemplateAsClassName = TextTransformation.setIdToClassName(
      dialog.templateFolder,
    );
    const dialogTemplateAsPropertyName = TextTransformation.setIdToPropertyName(
      dialog.templateFolder,
    );
    this.newImports.push(
      `import {${dialogTemplateAsClassName}Component} from '../%kebabfy(${dialogTemplateAsClassName})%/%kebabfy(${dialogTemplateAsClassName})%.component'`,
    );
    codeDialog += `${dialogTemplateAsPropertyName}OpenDialog = () => {`;
    codeDialog += `const ${dialogTemplateAsPropertyName}DialogRef = this._dialog.open(${dialogTemplateAsClassName}Component,{`;

    if (dialog.dialogDataInterface) {
      codeDialog += `,data:`;
      codeDialog += TextTransformation.objectToString(
        dialog.dialogDataInterface,
      );
    }

    codeDialog += `})`;
    codeDialog += `};`;

    return codeDialog;
  }
}
