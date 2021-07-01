import { FormInterface } from "../../../../interfaces/frontend";
import { SharedFunctions } from './shared-functions';
export declare class FormAngular {
    shared: SharedFunctions;
    setFormHtml: (form: FormInterface, isTable?: boolean | undefined) => string;
}
