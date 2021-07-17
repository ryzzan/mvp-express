import { Directive } from './angular/directive';
import { FileSystem } from './angular/fs/filesystem';
import { FormAngular } from './angular/form';
import {
  BuildedCode,
  ComponentCodeType,
  ObjectToCode,
} from '../../../interfaces/frontend';
import { SharedFunctions } from './angular/shared-functions';
import { TableAngular } from './angular/table';
export class CodeToAngular {
  formAngular = new FormAngular();
  directive = new Directive();
  tableAngular = new TableAngular();
  fs = new FileSystem();

  sharedFunction = new SharedFunctions();

  async setAngularCode(objectToCode: ObjectToCode): Promise<BuildedCode> {
    let codeTemplate = '';
    let codeDirective = '';
    const codeInterface = '';
    const form = objectToCode.form;
    const table = objectToCode.table;
    if (form) {
      const importObject = {};
      const formIdAsClassName = this.sharedFunction.setIdToClassName(form?.id);
      const formPropertyName = this.sharedFunction.setIdToPropertyName(
        form?.id,
      );

      codeTemplate += `<mat-card><form id="${form.id}" [formGroup]="${formPropertyName}Form" (ngSubmit)="${formPropertyName}Submit()">`;
      if (form.title)
        codeTemplate += `<mat-card-header><mat-card-title>${form.title}</mat-card-title>`;
      if (form.subtitle)
        codeTemplate += `<mat-card-subtitle>${form.subtitle}</mat-card-subtitle>`;
      if (form.title) codeTemplate += `</mat-card-header>`;
      codeTemplate += this.formAngular.setFormHtml(form);
      codeTemplate += `</form></mat-card>`;

      codeDirective += this.directive.setImport(objectToCode, importObject);
      codeDirective += `@Component({selector: 'app-${form.id}', templateUrl: './${form.id}.component.html', styleUrls: ['./${form.id}.component.sass']})`;
      codeDirective += `export class ${formIdAsClassName}Component {`;
      codeDirective += this.directive.setClassConstructor(objectToCode);
      codeDirective += this.directive.setObject(objectToCode);
      codeDirective += `}`;
      await this.fs.createProjectComponentPathAndFile(
        objectToCode.projectPath,
        form.id,
        codeDirective,
        ComponentCodeType.Controller,
      );
      await this.fs.createProjectComponentPathAndFile(
        objectToCode.projectPath,
        form.id,
        codeTemplate,
        ComponentCodeType.Template,
      );
      // codeInterface +=  this.formAngular.setFormInterface(form);
    }

    if (table) {
      const importObject = {};
      const tableIdAsClassName = this.sharedFunction.setIdToClassName(
        table?.id,
      );

      codeTemplate += this.tableAngular.setTableHtml(table);

      codeDirective += this.directive.setImport(objectToCode, importObject);
      codeDirective += `@Component({selector: 'app-${table.id}', templateUrl: './${table.id}.component.html', styleUrls: ['./${table.id}.component.sass']})`;
      codeDirective += `export class ${tableIdAsClassName}Component {`;
      codeDirective += this.directive.setClassConstructor(objectToCode);
      codeDirective += this.directive.setTableObject(objectToCode);
      codeDirective += this.directive.setObject(objectToCode);
      codeDirective += `}`;
      console.info('Enviado código de template para tratar na arquitetura.');
      await this.fs.createProjectComponentPathAndFile(
        objectToCode.projectPath,
        table.id,
        codeDirective,
        ComponentCodeType.Controller,
      );
      console.info('Enviado código de directive para tratar na arquitetura.');
      await this.fs.createProjectComponentPathAndFile(
        objectToCode.projectPath,
        table.id,
        codeTemplate,
        ComponentCodeType.Template,
      );
    }

    const buildedComponent = {
      template: codeTemplate.replace(/\n/gi, '').replace(/    /gi, ''),
      directive: codeDirective
        .replace(/\, \]/gi, ']')
        .replace(/\, \}/gi, '}')
        .replace(/\, \,/gi, ''),
      interface: codeInterface,
    };

    console.info(buildedComponent);
    return buildedComponent;
  }
}
