import { ObjectToCode } from '../../interfaces/frontend';

import { CodeToAngular } from './frontend/angular';
import { CodeToPure } from './frontend/pure';

export class FrontendCode {
  codeToAngular = new CodeToAngular();
  codeToPure = new CodeToPure();

  public setFrontendCode = (object: ObjectToCode) => {
    let response;

    switch (object.frontendFramework) {
      case 'ANGULAR':
        response = this.codeToAngular.setAngularCode(object);
        break;

      case 'PURE':
        response = this.codeToPure.setPureCode(object);
        break;

      case 'REACT':
        // TO-DO
        break;

      case 'SVELTE':
        // TO-DO
        break;

      case 'VUE':
        // TO-DO
        break;

      default:
        break;
    }

    return response;
  };
}
