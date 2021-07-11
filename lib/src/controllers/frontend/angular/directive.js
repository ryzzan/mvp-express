"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directive = void 0;
var shared_functions_1 = require("./shared-functions");
var Directive = /** @class */ (function () {
    function Directive() {
        var _this = this;
        this.sharedFunction = new shared_functions_1.SharedFunctions;
        /** LET THE CARNAGE BEGIN! */
        this.setObject = function (object) {
            var codeObject = '';
            for (var key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    if (key === 'form') {
                        var form = object[key];
                        if (form) {
                            var formBuilderName = _this.sharedFunction.setIdToPropertyName(form === null || form === void 0 ? void 0 : form.id), formClassName = _this.sharedFunction.setIdToClassName(form === null || form === void 0 ? void 0 : form.id), formPropertyName = _this.sharedFunction.setIdToPropertyName(form === null || form === void 0 ? void 0 : form.id), formMetaObject = { builderName: formBuilderName, className: formClassName, propertyName: formPropertyName };
                            codeObject += formPropertyName + "Id: string = this." + formPropertyName + "Route.snapshot.params['id']; isAddModule: boolean = !this." + formPropertyName + "Id;";
                            codeObject += formBuilderName + "Form = this." + formBuilderName + "Builder.group({";
                            codeObject += _this.setFormBuilder(form, formMetaObject);
                            codeObject += "});";
                            codeObject += _this.setForm(form, formMetaObject);
                        }
                    }
                    if (key === 'table') {
                        var table = object[key];
                        if (table) {
                            var formBuilderName = _this.sharedFunction.setIdToPropertyName(table.id), tableClassName = _this.sharedFunction.setIdToClassName(table.id), tablePropertyName = _this.sharedFunction.setIdToPropertyName(table.id), tableMetaObject = { builderName: formBuilderName, className: tableClassName, propertyName: tablePropertyName };
                            codeObject += _this.setTable(table, tableMetaObject);
                        }
                    }
                }
            }
            return codeObject;
        };
        /** IMPORT */
        this.setImport = function (object, importObject) {
            var codeImport = '';
            for (var key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    if (key === 'form') {
                        var form = object[key];
                        if (form) {
                            codeImport += "import {FormBuilder,";
                            _this.setImportForm(form).forEach(function (element) {
                                if (element === 'formArray')
                                    codeImport += "FormArray,FormGroup";
                                if (element === 'formValidators')
                                    codeImport += ",Validators";
                            });
                            codeImport += "} from '@angular/forms';";
                            codeImport += "import { ActivatedRoute, Router } from '@angular/router';";
                        }
                    }
                    if (key === 'table') {
                        var table = object[key];
                        for (var element in table) {
                            if (Object.prototype.hasOwnProperty.call(table, element)) {
                                if (element === 'actions') {
                                    var actions = table.actions;
                                    if (actions) {
                                        codeImport += "import {FormBuilder,";
                                        _this.setImportForm(actions).forEach(function (element) {
                                            if (element === 'formArray')
                                                codeImport += "FormArray,FormGroup";
                                            if (element === 'formValidators')
                                                codeImport += ",Validators";
                                        });
                                        codeImport += "} from '@angular/forms';";
                                        codeImport += "import { ActivatedRoute, Router } from '@angular/router';";
                                    }
                                }
                                if (element === 'elements') {
                                    var elements = table.elements;
                                    elements.forEach(function (tag) {
                                        if (tag.row) {
                                            if (tag.row.menu) {
                                                var menus = tag.row.menu;
                                                menus.forEach(function (menu) {
                                                    if (menu.dialog) {
                                                        var dialogTemplateAsClassName = _this.sharedFunction.setIdToClassName(menu.dialog.templateFolder);
                                                        importObject.dialog = true;
                                                        codeImport += "import {" + dialogTemplateAsClassName + "Component} from '../" + menu.dialog.templateFolder + "/" + menu.dialog.templateFolder + ".component';";
                                                    }
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    }
                }
            }
            codeImport += "import {Component} from '@angular/core';";
            for (var key in importObject) {
                /** Dialog import */
                if (key === 'dialog' && importObject[key])
                    codeImport += "import {MatDialog} from '@angular/material/dialog';";
            }
            return codeImport;
        };
        this.setImportForm = function (form, importArray) {
            if (importArray === void 0) { importArray = ['form']; }
            var array = importArray;
            for (var element in form) {
                if (Object.prototype.hasOwnProperty.call(form, element)) {
                    if (element === 'elements') {
                        var elements = form[element];
                        array = _this.setImportFormElements(elements, importArray);
                    }
                }
            }
            return array;
        };
        this.setImportFormElements = function (elements, importArray) {
            var arrayImport = importArray;
            elements.forEach(function (object) {
                for (var key in object) {
                    if (Object.prototype.hasOwnProperty.call(object, key)) {
                        if (key === 'tabs') {
                            var tabs = object[key];
                            if (tabs) {
                                tabs.forEach(function (tab) {
                                    _this.setImportForm(tab, arrayImport);
                                });
                            }
                        }
                        if (key === 'array') {
                            var array = object[key];
                            if (array) {
                                arrayImport.push('formArray');
                            }
                        }
                        if (key === 'input') {
                        }
                        if (key === 'select') {
                        }
                    }
                }
            });
            return arrayImport;
        };
        /** CONSTRUCTOR */
        this.setClassConstructor = function (object) {
            var codeConstructor = 'constructor(';
            var _loop_1 = function (property) {
                if (Object.prototype.hasOwnProperty.call(object, property)) {
                    if (property === 'form') {
                        var formObject = object[property], formIdAsPropertyName = formObject ? _this.sharedFunction.setIdToPropertyName(formObject.id) : '';
                        codeConstructor += "private " + formIdAsPropertyName + "Builder: FormBuilder,private " + formIdAsPropertyName + "Route: ActivatedRoute,";
                        for (var element in formObject) {
                            if (Object.prototype.hasOwnProperty.call(formObject, element)) {
                                if (element === 'elements') {
                                    var elements = formObject[element];
                                    elements.forEach(function (tag) {
                                        for (var k in tag) {
                                            if (Object.prototype.hasOwnProperty.call(tag, k)) {
                                                if (tag === 'array') {
                                                    // NOTHING HERE?
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    }
                    if (property === 'table') {
                        var table_1 = object[property];
                        if (table_1 === null || table_1 === void 0 ? void 0 : table_1.elements) {
                            var elements = table_1.elements;
                            elements.forEach(function (tag) {
                                if (tag.row) {
                                    if (tag.row.menu) {
                                        var menus = tag.row.menu;
                                        menus.forEach(function (menu) {
                                            if (menu.dialog) {
                                                var dialogTemplateAsClassName = _this.sharedFunction.setIdToClassName(menu.dialog.templateFolder), tableIdAsPropertyName = _this.sharedFunction.setIdToPropertyName(table_1.id);
                                                codeConstructor += "private " + tableIdAsPropertyName + "Dialog: MatDialog,";
                                            }
                                        });
                                    }
                                }
                            });
                        }
                        if (table_1 === null || table_1 === void 0 ? void 0 : table_1.actions) {
                            var form = table_1.actions, formIdAsPropertyName = _this.sharedFunction.setIdToPropertyName(form.id);
                            codeConstructor += "private " + formIdAsPropertyName + "Builder: FormBuilder,private " + formIdAsPropertyName + "Route: ActivatedRoute,";
                        }
                    }
                }
            };
            for (var property in object) {
                _loop_1(property);
            }
            codeConstructor += ") {}";
            return codeConstructor;
        };
        /** FORM */
        this.setForm = function (form, formMetaObject) {
            var codeElements = '';
            // for (const element in form) {
            //     if (Object.prototype.hasOwnProperty.call(form, element)) {
            //         if (element === 'elements') {
            //             const elements = form[element];
            //             codeElements += this.setFormElements(elements, formMetaObject);
            //         }
            //     }
            // }
            if (form.elements)
                codeElements += _this.setFormElements(form.elements, formMetaObject);
            return codeElements;
        };
        this.setFormElements = function (elements, formMetaObject) {
            var codeElement = '';
            elements.forEach(function (object) {
                var _a, _b;
                for (var key in object) {
                    if (Object.prototype.hasOwnProperty.call(object, key)) {
                        if (key === 'tabs') {
                            var tabs = object[key];
                            if (tabs) {
                                tabs.forEach(function (tab) {
                                    codeElement += _this.setForm(tab, formMetaObject);
                                });
                            }
                        }
                        if (key === 'array') {
                            var array = object[key];
                            if (array) {
                                var arrayClassName = _this.sharedFunction.setIdToClassName(array.id), arrayPropertyName = _this.sharedFunction.setIdToPropertyName(array.id);
                                var add = "add" + arrayClassName, remove = "remove" + arrayClassName, newArray = "new" + arrayClassName;
                                codeElement += _this.setForm(array, formMetaObject);
                                codeElement += add + "() {this." + arrayPropertyName + ".push(this." + newArray + "())}";
                                codeElement += "get " + arrayPropertyName + "(): FormArray {return this." + formMetaObject.propertyName + "Form.get('" + arrayPropertyName + "') as FormArray};";
                                codeElement += newArray + "(): FormGroup { return this." + formMetaObject.propertyName + "Builder.group({";
                                codeElement += _this.setFormBuilderElements(array.elements, formMetaObject);
                                codeElement += "})};";
                                codeElement += remove + "(i:number) {this." + arrayPropertyName + ".removeAt(i)}";
                            }
                        }
                        if (key === 'input') {
                        }
                        if (key === 'select') {
                        }
                        /** Select objects */
                        if ((_a = object.select) === null || _a === void 0 ? void 0 : _a.optionsObject) {
                            var selectObjectName = _this.sharedFunction.setIdToPropertyName((_b = object.select) === null || _b === void 0 ? void 0 : _b.name);
                            codeElement += selectObjectName + "SelectObject = " + JSON.stringify(object.select.optionsObject) + ";";
                        }
                    }
                }
            });
            return codeElement;
        };
        this.setFormBuilder = function (form, formMetaObject) {
            var codeElements = '';
            for (var element in form) {
                if (Object.prototype.hasOwnProperty.call(form, element)) {
                    if (element === 'elements') {
                        var elements = form[element];
                        codeElements += _this.setFormBuilderElements(elements, formMetaObject);
                    }
                }
            }
            return codeElements;
        };
        this.setFormBuilderElements = function (elements, formMetaObject) {
            var codeElement = '';
            elements.forEach(function (object) {
                var _a, _b, _c;
                for (var key in object) {
                    if (Object.prototype.hasOwnProperty.call(object, key)) {
                        if (key === 'tabs') {
                            var tabs = object[key];
                            if (tabs) {
                                tabs.forEach(function (tab) {
                                    codeElement += _this.setFormBuilder(tab, formMetaObject);
                                });
                            }
                        }
                        if (key === 'array') {
                            var array = object[key];
                            if (array) {
                                var arrayClassName = _this.sharedFunction.setIdToClassName(array.id), arrayPropertyName = _this.sharedFunction.setIdToPropertyName(array.id);
                                codeElement += arrayPropertyName + ": this." + formMetaObject.propertyName + "Builder.array([]),";
                            }
                        }
                        if (key === 'input') {
                            var element = object[key];
                            if ((element === null || element === void 0 ? void 0 : element.type) === 'email')
                                (_a = element.validators) === null || _a === void 0 ? void 0 : _a.push('email');
                            if (element === null || element === void 0 ? void 0 : element.isRequired)
                                (_b = element.validators) === null || _b === void 0 ? void 0 : _b.push('required');
                            codeElement += (element === null || element === void 0 ? void 0 : element.name) + ": [" + ((element === null || element === void 0 ? void 0 : element.value) ? element === null || element === void 0 ? void 0 : element.value : null) + ", [";
                            if (element === null || element === void 0 ? void 0 : element.validators) {
                                codeElement += _this.setFormValidators(element.validators);
                            }
                            codeElement += "]],";
                        }
                        if (key === 'select') {
                            var element = object[key];
                            if (element === null || element === void 0 ? void 0 : element.isRequired)
                                (_c = element.validators) === null || _c === void 0 ? void 0 : _c.push('required');
                            codeElement += (element === null || element === void 0 ? void 0 : element.name) + ": [null, [";
                            if (element === null || element === void 0 ? void 0 : element.validators) {
                                codeElement += _this.setFormValidators(element.validators);
                            }
                            codeElement += "]],";
                        }
                    }
                }
            });
            return codeElement;
        };
        this.setFormValidators = function (validators) {
            var codeValidator = '';
            validators.forEach(function (validator) {
                codeValidator += "Validators." + validator + ",";
            });
        };
        /** TABLE */
        this.setTable = function (table, tableMetaObject) {
            var codeElements = '';
            if (table.elements)
                codeElements += _this.setTableElements(table.elements, tableMetaObject);
            if (table.actions) {
                var form = table.actions;
                // codeElements += this.setForm(table.actions, tableMetaObject)
                var formBuilderName = _this.sharedFunction.setIdToPropertyName(form === null || form === void 0 ? void 0 : form.id), formClassName = _this.sharedFunction.setIdToClassName(form === null || form === void 0 ? void 0 : form.id), formPropertyName = _this.sharedFunction.setIdToPropertyName(form === null || form === void 0 ? void 0 : form.id), formMetaObject = { builderName: formBuilderName, className: formClassName, propertyName: formPropertyName };
                codeElements += formPropertyName + "Id: string = this." + formPropertyName + "Route.snapshot.params['id']; isAddModule: boolean = !this." + formPropertyName + "Id;";
                codeElements += formBuilderName + "Form = this." + formBuilderName + "Builder.group({";
                codeElements += _this.setFormBuilder(form, formMetaObject);
                codeElements += "});";
                codeElements += _this.setForm(form, formMetaObject);
            }
            return codeElements;
        };
        this.setTableElements = function (elements, tableMetaObject) {
            var codeElement = '';
            elements.forEach(function (object) {
                if (object.row) {
                    var menus = object.row.menu;
                    menus === null || menus === void 0 ? void 0 : menus.forEach(function (menu) {
                        if (menu.dialog) {
                            codeElement += _this.setDialog(menu.dialog, tableMetaObject.propertyName);
                        }
                    });
                }
            });
            return codeElement;
        };
        this.setTableObject = function (object) {
            var codeTableObject = '';
            for (var property in object) {
                if (Object.prototype.hasOwnProperty.call(object, property)) {
                    if (property === 'table') {
                        var tableObject = object[property];
                        for (var element in tableObject) {
                            if (Object.prototype.hasOwnProperty.call(tableObject, element)) {
                                var tableIdAsPropertyName = _this.sharedFunction.setIdToPropertyName(tableObject.id);
                                if (element === 'object') {
                                    var object_1 = tableObject[element];
                                    codeTableObject += tableIdAsPropertyName + "DataSource = " + JSON.stringify(object_1) + ";";
                                }
                                if (element === 'elements') {
                                    var rows = tableObject[element];
                                    codeTableObject += tableIdAsPropertyName + "DisplayedColumns: string[] = [";
                                    rows.forEach(function (row) {
                                        codeTableObject += "'" + row.row.field + "',";
                                    });
                                    codeTableObject += "];";
                                }
                            }
                        }
                    }
                }
            }
            return codeTableObject;
        };
        /** DIALOG */
        this.setDialog = function (dialog, componentCallingDialogId) {
            var codeDialog = '';
            var dialogTemplateAsClassName = _this.sharedFunction.setIdToClassName(dialog.templateFolder), dialogTemplateAsPropertyName = _this.sharedFunction.setIdToPropertyName(dialog.templateFolder), tableIdAsPropertyName = _this.sharedFunction.setIdToPropertyName(componentCallingDialogId);
            codeDialog += dialogTemplateAsPropertyName + "OpenDialog = () => {";
            codeDialog += "const " + dialogTemplateAsPropertyName + "DialogRef = this." + tableIdAsPropertyName + "Dialog.open(" + dialogTemplateAsClassName + "Component,{";
            if (dialog.dialogDataInterface) {
                codeDialog += ",data:";
                codeDialog += _this.sharedFunction.objectToString(dialog.dialogDataInterface);
            }
            codeDialog += "})";
            codeDialog += "};";
            return codeDialog;
        };
    }
    return Directive;
}());
exports.Directive = Directive;
