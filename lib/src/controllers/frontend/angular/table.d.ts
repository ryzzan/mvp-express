import { Table } from "../../../../interfaces/frontend";
import { SharedFunctions } from './shared-functions';
import { FormAngular } from './form';
export declare class TableAngular {
    shared: SharedFunctions;
    form: FormAngular;
    setTableHtml: (tableArray: Array<Table>) => string;
    setTableDirective: (tableArray: any) => string;
    setTableService: (tableArray: any) => void;
    setTableInterface: (tableArray: any) => void;
}
