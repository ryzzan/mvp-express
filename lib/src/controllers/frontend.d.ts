import { ObjectToCode } from '../../interfaces/frontend';
import { CodeToAngular } from './frontend/angular';
import { CodeToPure } from './frontend/pure';
export declare class FrontendCode {
    codeToAngular: CodeToAngular;
    codeToPure: CodeToPure;
    setFrontendCode: (object: ObjectToCode) => {
        template: string;
        directive: string;
        interface: string;
    } | {
        html: string;
        directive: string;
        interface: string;
    } | undefined;
}
