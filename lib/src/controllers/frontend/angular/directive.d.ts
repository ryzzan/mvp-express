import { DialogInterface, DirectiveElements, FormElementInterface, FormInterface, ObjectToCode, TableElementInterface, TableInterface } from "../../../../interfaces/frontend";
import { SharedFunctions } from "./shared-functions";
export declare class Directive {
    constructor();
    sharedFunction: SharedFunctions;
    /** IMPORT */
    setImport: (object: ObjectToCode, importObject: DirectiveElements) => string;
    setImportForm: (form: FormInterface, importArray?: Array<string>) => string[];
    setImportFormElements: (elements: Array<FormElementInterface>, importArray: Array<string>) => string[];
    /** CONSTRUCTOR */
    setClassConstructor: (object: ObjectToCode) => string;
    setTableObject: (object: ObjectToCode) => string;
    setObject: (object: ObjectToCode) => string;
    /** FORM */
    setForm: (form: FormInterface, formMetaObject: {
        builderName: string;
        className: string;
        propertyName: string;
    }) => string;
    setFormElements: (elements: Array<FormElementInterface>, formMetaObject: {
        builderName: string;
        className: string;
        propertyName: string;
    }) => string;
    setFormBuilder: (form: FormInterface, formMetaObject: {
        builderName: string;
        className: string;
        propertyName: string;
    }) => string;
    setFormBuilderElements: (elements: Array<FormElementInterface>, formMetaObject: {
        builderName: string;
        className: string;
        propertyName: string;
    }) => string;
    setFormValidators: (validators: Array<string>) => void;
    /** TABLE */
    setTable: (table: TableInterface, tableMetaObject: {
        className: string;
        propertyName: string;
    }) => string;
    setTableElements: (elements: Array<TableElementInterface>, tableMetaObject: {
        className: string;
        propertyName: string;
    }) => string;
    /** DIALOG */
    setDialog: (dialog: DialogInterface, componentCallingDialogId: string) => string;
}
