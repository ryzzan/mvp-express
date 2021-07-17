import { BuildedCode, ObjectToCode } from '../interfaces/frontend';
import { FrontendCode } from './controllers/frontend';

export class Main {
  frontendCode = new FrontendCode();

  async setObjectToCode(
    object: ObjectToCode,
  ): Promise<BuildedCode | undefined | string> {
    if (object.frontendFramework) {
      try {
        return await this.frontendCode.setFrontendCode(object);
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
