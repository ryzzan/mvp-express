import { ObjectToCode } from '../../interfaces/frontend';

import { CodeToAngular } from './frontend/angular';

export class FrontendCode extends CodeToAngular {
    codeToAngular = new CodeToAngular;

    public setFrontendCode = (object: ObjectToCode) => {
        let response;
    
        switch (object.frontendFramework) {
            case 'ANGULAR':
                response = this.codeToAngular.setAngularCode(object);
                break;
    
            case 'PURE':
                //TO-DO
                break;

            case 'REACT':
                //TO-DO
                break;

            case 'SVELTE':
                //TO-DO
                break;
            
            case 'VUE':
                //TO-DO
                break;
        
            default:
                break;
        }
        
        return response;
    }
}