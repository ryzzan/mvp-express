import { ObjectToCode } from '../interfaces/frontend';
import { Main } from './index';
import { ACL_FORM } from '../collections-frontend/acl-form';

const main = new Main;

const object: ObjectToCode = ACL_FORM;

console.log(main.setObjectToCode(object));