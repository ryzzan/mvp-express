/**
 * TO-DO
 *  - Tree
 *  - Services
 */
import { Directive } from "./angular/directive";
import { FileSystem } from "./angular/fs/filesystem";
import { FormAngular } from './angular/form';
import { ObjectToCode } from "../../../interfaces/frontend";
import { SharedFunctions } from "./angular/shared-functions";
import { TableAngular } from './angular/table';
export declare class CodeToAngular {
    formAngular: FormAngular;
    directive: Directive;
    tableAngular: TableAngular;
    fs: FileSystem;
    sharedFunction: SharedFunctions;
    setAngularCode: (objectToCode: ObjectToCode) => Promise<void>;
}
