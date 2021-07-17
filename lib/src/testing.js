"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var project_form_1 = require("../collections-frontend/mvp-express/project-form");
var project_table_1 = require("../collections-frontend/mvp-express/project-table");
var project_1 = require("../collections-frontend/mvp-express/project");
var main = new index_1.Main;
var array = [project_form_1.PROJECT_FORM, project_table_1.PROJECT_TABLE, project_1.PROJECT];
// array.forEach(async object => {
//     await console.log(main.setObjectToCode(object));
// });
console.log(main.setObjectToCode(project_1.PROJECT));
