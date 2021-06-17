import { ObjectToCode } from '../interfaces/frontend';
import {Main} from './index';
import { LOCATION_FORM } from '../collections-frontend-lopes/location-form';

const main = new Main;

const object: ObjectToCode = LOCATION_FORM;

console.log(main.setObjectToCode(object));