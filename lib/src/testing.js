"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var acl_form_1 = require("../collections-frontend/acl-form");
var main = new index_1.Main;
var object = acl_form_1.ACL_FORM;
console.log(main.setObjectToCode(object));
