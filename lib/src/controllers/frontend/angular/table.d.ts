import { Table } from "../../../../interfaces/frontend";
import { SharedFunctions } from './shared-functions';
export declare class TableAngular {
    shared: SharedFunctions;
    setTableHtml: (tableArray: Array<Table>) => string;
    setTableDirective: (tableArray: any) => string;
    setTableService: (tableArray: any) => void;
    setTableInterface: (tableArray: any) => void;
}
