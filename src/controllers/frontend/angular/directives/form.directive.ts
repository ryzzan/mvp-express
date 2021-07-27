import {
  FormElementInterface,
  ObjectToCode
} from '../../../../../interfaces/frontend';
import {
  TextTransformation
} from '../../../../utils/text.transformation';
import {
  Directive,
  FormMetaObject
} from './directives.interface';

export default class FormDirective implements Directive {
  formMetaObject: FormMetaObject;
  elements: Array<FormElementInterface>;
  constructor(
    formMetaObject: FormMetaObject,
    elements: Array<FormElementInterface>,
  ) {
    this.formMetaObject = formMetaObject;
    this.elements = elements;
  }
  injectVariables(template: string, objectToCode: ObjectToCode): string {
    const variablesTemplate = `
      ${this.formMetaObject.propertyName}Id: string;
      isAddModule: boolean;
      ${this.formMetaObject.propertyName}Form: FormGroup;
      ${this.setForm(this.elements, objectToCode)}
    `;
    return template.replace('%VARIABLES%', variablesTemplate);
  }
  injectImports(template: string): string {
    const importsTemplate = `
      import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
      import { ActivatedRoute } from '@angular/router';
      import { %pascalfy(${this.formMetaObject.propertyName})%Service } from './${this.formMetaObject.builderName}.service';
    `;
    return template.replace('%IMPORTS%', importsTemplate);
  }

  injectDependencies(template: string): string {
    const dependenciesTemplate = `private _formBuilder: FormBuilder, private _activatedRoute: ActivatedRoute, private _${this.formMetaObject.propertyName}Service: %pascalfy(${this.formMetaObject.propertyName})%Service `;
    return template.replace('%DEPENDENCIES%', dependenciesTemplate);
  }

  injectConstructor(template: string, objectToCode: ObjectToCode): string {
    const defaultConstructor = `
      this.${this.formMetaObject.propertyName}Id = this._activatedRoute.snapshot.params['id'];
      this.isAddModule = !this.${this.formMetaObject.propertyName}Id;
      this.${this.formMetaObject.propertyName}Form = this._formBuilder.group({${this.setFormBuilder(
      this.elements, objectToCode
    )}});      
    `;
    return template.replace('%CONSTRUCTOR_CODE%', defaultConstructor);
  }

  injectActions(template: string): string {
    const actionsTemplate = `
    ${this.formMetaObject.propertyName}Submit() {
      this._${this.formMetaObject.propertyName}Service.save(this.${this.formMetaObject.propertyName}Form).then((res) => {

      }).catch((err) => console.log(err));
    }
    `;
    return template.replace('%ACTIONS%', actionsTemplate);
  }

  private setFormBuilder(elements: Array < FormElementInterface > , objectToCode: ObjectToCode): string {
    let codeElements = '';

    codeElements += this.setFormBuilderElements(elements, objectToCode);

    return codeElements;
  }

  private setFormBuilderElements(
    elements: Array < FormElementInterface > ,
    objectToCode: ObjectToCode
  ): string {
    const arrayId = `${objectToCode.module}Form`;
    let codeElement = '';
    
    elements.forEach(object => {
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          if (key === 'tabs') {
            const tabs = object[key];
            if (tabs) {
              tabs.forEach(({
                elements
              }) => {
                codeElement += this.setFormBuilder(elements, objectToCode);
              });
            }
          }

          if (key === 'array') {
            const array = object[key];
            if (array) {
              const arrayPropertyName = TextTransformation.setIdToPropertyName(
                arrayId,
              );

              codeElement += `${arrayPropertyName}: this._formBuilder.array([]),`;
            }
          }

          if (key === 'input') {
            const element = object[key];
            if (element?.type === 'email') element.validators?.push('email');
            if (element?.isRequired) element.validators?.push('required');

            codeElement += `${element?.name}: [${
              element?.value ? element?.value : null
            }, [`;
            if (element?.validators) {
              codeElement += this.setFormValidators(element.validators);
            }
            codeElement += `]],`;
          }

          if (key === 'select') {
            const element = object[key];
            if (element?.isRequired) element.validators?.push('required');

            codeElement += `${element?.name}: [null, [`;
            if (element?.validators) {
              codeElement += this.setFormValidators(element.validators);
            }
            codeElement += `]],`;
          }
        }
      }
    });

    return codeElement;
  }

  private setFormValidators(validators: Array<string>): string {
    let codeValidator = '';
    validators.forEach(validator => {
      codeValidator += `Validators.${validator},`;
    });
    return codeValidator;
  }
  private setForm(elements: Array<FormElementInterface>, objectToCode: ObjectToCode): string {
    let codeElements = '';
    codeElements += this.setFormElements(elements, objectToCode);

    return codeElements;
  }
  private setFormElements(elements: Array <FormElementInterface>, objectToCode: ObjectToCode): string {
    let codeElement = '';
    const arrayId = `${objectToCode.module}Form`;
    
    elements.forEach(object => {
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          if (key === 'tabs') {
            const tabs = object[key];
            if (tabs) {
              tabs.forEach(({
                elements
              }) => {
                codeElement += this.setForm(elements, objectToCode);
              });
            }
          }

          if (key === 'array') {
            const array = object[key];
            if (array) {
              const arrayClassName = TextTransformation.setIdToClassName(
                arrayId,
              );
              const arrayPropertyName = TextTransformation.setIdToPropertyName(
                arrayId,
              );

              const add = `add${arrayClassName}`;
              const remove = `remove${arrayClassName}`;
              const newArray = `new${arrayClassName}`;

              codeElement += this.setForm(array.elements, objectToCode);

              codeElement += `${add}() {this.${arrayPropertyName}.push(this.${newArray}())}`;
              codeElement += `get ${arrayPropertyName}(): FormArray {return this.${this.formMetaObject.propertyName}Form.get('${arrayPropertyName}') as FormArray};`;
              codeElement += `${newArray}(): FormGroup { return this._formBuilder.group({`;
              codeElement += this.setFormBuilderElements(array.elements, objectToCode);
              codeElement += `})};`;
              codeElement += `${remove}(i:number) {this.${arrayPropertyName}.removeAt(i)}`;
            }
          }

          if (key === 'input') {}

          if (key === 'select') {}

          /** Select objects */
          if (object.select?.optionsObject) {
            const selectObjectName = TextTransformation.setIdToPropertyName(
              object.select?.name,
            );
            codeElement += `${selectObjectName}SelectObject = ${JSON.stringify(
              object.select.optionsObject,
            )};`;
          }
        }
      }
    });

    return codeElement;
  }
}