import {
  BuildedCode,
  MainConfiguration,
  ObjectToCode,
} from '../../interfaces/frontend';

import { CodeToAngular } from './frontend/angular';
import { CodeToPure } from './frontend/pure';

export class FrontendCode {
  codeToAngular;
  codeToPure;

  constructor(configs: MainConfiguration) {
    this.codeToAngular = new CodeToAngular(configs);
    this.codeToPure = new CodeToPure();
  }

  setFrontendCode(object: ObjectToCode): BuildedCode | undefined {
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
  }
}
