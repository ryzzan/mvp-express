import { FormInterface } from "../../../../interfaces/frontend";
import { SharedFunctions } from "../angular/shared-functions";
export declare class FormPure {
    sharedFunctions: SharedFunctions;
    constructor();
    setFormHtml: (formObject: FormInterface) => void;
    setFormDirective: (formObject: FormInterface) => void;
    setFormInterface: (formObject: FormInterface) => void;
    setFormService: (formObject: FormInterface) => void;
}
