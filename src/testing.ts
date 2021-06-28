import { ObjectToCode } from '../interfaces/frontend';
import { Main } from './index';
import { COMPANY_FORM } from '../collections-frontend-daxtv/company-form';

const main = new Main;

const object: ObjectToCode = COMPANY_FORM;

console.log(main.setObjectToCode(object));