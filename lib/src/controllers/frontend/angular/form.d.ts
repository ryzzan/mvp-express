import { Form, FormElementInterface } from "../../../../interfaces/frontend";
import { SharedFunctions } from './shared-functions';
export declare class FormAngular {
    shared: SharedFunctions;
    setFormHtml: (formArray: Array<Form>, isTable?: boolean | undefined) => string;
    setFormHtmlElement: (form: Form, array: Array<FormElementInterface>, formIdAsPropertyName: string, isArray?: boolean | undefined, isTab?: boolean | undefined) => string;
    setFormDirective: (formArray: Array<Form>, isTable?: boolean | undefined) => string;
    setFormDirectiveElement: (array: Array<FormElementInterface>, formIdAsPropertyName: string, isTable?: boolean | undefined, isArray?: boolean | undefined) => {
        codeForm: string;
        codeSelectObject: string;
        codeArrayAdd: string;
        codeArrayGet: string;
        codeArrayNew: string;
        codeArrayRemove: string;
    };
    setFormService: (formArray: any[]) => void;
    setFormInterface: (formArray: any[]) => string;
}
