/**
 * TO-DO
 *  - Tree
 *  - Services
 */
import { ObjectToCode } from "../../../interfaces/frontend";
import { FormAngular } from './angular/form';
import { TableAngular } from './angular/table';
import { TreeAngular } from './angular/tree';
export declare class CodeToAngular {
    formAngular: FormAngular;
    tableAngular: TableAngular;
    treeAngular: TreeAngular;
    setAngularCode: (objectToCode: ObjectToCode) => {
        html: string;
        directive: string;
        interface: string;
    };
}
