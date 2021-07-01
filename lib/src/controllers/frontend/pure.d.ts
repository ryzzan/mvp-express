/**
 * TO-DO
 *  - Tree
 *  - Services
 */
import { ObjectToCode } from "../../../interfaces/frontend";
import { FormPure } from './pure/form';
export declare class CodeToPure {
    formPure: FormPure;
    setPureCode: (objectToCode: ObjectToCode) => {
        html: string;
        directive: string;
        interface: string;
    };
}
