import { Tree, TreeElementInterface } from "../../../../interfaces/frontend";
import { SharedFunctions } from './shared-functions';
export declare class TreeAngular {
    shared: SharedFunctions;
    setTreeHtml: (treeArray: Array<Tree>, nested?: boolean | undefined) => string;
    setTreeHtmlElement: (elements: Array<TreeElementInterface>, treeIdAsPropertyName: string, treeIdAsClassName: string, nested?: boolean | undefined) => string;
    setTreeDirective: (treeArray: Array<Tree>) => string;
    setTreeService: (formArray: any) => void;
    setTreeInterface: (formArray: any) => void;
}
