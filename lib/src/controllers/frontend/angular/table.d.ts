import { TableInterface } from "../../../../interfaces/frontend";
import { SharedFunctions } from './shared-functions';
import { FormAngular } from './form';
export declare class TableAngular {
    sharedFunctions: SharedFunctions;
    form: FormAngular;
    setTableHtml: (table: TableInterface) => string;
    setTableDirective: (table: TableInterface) => void;
}
