import { ComponentCodeType } from '../../../../../interfaces/frontend';
import { SharedFunctions } from '../shared-functions';
export declare class FileSystem {
    sharedFunction: SharedFunctions;
    createProjectComponentPathAndFile: (projectPath: string, componentPath: string, componentCode: string, componentCodeType: ComponentCodeType, isNest?: boolean | undefined) => Promise<void>;
    /** Create file and write in it */
    writeCodeToComponentFile: (projectPath: string, componentPath: string, componentCode: string, componentCodeType: ComponentCodeType) => Promise<void>;
}
