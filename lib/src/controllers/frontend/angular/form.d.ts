import { FormInterface } from "../../../../interfaces/frontend";
import { SharedFunctions } from './shared-functions';
export declare class FormAngular {
    sharedFunction: SharedFunctions;
    setFormHtml: (form: FormInterface, isTable?: boolean | undefined) => string;
    setFormService: (formArray: any[]) => void;
    setFormInterface: (formArray: any) => void;
}
