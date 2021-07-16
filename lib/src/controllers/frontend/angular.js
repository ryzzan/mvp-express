"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeToAngular = void 0;
/**
 * TO-DO
 *  - Tree
 *  - Services
 */
var directive_1 = require("./angular/directive");
var filesystem_1 = require("./angular/fs/filesystem");
var form_1 = require("./angular/form");
var frontend_1 = require("../../../interfaces/frontend");
var shared_functions_1 = require("./angular/shared-functions");
var table_1 = require("./angular/table");
// import { TreeAngular } from './angular/tree';
var CodeToAngular = /** @class */ (function () {
    function CodeToAngular() {
        var _this = this;
        this.formAngular = new form_1.FormAngular;
        this.directive = new directive_1.Directive;
        this.tableAngular = new table_1.TableAngular;
        this.fs = new filesystem_1.FileSystem;
        // treeAngular = new TreeAngular;
        this.sharedFunction = new shared_functions_1.SharedFunctions;
        this.setAngularCode = function (objectToCode) { return __awaiter(_this, void 0, void 0, function () {
            var codeTemplate, codeDirective, codeInterface, form, table, importObject, formIdAsClassName, formPropertyName, importObject, tableIdAsClassName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        codeTemplate = '', codeDirective = '', codeInterface = '';
                        form = objectToCode.form, table = objectToCode.table;
                        if (!form) return [3 /*break*/, 3];
                        importObject = {}, formIdAsClassName = this.sharedFunction.setIdToClassName(form === null || form === void 0 ? void 0 : form.id), formPropertyName = this.sharedFunction.setIdToPropertyName(form === null || form === void 0 ? void 0 : form.id);
                        codeTemplate += "<mat-card><form id=\"" + form.id + "\" [formGroup]=\"" + formPropertyName + "Form\" (ngSubmit)=\"" + formPropertyName + "Submit()\">";
                        if (form.title)
                            codeTemplate += "<mat-card-header><mat-card-title>" + form.title + "</mat-card-title>";
                        if (form.subtitle)
                            codeTemplate += "<mat-card-subtitle>" + form.subtitle + "</mat-card-subtitle>";
                        if (form.title)
                            codeTemplate += "</mat-card-header>";
                        codeTemplate += this.formAngular.setFormHtml(form);
                        codeTemplate += "</form></mat-card>";
                        codeDirective += this.directive.setImport(objectToCode, importObject);
                        codeDirective += "@Component({selector: 'app-" + form.id + "', templateUrl: './" + form.id + ".component.html', styleUrls: ['./" + form.id + ".component.sass']})";
                        codeDirective += "export class " + formIdAsClassName + "Component {";
                        codeDirective += this.directive.setClassConstructor(objectToCode);
                        codeDirective += this.directive.setObject(objectToCode);
                        codeDirective += "}";
                        return [4 /*yield*/, this.fs.createProjectComponentPathAndFile(objectToCode.projectPath, form.id, codeDirective, frontend_1.ComponentCodeType.Controller)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.fs.createProjectComponentPathAndFile(objectToCode.projectPath, form.id, codeTemplate, frontend_1.ComponentCodeType.Template)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!table) return [3 /*break*/, 6];
                        importObject = {}, tableIdAsClassName = this.sharedFunction.setIdToClassName(table === null || table === void 0 ? void 0 : table.id);
                        codeTemplate += this.tableAngular.setTableHtml(table);
                        codeDirective += this.directive.setImport(objectToCode, importObject);
                        codeDirective += "@Component({selector: 'app-" + table.id + "', templateUrl: './" + table.id + ".component.html', styleUrls: ['./" + table.id + ".component.sass']})";
                        codeDirective += "export class " + tableIdAsClassName + "Component {";
                        codeDirective += this.directive.setClassConstructor(objectToCode);
                        codeDirective += this.directive.setTableObject(objectToCode);
                        codeDirective += this.directive.setObject(objectToCode);
                        codeDirective += "}";
                        console.info('Enviado código de template para tratar na arquitetura.');
                        return [4 /*yield*/, this.fs.createProjectComponentPathAndFile(objectToCode.projectPath, table.id, codeDirective, frontend_1.ComponentCodeType.Controller)];
                    case 4:
                        _a.sent();
                        console.info('Enviado código de directive para tratar na arquitetura.');
                        return [4 /*yield*/, this.fs.createProjectComponentPathAndFile(objectToCode.projectPath, table.id, codeTemplate, frontend_1.ComponentCodeType.Template)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        // if (objectToCode.tree) {
                        //     codeTemplate += this.treeAngular.setTreeHtml(objectToCode.tree);
                        //     codeDirective += this.treeAngular.setTreeDirective(objectToCode.tree);
                        //     codeInterface +=  this.treeAngular.setTreeInterface(objectToCode.tree);
                        // }
                        console.info({
                            template: codeTemplate.replace(/\n/gi, '').replace(/    /gi, ''),
                            directive: codeDirective.replace(/\, \]/gi, ']').replace(/\, \}/gi, '}').replace(/\, \,/gi, ''),
                            interface: codeInterface,
                        });
                        return [2 /*return*/];
                }
            });
        }); };
    }
    return CodeToAngular;
}());
exports.CodeToAngular = CodeToAngular;
