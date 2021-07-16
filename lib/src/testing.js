"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var project_form_1 = require("../collections-frontend/mvp-express/project-form");
var main = new index_1.Main;
var object = project_form_1.PROJECT_FORM;
console.log(main.setObjectToCode(object));
