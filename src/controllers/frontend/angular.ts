import { Directive } from './angular/directive';
import { ArchitectureToAngular } from './angular/architecture/angular-architecture';
import {
  ComponentCodeType,
  FormInterface,
  BuildedCode,
  MainConfiguration,
  ObjectToCode,
  ProjectComponentPathAndFile,
  TableInterface
} from '../../../interfaces/frontend';
import { ServiceAngular } from './angular/service';
import FormDirective from './angular/directives/form.directive';
import TableDirective from './angular/directives/table.directive';
import { FormTemplate } from './angular/templates/form.template';
import { TableTemplate } from './angular/templates/table.template';
import { TextTransformation } from '../../utils/text.transformation';
export class CodeToAngular {
  directive: Directive;
  fs = new ArchitectureToAngular;
  enableExportComponent: boolean | undefined;
  objectToCode: ObjectToCode;

  constructor({ exportInAExistentProject }: MainConfiguration) {
    this.enableExportComponent = exportInAExistentProject;
  }

  setAngularCode(objectToCode: ObjectToCode): BuildedCode {
    this.objectToCode = objectToCode;
    const { form, table, nest } = objectToCode;
    let buildedComponent: BuildedCode = {
      template: '',
      directive: '',
      service: '',
      interfaceComponent: '',
    };

    if (form) {
      buildedComponent = this.getForm(form, objectToCode);
    }

    if (table) {
      buildedComponent = this.getTable(table, objectToCode);
    }

    return buildedComponent;
  }

  getForm(form: FormInterface, objectToCode: ObjectToCode): BuildedCode {
    const formId = `${objectToCode.module}Form`;
    let template = '';
    let directive = '';
    let service = '';
    const builderName = TextTransformation.kebabfy(formId);
    const className = TextTransformation.setIdToClassName(formId);
    const propertyName = TextTransformation.setIdToPropertyName(formId);
    const formDirective = new FormDirective(
      {
        builderName,
        className,
        propertyName,
      },
      form.elements,
    );

    const formTemplateAngular = new FormTemplate();
    template = formTemplateAngular.setFormSkeleton(form, objectToCode);

    this.directive = new Directive(formDirective);
    directive = this.directive.setComponentSkeleton(formId, objectToCode);

    if (form.service) {
      const serviceAngular = new ServiceAngular(form.service);
      service = serviceAngular.setTemplateSkeleton(propertyName);
      
      this.exportToAProject({
        componentCode: service,
        componentCodeType: ComponentCodeType.Service,
        objectToCode,
      });
    }

    this.exportToAProject({
      componentCode: directive,
      componentCodeType: ComponentCodeType.Controller,
      objectToCode,
    });

    this.exportToAProject({
      componentCode: template,
      componentCodeType: ComponentCodeType.Template,
      objectToCode,
    });

    const buildedComponent = this.buildedComponent({
      template,
      directive,
      interfaceComponent: '',
      service,
    });

    return buildedComponent;
  }

  getTable(table: TableInterface, objectToCode: ObjectToCode): BuildedCode {
    const tableId = `${objectToCode.module}Table`;
    let template = '';
    let directive = '';
    let service = '';
    const builderName = TextTransformation.kebabfy(tableId);
    const className = TextTransformation.setIdToClassName(tableId);
    const propertyName = TextTransformation.setIdToPropertyName(tableId);
    const tableDirective = new TableDirective(
      {
        builderName,
        className,
        propertyName,
      },
      table.elements,
    );

    const tableTemplate = new TableTemplate();
    template = tableTemplate.setTableHtml(table, objectToCode);

    this.directive = new Directive(tableDirective);
    directive = this.directive.setComponentSkeleton(tableId, objectToCode);

    if (table.service) {
      const serviceAngular = new ServiceAngular(table.service);
      service = serviceAngular.setTemplateSkeleton(propertyName);

      this.exportToAProject({
        componentCode: service,
        componentCodeType: ComponentCodeType.Service,
        objectToCode,
      });
    }

    console.info('Enviado código de template para tratar na arquitetura.');
    this.exportToAProject({
      componentCode: directive,
      componentCodeType: ComponentCodeType.Controller,
      objectToCode,
    });

    console.info('Enviado código de directive para tratar na arquitetura.');
    this.exportToAProject({
      componentCode: template,
      componentCodeType: ComponentCodeType.Template,
      objectToCode,
    });

    const buildedComponent = this.buildedComponent({
      template,
      directive,
      interfaceComponent: '',
      service,
    });

    return buildedComponent;
  }

  private buildedComponent({
    template,
    directive,
    interfaceComponent,
    service,
  }: BuildedCode): BuildedCode {
    const buildedComponent = {
      template: template.replace(/\n/gi, '').replace(/    /gi, ''),
      directive: directive.replace(/\n/gi, '').replace(/    /gi, ''),
      interfaceComponent,
      service: service.replace(/\n/gi, '').replace(/    /gi, ''),
    };
    return buildedComponent;
  }

  async exportToAProject({
    componentCode,
    componentCodeType,
    objectToCode
  }: ProjectComponentPathAndFile): Promise<void> {
    if (!this.enableExportComponent) {
      return;
    }
    const { projectPath } = this.objectToCode;
    await this.fs.createProjectComponentPathAndFile({
      projectPath,
      componentCode,
      componentCodeType,
      objectToCode
    });
  }
}
