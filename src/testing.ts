import { Main } from './index';
import { PERSON_TABLE } from '../collections-frontend/autentikigo/person-table';
import { PERSON_FORM } from '../collections-frontend/autentikigo/person-form';
import { ObjectToCode } from '../interfaces/frontend';

const main = new Main({ exportInAExistentProject: true }), 
array = [PERSON_FORM, PERSON_TABLE];

array.forEach(object => {
    console.log(main.setObjectToCode(object));    
});

// console.log(main.setObjectToCode(object));
