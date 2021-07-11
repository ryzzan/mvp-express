import { ObjectToCode } from '../interfaces/frontend';
import { Main } from './index';
import { MODULE_TABLE } from '../collections-frontend/mvp-express/module-table';

const main = new Main;

const object: ObjectToCode = MODULE_TABLE;

console.log(main.setObjectToCode(object));