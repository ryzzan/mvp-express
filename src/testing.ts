import { ObjectToCode } from '../interfaces/frontend';
import { Main } from './index';
import { MODULE_FORM } from '../collections-frontend/mvp-express/module-form';

const main = new Main;

const object: ObjectToCode = MODULE_FORM;

console.log(main.setObjectToCode(object));