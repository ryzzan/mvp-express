import { FormElementInterface, FormInterface } from "../../../../../interfaces/frontend";

export class FormDirective {
    constructor() {}

    setImport = (form: FormInterface) => {
        const elements = form.elements;
        let codeImport = `import { Component } from '@angular/core';`,
        importObject = {
            forms: {
                validators: false,
                formArray: false,
            },
            router: {
                activatedRoute: false,
                router: false,
            },
        };

        elements.forEach(element => {
            if (element.array) {
                importObject.forms.formArray = true;
            }

            if (element.input) {
                if (element.input.validators) importObject.forms.validators; 
            }

            if (element.select) {
                if (element.select.validators) importObject.forms.validators; 
            }
        });

        /** Forms */
        codeImport += `import {FormBuilder`
        if (importObject.forms.formArray) codeImport += `,FormArray,FormGroup`;
        if (importObject.forms.validators) codeImport += `,Validators`;
        codeImport += `} from '@angular/forms';`; 

        /** Router */
        codeImport += `import {ActivatedRoute,Router} from '@angular/router';`

        return codeImport;
    }

    setDecoratorComponent = () => {}

    setClass = () => {}

    setClassConstructor = () => {}

    setFormProperty = () => {}

    setFormArray = () => {}

    setFormAction = () => {}

    setTableProperty = () => {}

    setSelectObject = () => {}
}