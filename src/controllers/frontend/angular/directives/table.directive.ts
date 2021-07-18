import { TableElementInterface } from '../../../../../interfaces/frontend';
import { Directive, FormMetaObject } from './directives.interface';

export default class TableDirective implements Directive {
  formMetaObject: FormMetaObject;
  elements: Array<TableElementInterface>;
  constructor(
    formMetaObject: FormMetaObject,
    elements: Array<TableElementInterface>,
  ) {
    this.formMetaObject = formMetaObject;
    this.elements = elements;
  }
  injectVariables(template: string): string {
    const variablesTemplate = `
      ${this.setTableObject()}
      ${this.formMetaObject.propertyName}DataSource = [];
    `;
    return template.replace('%VARIABLES%', variablesTemplate);
  }
  injectImports(template: string): string {
    const importsTemplate = `
      import { FormBuilder, FormGroup } from '@angular/forms';
      import { ActivatedRoute } from '@angular/router';
      import { %pascalfy(${this.formMetaObject.propertyName})%Service } from './${this.formMetaObject.propertyName}.service';
    `;
    return template.replace('%IMPORTS%', importsTemplate);
  }

  injectDependencies(template: string): string {
    const dependenciesTemplate = `private _dialog: MatDialog`;
    return template.replace('%DEPENDENCIES%', dependenciesTemplate);
  }

  injectConstructor(template: string): string {
    const defaultConstructor = ``;
    return template.replace('%CONSTRUCTOR_CODE%', defaultConstructor);
  }

  injectActions(template: string): string {
    const actionsTemplate = `
    ${this.formMetaObject.propertyName}Submit() {
      this._${this.formMetaObject.propertyName}Service.save(this.${this.formMetaObject.builderName}Form).then((res) => {

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
}
