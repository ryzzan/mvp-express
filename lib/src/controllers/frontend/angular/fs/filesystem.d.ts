import { ComponentCodeType } from '../../../../../interfaces/frontend';
export declare class FileSystem {
    createProjectComponentPathAndFile: (projectPath: string, componentPath: string, componentCode: string, componentCodeType: ComponentCodeType) => Promise<void>;
    /** Create file and write in it */
    writeCodeToComponentFile: (projectPath: string, componentPath: string, componentCode: string, componentCodeType: ComponentCodeType) => Promise<void>;
}
