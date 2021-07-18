import { Directive } from './angular/directive';
import { FileSystem } from './angular/fs/filesystem';
import {
  BuildedCode,
  ComponentCodeType,
  MainConfiguration,
  ObjectToCode,
  ProjectComponentPathAndFile,
} from '../../../interfaces/frontend';
import { ServiceAngular } from './angular/service';
import FormDirective from './angular/directives/form.directive';
import TableDirective from './angular/directives/table.directive';
import { FormTemplate } from './angular/templates/form.template';
import { TableTemplate } from './angular/templates/table.template';
import { TextTransformation } from '../../utils/text.transformation';
export class CodeToAngular {
  directive: Directive;
  fs = new FileSystem();
  enableExportComponent: boolean | undefined;
  objectToCode: ObjectToCode;

  constructor({ exportInAExistentProject }: MainConfiguration) {
    this.enableExportComponent = exportInAExistentProject;
  }

  setAngularCode(objectToCode: ObjectToCode): BuildedCode {
    this.objectToCode = objectToCode;
    let codeTemplate = '';
    let codeDirective = '';
    let codeService = '';
    const codeInterface = '';
    const { form, table } = objectToCode;

    if (form) {
      const builderName = TextTransformation.setIdToPropertyName(form?.id);
      const className = TextTransformation.setIdToClassName(form?.id);
      const propertyName = TextTransformation.setIdToPropertyName(form?.id);
      const formDirective = new FormDirective(
        {
          builderName,
          className,
          propertyName,
        },
        form.elements,
      );
      this.directive = new Directive(formDirective);
      const formTemplateAngular = new FormTemplate();
      codeTemplate = formTemplateAngular.setFormSkeleton(form, propertyName);
      codeDirective = this.directive.setComponentSkeleton(form.id);

      if (form.service) {
        const service = new ServiceAngular(form.service);
        codeService = service.setTemplateSkeleton(propertyName);
      }

      this.exportToAProject({
        componentPath: TextTransformation.kebabfy(form.id),
        componentCode: codeDirective,
        componentCodeType: ComponentCodeType.Controller,
      });
      this.exportToAProject({
        componentPath: TextTransformation.kebabfy(form.id),
        componentCode: codeTemplate,
        componentCodeType: ComponentCodeType.Template,
      });
    }

    if (table) {
      const tableTemplate = new TableTemplate();
      codeTemplate += tableTemplate.setTableHtml(table);
      const builderName = TextTransformation.setIdToPropertyName(table?.id);
      const className = TextTransformation.setIdToClassName(table?.id);
      const propertyName = TextTransformation.setIdToPropertyName(table?.id);
      const formDirective = new TableDirective(
        {
          builderName,
          className,
          propertyName,
        },
        table.elements,
      );
      this.directive = new Directive(formDirective);
      codeDirective = this.directive.setComponentSkeleton(table?.id);
      console.info('Enviado código de template para tratar na arquitetura.');
      this.exportToAProject({
        componentPath: table.id,
        componentCode: codeDirective,
        componentCodeType: ComponentCodeType.Controller,
      });
      console.info('Enviado código de directive para tratar na arquitetura.');
      this.exportToAProject({
        componentPath: table.id,
        componentCode: codeTemplate,
        componentCodeType: ComponentCodeType.Template,
      });
    }

    const buildedComponent = {
      template: codeTemplate.replace(/\n/gi, '').replace(/    /gi, ''),
      directive: codeDirective.replace(/\n/gi, '').replace(/    /gi, ''),
      interface: codeInterface,
      service: codeService.replace(/\n/gi, '').replace(/    /gi, ''),
    };

    return buildedComponent;
  }

  async exportToAProject({
    componentPath,
    componentCode,
    componentCodeType,
  }: ProjectComponentPathAndFile): Promise<void> {
    console.log('HERE');
    if (!this.enableExportComponent) {
      return;
    }
    const { projectPath } = this.objectToCode;
    await this.fs.createProjectComponentPathAndFile({
      projectPath,
      componentPath,
      componentCode,
      componentCodeType,
    });
  }
}
