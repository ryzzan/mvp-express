/**
 * TO-DO
 *  - Form tab
 *  - Services
 */
import { ObjectToCode, FormElement } from "../../../interfaces/frontend";
export declare class CodeToAngular {
    setAngularCode: (objectToCode: ObjectToCode) => {
        html: string;
        directive: string;
        interface: string;
    };
    setFormHtml: (formArray: any[]) => string;
    setFormHtmlElement: (form: {
        elements: any;
        id: any;
    }, array: Array<FormElement>, formIdAsPropertyName: string, isArray?: boolean | undefined) => string;
    setTableHtml: (tableArray: any) => string;
    setFormDirective: (formArray: any[]) => string;
    setTableDirective: (tableArray: any) => string;
    setFormService: (formArray: any[]) => void;
    setTableService: (formArray: any) => void;
    setFormInterface: (formArray: any[]) => string;
    setTableInterface: (formArray: any) => void;
    idToPropertyName: (id: string) => string;
    idToClassName: (id: string) => string;
}
