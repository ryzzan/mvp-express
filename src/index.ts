import {
  BuildedCode,
  MainConfiguration,
  ObjectToCode,
} from '../interfaces/frontend';
import { FrontendCode } from './controllers/frontend';

export class Main {
  frontendCode;

  constructor(configs: MainConfiguration) {
    this.frontendCode = new FrontendCode(configs);
  }

  setObjectToCode(object: ObjectToCode): BuildedCode | undefined | string {
    if (object.frontendFramework) {
      try {
        return this.frontendCode.setFrontendCode(object);
      } catch (error) {
        return error;
      }
    }

    if (object.backendFramework) {
      // TO-DO
    }

    return 'No frontend nor backend chosen';
  }
}
