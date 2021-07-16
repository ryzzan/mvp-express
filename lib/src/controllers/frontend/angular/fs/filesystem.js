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
exports.FileSystem = void 0;
var fs = require("fs");
var chp = require("child_process");
var frontend_1 = require("../../../../../interfaces/frontend");
var FileSystem = /** @class */ (function () {
    function FileSystem() {
        var _this = this;
        this.createProjectComponentPathAndFile = function (projectPath, componentPath, componentCode, componentCodeType) { return __awaiter(_this, void 0, void 0, function () {
            var projectFolder, splitProjectFolder, projectFolderParent, projectAndComponentPath, nodeModulePath, projectAndComponent, error_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        projectFolder = projectPath.split(/[\/]+/).pop(), splitProjectFolder = projectPath.split(/[\/]+/), projectFolderParent = splitProjectFolder.slice(0, splitProjectFolder.length - 1).join('/'), projectAndComponentPath = projectPath + "/src/app/components/" + componentPath, nodeModulePath = projectPath + "/node_modules";
                        try {
                            fs.readdirSync(projectPath);
                            console.info("Projeto existente.");
                        }
                        catch (error) {
                            console.info("Pasta de projeto inexistente.");
                            chp.execSync("git clone https://www.github.com/ryzzan/rapida-komenco " + projectFolder, { cwd: projectFolderParent });
                        }
                        try {
                            fs.readdirSync(nodeModulePath);
                            console.info("Pasta node_module existente.");
                        }
                        catch (error) {
                            console.info("Pasta node_module inexistente.");
                            chp.execSync("npm install", { cwd: projectPath });
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 9]);
                        console.info("Pasta de componente existente.");
                        projectAndComponent = fs.readdirSync(projectAndComponentPath);
                        return [4 /*yield*/, this.writeCodeToComponentFile(projectPath, componentPath, componentCode, componentCodeType)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 3:
                        error_1 = _a.sent();
                        console.info("Pasta de componente inexistente.");
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 8]);
                        fs.mkdirSync(projectAndComponentPath);
                        return [4 /*yield*/, this.writeCodeToComponentFile(projectPath, componentPath, componentCode, componentCodeType)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        error_2 = _a.sent();
                        return [4 /*yield*/, this.writeCodeToComponentFile(projectPath, componentPath, componentCode, componentCodeType)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        }); };
        /** Create file and write in it */
        this.writeCodeToComponentFile = function (projectPath, componentPath, componentCode, componentCodeType) { return __awaiter(_this, void 0, void 0, function () {
            var componentFilePath, file;
            return __generator(this, function (_a) {
                componentFilePath = '';
                if (componentCodeType === frontend_1.ComponentCodeType.Controller)
                    componentFilePath = projectPath + "/src/app/components/" + componentPath + "/" + componentPath + ".component.ts";
                if (componentCodeType === frontend_1.ComponentCodeType.Template)
                    componentFilePath = projectPath + "/src/app/components/" + componentPath + "/" + componentPath + ".component.html";
                try {
                    file = fs.readFileSync(componentFilePath);
                    console.info("Arquivo " + componentPath + " existente.");
                    fs.writeFileSync(componentFilePath, componentCode);
                    console.info("Aquivo escrito com sucesso em " + componentFilePath + ".");
                }
                catch (error) {
                    console.info("Arquivo " + componentPath + " inexistente.");
                    try {
                        chp.execSync("ng g c components/" + componentPath + " --module modules/main", { cwd: projectPath });
                    }
                    catch (error) {
                        console.warn(error);
                    }
                    fs.writeFileSync(componentFilePath, componentCode);
                    console.info("Aquivo criado e escrito com sucesso em " + componentFilePath);
                }
                return [2 /*return*/];
            });
        }); };
    }
    return FileSystem;
}());
exports.FileSystem = FileSystem;
