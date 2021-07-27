import {
  BuildedCode,
  MainConfiguration,
  ObjectToCode,
} from '../interfaces/frontend';
import {
  BackendCode
} from './controllers/backend';
import {
  FrontendCode
} from './controllers/frontend';

export class Main {
  frontendCode;
  backendCode = new BackendCode;

  constructor(configs: MainConfiguration) {
    this.frontendCode = new FrontendCode(configs);
  }

  async setObjectToCode(object: ObjectToCode) {
    try {
      await this.frontendCode.setFrontendCode(object);
    } catch (error) {
      return error;
    }

    if (object.backendFramework) {
      try {
        await this.backendCode.codeToNest.setNestCode(object);
      } catch (error) {
        return error;
      }
    }

    if (!object.frontendFramework && !object.backendFramework) return 'No frontend nor backend chosen';

    return object.backendFramework ? `${object.projectPath} and its API are go!` : `${object.projectPath} is go!`;
  }
}