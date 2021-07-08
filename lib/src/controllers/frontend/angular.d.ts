/**
 * TO-DO
 *  - Tree
 *  - Services
 */
import { Directive } from "./angular/directive";
import { FormAngular } from './angular/form';
import { ObjectToCode } from "../../../interfaces/frontend";
import { SharedFunctions } from "./angular/shared-functions";
import { TableAngular } from './angular/table';
export declare class CodeToAngular {
    formAngular: FormAngular;
    directive: Directive;
    tableAngular: TableAngular;
    sharedFunction: SharedFunctions;
    setAngularCode: (objectToCode: ObjectToCode) => {
        template: string;
        directive: string;
        interface: string;
    };
}
