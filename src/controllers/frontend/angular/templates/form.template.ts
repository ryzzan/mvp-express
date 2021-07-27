import {
  ButtonInterface,
  FormButtonTypeEnum,
  FormElementInterface,
  FormInterface,
  InputInterface,
  ObjectToCode,
  SelectInterface,
} from '../../../../../interfaces/frontend';
import { TextTransformation } from '../../../../utils/text.transformation';

export class FormTemplate {
  setFormSkeleton(form: FormInterface, objectToCode: ObjectToCode): string {
    const formId = `${objectToCode.module}Form`;
    const builderName = TextTransformation.kebabfy(formId);
    const propertyName = TextTransformation.setIdToPropertyName(formId);
    let formTemplate = '';

    formTemplate += `<mat-card><form id="${builderName}" [formGroup]="${propertyName}Form" (ngSubmit)="${propertyName}Submit()">`;
    if (form.title)
      formTemplate += `<mat-card-header><mat-card-title>${form.title}</mat-card-title>`;
    if (form.subtitle)
      formTemplate += `<mat-card-subtitle>${form.subtitle}</mat-card-subtitle>`;
    if (form.title) formTemplate += `</mat-card-header>`;

    formTemplate += this.setFormInputs(form, objectToCode);

    formTemplate += `</form></mat-card>`;

    return formTemplate;
  }

  setFormInputs(form: FormInterface, objectToCode: ObjectToCode): string {
    let codeHtml = '';
    let array: Array<FormElementInterface> = [];
    if (form.elements) array = form.elements;
    if (form.actions) array = form.elements;
    
    array.forEach((element: FormElementInterface) => {
      const input = element.input;
      const select = element.select;
      const tabs = element.tabs;
      const array = element.array;
      const button = element.button;

      if (input) codeHtml += this.setInput(input);
      if (select) codeHtml += this.setSelect(select);
      if (tabs) codeHtml += this.setTab(tabs, objectToCode);
      if (array) codeHtml += this.setArray(array, objectToCode);
      if (button) codeHtml += this.setButton(button);
    });

    return codeHtml;
  }

  setArray(array: FormInterface, objectToCode: ObjectToCode): string {
    const arrayId = `${objectToCode.module}Form`;
    const arrayPropertyName = TextTransformation.setIdToPropertyName(arrayId);
    const arrayClassName = TextTransformation.setIdToClassName(arrayId);
    const add = `add${arrayClassName}`;
    const remove = `remove${arrayClassName}`;

    const codeArray = `<ng-container formArrayName="${arrayPropertyName}">
            <mat-card *ngFor="let _ of ${arrayPropertyName}.controls; index as i">
                <ng-container [formGroupName]="i">
                    <mat-card-header>
                        ${array.label} {{1 + i}}
                    </mat-card-header>
                    <mat-card-content>
                        ${this.setFormInputs(array, objectToCode)}
                    </mat-card-content>
                    <mat-card-actions>
                        <button mat-button type="button" color="warn" (click)="${remove}(i)">
                            Remover ${array.label.toLowerCase()}
                        </button>
                    </mat-card-actions>
                </ng-container>
            </mat-card>
        </ng-container>
        <mat-card>
            <mat-card-content>
                <button mat-button type="button" (click)=${add}()>
                    Adicionar ${array.label.toLowerCase()}
                </button>
            </mat-card-content>
        </mat-card>`;

    return codeArray;
  }

  setInput(input: InputInterface): string {
    const placeholder = input.placeholder
      ? `placeholder="${input.placeholder}"`
      : '';
    const required = input.isRequired ? 'required' : '';

    const codeInput = `<mat-form-field>
            <mat-label>${input.label}</mat-label>
            <input matInput type="${input.type}" formControlName="${input.name}" ${placeholder} ${required} autocomplete="new-password">
        </mat-form-field>`;

    return codeInput;
  }

  setSelect(select: SelectInterface): string {
    const multiple = select.isMultiple ? 'multiple' : '';
    const required = select.isRequired ? 'required' : '';

    const codeSelect = `<mat-form-field>
            <mat-label>${select.label}</mat-label>
            <mat-select formControlName="${select.name}" ${required} ${multiple}>
                <mat-option *ngFor="let ${select.name}Item of ${select.name}SelectObject" [value]="${select.name}Item.value">
                    {{${select.name}Item.value}}
                </mat-option>
            </mat-select>
        </mat-form-field>`;

    return codeSelect;
  }

  setSlide(slide: InputInterface): string {
    let codeSlide = `<mat-form-field>`;
    codeSlide += `<mat-label>${slide.label}</mat-label>`;
    codeSlide += `<mat-slide-toggle formControlName="${slide.name}">${slide.label}</mat-slide-toggle>`;
    codeSlide += `</mat-form-field>`;

    return codeSlide;
  }

  setButton(button: ButtonInterface): string {
    let color = '';
    const dialogAction = '';
    const label =
      button.type === FormButtonTypeEnum.Submit
        ? `{{isAddModule ? 'Criar' : 'Editar'}}`
        : button.label;
    let codeButton = '';

    if (button.type === FormButtonTypeEnum.Button) color = '';
    if (button.type === FormButtonTypeEnum.Submit)
      color = `color="primary" ${dialogAction}`;
    if (button.type === FormButtonTypeEnum.Delete)
      color = `color="warn" ${dialogAction}`;
    if (button.type === FormButtonTypeEnum.Reset) color = `color="accent"`;

    if (button.type === FormButtonTypeEnum.Submit)
      codeButton += `<mat-card-actions>`;
    codeButton += `<button mat-raised-button ${color}>${label}</button>`;
    if (button.type === FormButtonTypeEnum.Submit)
      codeButton += `</mat-card-actions>`;

    return codeButton;
  }

  setTab(tabs: Array<FormInterface>, objectToCode: ObjectToCode): string {
    const tabId = `${objectToCode.module}Form`;
    const builderName = TextTransformation.kebabfy(tabId);
    let codeTab = `<mat-tab-group>`;
    tabs.forEach((tab: FormInterface) => {
      codeTab += `<mat-tab label="${tab.label}" id="${builderName}">
                ${this.setFormInputs(tab, objectToCode)}
            </mat-tab>`;
    });
    codeTab += `</mat-tab-group>`;

    return codeTab;
  }
}
