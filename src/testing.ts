import { Main } from './index';
import { PROJECT_TABLE } from '../collections-frontend/mvp-express/project-table';
import { PROJECT_FORM } from '../collections-frontend/mvp-express/project-form';
import { PROJECT } from '../collections-frontend/mvp-express/project';
import { ObjectToCode } from '../interfaces/frontend';

const main = new Main({ exportInAExistentProject: true }), 
object: ObjectToCode = PROJECT_TABLE,
array = [PROJECT_FORM, PROJECT_TABLE, PROJECT];

array.forEach(object => {
    console.log(main.setObjectToCode(object));    
});

// console.log(main.setObjectToCode(object));
