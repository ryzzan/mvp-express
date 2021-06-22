import { ObjectToCode } from '../interfaces/frontend';
import { Main } from './index';
import { COMPANY_LIST } from '../collections-frontend-daxtv/company-list';

const main = new Main;

const object: ObjectToCode = COMPANY_LIST;

console.log(main.setObjectToCode(object));