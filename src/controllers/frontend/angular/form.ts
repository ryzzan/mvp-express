import {
  FormButtonTypeEnum,
  FormInterface,
  FormElementInterface,
  // FormTabElementInterface,
  // RequestTypeEnum,
} from '../../../../interfaces/frontend';
import { Directive } from './directive';
// import { FormDirective } from "./form.directive";
import { FormTemplate } from './form/form.template';
import { SharedFunctions } from './shared-functions';

export class FormAngular {
  sharedFunction = new SharedFunctions();
  setFormHtml = (form: FormInterface, isTable?: boolean) => {
    const template = new FormTemplate();
    const formPropertyName = this.sharedFunction.setIdToPropertyName(form.id);
    let codeHtml = '';
    form.elements.forEach((element: FormElementInterface) => {
      const input = element.input;
      const select = element.select;
      const tabs = element.tabs;
      const array = element.array;
      const button = element.button;

      if (input) codeHtml += template.setInput(input);
      if (select) codeHtml += template.setSelect(select);
      if (tabs) codeHtml += template.setTab(tabs);
      if (array) codeHtml += template.setArray(array);
      if (button) codeHtml += template.setButton(button);
    });

    form.actions?.forEach((element: FormElementInterface) => {
      const input = element.input;
      const select = element.select;
      const tabs = element.tabs;
      const array = element.array;
      const button = element.button;

      if (input) codeHtml += template.setInput(input);
      if (select) codeHtml += template.setSelect(select);
      if (tabs) codeHtml += template.setTab(tabs);
      if (array) codeHtml += template.setArray(array);
      if (button) codeHtml += template.setButton(button);
    });

    return codeHtml;
  };

  setFormService = (formArray: any[]) => {};

  setFormInterface = (formArray: any) => {};
}
