import { BuildedCode, ObjectToCode } from '../../../interfaces/frontend';
import { FormPure } from './pure/form';

export class CodeToPure {
  formPure = new FormPure();

  setPureCode(objectToCode: ObjectToCode): BuildedCode {
    let codeHtml = '';
    let codeDirective = '';
    let codeInterface = '';

    if (objectToCode.form) {
      codeHtml += this.formPure.setFormHtml(objectToCode.form);
      codeDirective += this.formPure.setFormDirective(objectToCode.form);
      codeInterface += this.formPure.setFormInterface(objectToCode.form);
    }

    return {
      template: codeHtml,
      directive: codeDirective,
      interface: codeInterface,
    };
  }
}
