import { Main } from './index';
import { PROJECT_FORM } from '../collections-frontend/mvp-express/project-form';
import { PROJECT_TABLE } from '../collections-frontend/mvp-express/project-table';
import { PROJECT } from '../collections-frontend/mvp-express/project';

const main = new Main;

const array = [PROJECT_FORM, PROJECT_TABLE, PROJECT];

// array.forEach(async object => {
//     await console.log(main.setObjectToCode(object));
// });

console.log(main.setObjectToCode(PROJECT));
