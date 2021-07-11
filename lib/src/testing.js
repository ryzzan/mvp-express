"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var module_table_1 = require("../collections-frontend/mvp-express/module-table");
var main = new index_1.Main;
var object = module_table_1.MODULE_TABLE;
console.log(main.setObjectToCode(object));
