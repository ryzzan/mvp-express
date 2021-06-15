import { ObjectToCode } from '../interfaces/frontend';
import {Main} from './index';
import { PERSON_FORM } from '../collections-frontend/person-form';

const main = new Main;

const object: ObjectToCode = PERSON_FORM;

console.log(main.setObjectToCode(object));