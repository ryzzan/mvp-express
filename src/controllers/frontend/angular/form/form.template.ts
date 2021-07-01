import {
    ButtonInterface,
    FormButtonTypeEnum,
    FormInterface,
    InputInterface,
    OptgroupInterface,
    OptionInterface,
    SelectInterface,
} from "../../../../../interfaces/frontend";
import {
    SharedFunctions
} from "../../angular/shared-functions"
import {
    FormAngular
} from "../form";
import { FormDirective } from "./form.directive";

export class FormTemplate {
    formTemplate = new FormAngular;

    // setArray = (array: FormInterface) => {
    //     const add = `add${this.sharedFunctions.stringToUpperCamelCase(array.id)}`,
    //         remove = `remove${this.sharedFunctions.stringToUpperCamelCase(array.id)}`;

    //     let codeArray = `<ng-container formArrayName="${array.id}"><mat-card *ngFor="let _ of ${array.id}.controls; index as i"><ng-container [formGroupName]="i">`;
    //     codeArray += `<mat-card-header>${array.label} {{1 + i}}</mat-card-header><mat-card-content>`;
    //     codeArray += this.formTemplate.setFormHtml(array);
    //     codeArray += `</mat-card-content><mat-card-actions>`;
    //     codeArray += `<button mat-button type="button" color="warn" (click)="${remove}(i)">Remover ${array.label.toLowerCase()}</button>`;
    //     codeArray += `</mat-card-actions></ng-container></mat-card></ng-container>`;
    //     codeArray += `<mat-card><mat-card-content>`;
    //     codeArray += `<button mat-button type="button" (click)=${add}()>Adicionar ${array.label.toLowerCase()}</button></mat-card-content></mat-card>`;
    // }

    setInput = (input: InputInterface) => {
        const placeholder = input.placeholder ? `placeholder=${input.placeholder}` : '',
            required = input.isRequired ? 'required' : '';

        let codeInput = `<mat-form-field>`;
        codeInput += `<mat-label>${input.label}</mat-label>`;
        codeInput += `<input matInput type="${input.type}" formControlName="${input.name}" ${placeholder} ${required} autocomplete="new-password">`;
        codeInput += `</mat-form-field>`;
        return codeInput;
    }

    setSelect = (select: SelectInterface) => {
        const multiple = select.isMultiple ? 'multiple' : '',
            required = select.isRequired ? 'required' : '';

        let codeSelect = `<mat-form-field>`;
        codeSelect += `<mat-label>${select.label}</mat-label>`;
        codeSelect += `<mat-select formControlName="${select.name}" ${required} ${multiple}><mat-option *ngFor="let ${select.name}Item of ${select.name}SelectObject" [value]="${select.name}Item.value">{{${select.name}Item.valueView}}</mat-option></mat-select>`;
        codeSelect += `</mat-form-field>`;

        return codeSelect;
    }

    setOptgroup = (optgroup: OptgroupInterface) => {

    }

    setOptions = (options: OptionInterface) => {

    }

    setSlide = (slide: InputInterface) => {
        let codeSlide = `<mat-form-field>`;
        codeSlide += `<mat-label>${slide.label}</mat-label>`;
        codeSlide += `<mat-slide-toggle formControlName="${slide.name}">${slide.label}</mat-slide-toggle>`;
        codeSlide += `</mat-form-field>`;

        return codeSlide;
    }

    setButton = (button: ButtonInterface) => {
        let color = '',
            dialogAction = '';
        // dialogAction = (form.dialog?.template) ? `mat-dialog-close` : '';

        if (button.type === FormButtonTypeEnum.Submit) color = `color="primary" ${dialogAction}`;
        if (button.type === FormButtonTypeEnum.Delete) color = `color="warn" ${dialogAction}`;
        if (button.type === FormButtonTypeEnum.Reset) color = `color="accent"`;

        let codeButton = `<button mat-raised-button ${color}>${button.label}</button>`;
    }

    setTab = (tabs: Array<FormInterface>) => {
        let codeTab = `<mat-tab-group>`;
        tabs.forEach((tab: FormInterface) => {
            codeTab += `<mat-tab label="${tab.label}" id="${tab.id}">`;
            codeTab += this.formTemplate.setFormHtml(tab);
            codeTab += `</mat-tab>`;
        });
        codeTab += `</mat-tab-group>`;
    }
}