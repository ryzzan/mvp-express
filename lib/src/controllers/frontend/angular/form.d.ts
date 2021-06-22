import { Form, FormElementInterface } from "../../../../interfaces/frontend";
import { SharedFunctions } from './shared-functions';
export declare class FormAngular {
    shared: SharedFunctions;
    setFormHtml: (formArray: any[]) => string;
    setFormHtmlElement: (form: Form, array: Array<FormElementInterface>, formIdAsPropertyName: string, isArray?: boolean | undefined, isTab?: boolean | undefined) => string;
    setFormDirective: (formArray: Array<Form>) => string;
    setFormDirectiveElement: (array: Array<FormElementInterface>, formIdAsPropertyName: string, isArray?: boolean | undefined) => {
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
