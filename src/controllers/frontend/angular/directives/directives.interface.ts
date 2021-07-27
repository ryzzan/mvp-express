import {
  FormElementInterface,
  ObjectToCode,
  TableElementInterface,
} from '../../../../../interfaces/frontend';

export interface Directive {
  formMetaObject: FormMetaObject;
  elements: Array<TableElementInterface | FormElementInterface>;
  injectImports(template: string): string;
  injectVariables(template: string, objectToCode: ObjectToCode): string;
  injectDependencies(template: string): string;
  injectConstructor(template: string, objectToCode: ObjectToCode): string;
  injectActions(template: string): string;
}

export interface FormMetaObject {
  builderName: string;
  className: string;
  propertyName: string;
}
