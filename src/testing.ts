import { ObjectToCode } from '../interfaces/frontend';
import { Main } from './index';
import { EXAMPLE_FORM } from '../collections-frontend/example-form';

const main = new Main;

const object: ObjectToCode = EXAMPLE_FORM;

console.log(main.setObjectToCode(object));