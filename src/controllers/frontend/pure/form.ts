import { FormInterface } from '../../../../interfaces/frontend';
import { SharedFunctions } from '../angular/shared-functions';

export class FormPure {
  sharedFunctions = new SharedFunctions();
  constructor() {}

  setFormHtml = (formObject: FormInterface) => {};

  setFormDirective = (formObject: FormInterface) => {};

  setFormInterface = (formObject: FormInterface) => {};

  setFormService = (formObject: FormInterface) => {};
}
