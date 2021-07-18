import { Directive } from './angular/directive';
import { FileSystem } from './angular/fs/filesystem';
import {
  ComponentCodeType,
  FormInterface,
  BuildedCode,
  MainConfiguration,
  ObjectToCode,
  ProjectComponentPathAndFile,
  TableInterface,
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
    const { form, table } = objectToCode;
    let buildedComponent: BuildedCode = {
      template: '',
      directive: '',
      service: '',
      interfaceComponent: '',
    };

    if (form) {
      buildedComponent = this.getForm(form);
    }

    if (table) {
      buildedComponent = this.getTable(table);
    }

    return buildedComponent;
  }

  getForm(form: FormInterface): BuildedCode {
    let template = '';
    let directive = '';
    let service = '';
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

    const formTemplateAngular = new FormTemplate();
    template = formTemplateAngular.setFormSkeleton(form, propertyName);

    this.directive = new Directive(formDirective);
    directive = this.directive.setComponentSkeleton(form.id);

    if (form.service) {
      const serviceAngular = new ServiceAngular(form.service);
      service = serviceAngular.setTemplateSkeleton(propertyName);
    }

    this.exportToAProject({
      componentPath: TextTransformation.kebabfy(form.id),
      componentCode: directive,
      componentCodeType: ComponentCodeType.Controller,
    });
    this.exportToAProject({
      componentPath: TextTransformation.kebabfy(form.id),
      componentCode: template,
      componentCodeType: ComponentCodeType.Template,
    });

    const buildedComponent = this.buildedComponent({
      template,
      directive,
      interfaceComponent: '',
      service,
    });

    return buildedComponent;
  }

  getTable(table: TableInterface): BuildedCode {
    let template = '';
    let directive = '';
    let service = '';
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

    const tableTemplate = new TableTemplate();
    template = tableTemplate.setTableHtml(table);

    this.directive = new Directive(formDirective);
    directive = this.directive.setComponentSkeleton(table?.id);

    if (table.service) {
      const serviceAngular = new ServiceAngular(table.service);
      service = serviceAngular.setTemplateSkeleton(propertyName);
    }

    console.info('Enviado código de template para tratar na arquitetura.');
    this.exportToAProject({
      componentPath: TextTransformation.kebabfy(table.id),
      componentCode: directive,
      componentCodeType: ComponentCodeType.Controller,
    });
    console.info('Enviado código de directive para tratar na arquitetura.');
    this.exportToAProject({
      componentPath: TextTransformation.kebabfy(table.id),
      componentCode: template,
      componentCodeType: ComponentCodeType.Template,
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
