import { ObjectToCode } from '../interfaces/frontend';
import { Main } from './index';
import { PROJECT_FORM } from '../collections-frontend/mvp-express/project-form';

const main = new Main();

const object: ObjectToCode = PROJECT_FORM;

console.log(main.setObjectToCode(object));
