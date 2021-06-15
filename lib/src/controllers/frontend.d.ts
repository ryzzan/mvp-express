import { ObjectToCode } from '../../interfaces/frontend';
import { CodeToAngular } from './frontend/angular';
export declare class FrontendCode extends CodeToAngular {
    codeToAngular: CodeToAngular;
    setFrontendCode: (object: ObjectToCode) => {
        html: string;
        directive: string;
        interface: string;
    } | undefined;
}
