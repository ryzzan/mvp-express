import { BuildedCode, ObjectToCode } from '../../../interfaces/frontend';
import { FormPure } from './pure/form';

export class CodeToPure {
  // formPure = new FormPure();

  setPureCode(objectToCode: ObjectToCode): BuildedCode {
    const codeHtml = '';
    const codeDirective = '';
    const codeInterface = '';

    // if (objectToCode.form) {
    //   codeHtml += this.formPure.setFormHtml(objectToCode.form);
    //   codeDirective += this.formPure.setFormDirective(objectToCode.form);
    //   codeInterface += this.formPure.setFormInterface(objectToCode.form);
    // }

    return {
      template: codeHtml,
      directive: codeDirective,
      interfaceComponent: codeInterface,
      service: '',
    };
  }
}
