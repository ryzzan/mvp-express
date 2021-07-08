import { FormInterface, FormElementInterface } from "../../../../interfaces/frontend";
import { SharedFunctions } from './shared-functions';
export declare class FormAngular {
    sharedFunction: SharedFunctions;
    setFormHtml: (form: FormInterface, isTable?: boolean | undefined) => string;
    setFormDirectiveElement: (array: Array<FormElementInterface>, formIdAsPropertyName: string, isTable?: boolean | undefined, isArray?: boolean | undefined) => void;
}
