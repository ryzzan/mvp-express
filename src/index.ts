import { ObjectToCode } from '../interfaces/frontend';
import { FrontendCode } from './controllers/frontend';

export class Main {
  frontendCode = new FrontendCode();
  setObjectToCode = (object: ObjectToCode) => {
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
  };
}
