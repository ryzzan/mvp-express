/**
 * TO-DO
 *  - Tree
 *  - Services
 */
import { ObjectToCode } from "../../../interfaces/frontend";
import { FormAngular } from './angular/form';
export declare class CodeToAngular {
    formAngular: FormAngular;
    setAngularCode: (objectToCode: ObjectToCode) => {
        html: string;
        directive: string;
        interface: string;
    };
}
