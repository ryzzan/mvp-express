import { ObjectToCode } from '../interfaces/frontend';
import { Main } from './index';
import { PROJECT_FORM } from '../collections-frontend/mvp-express/project-form';
import { PROJECT_TABLE } from '../collections-frontend/mvp-express/project-table';

const main = new Main({ exportInAExistentProject: true });

const object: ObjectToCode = PROJECT_FORM;

console.log(main.setObjectToCode(object));
