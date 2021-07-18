import {
  FormElementInterface,
  TableElementInterface,
} from '../../../../../interfaces/frontend';

export interface Directive {
  formMetaObject: FormMetaObject;
  elements: Array<TableElementInterface | FormElementInterface>;
  injectImports(template: string): string;
  injectVariables(template: string): string;
  injectDependencies(template: string): string;
  injectConstructor(template: string): string;
  injectActions(template: string): string;
}

export interface FormMetaObject {
  builderName: string;
  className: string;
  propertyName: string;
}
