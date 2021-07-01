"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontendCode = void 0;
var angular_1 = require("./frontend/angular");
var pure_1 = require("./frontend/pure");
var FrontendCode = /** @class */ (function () {
    function FrontendCode() {
        var _this = this;
        this.codeToAngular = new angular_1.CodeToAngular;
        this.codeToPure = new pure_1.CodeToPure;
        this.setFrontendCode = function (object) {
            var response;
            switch (object.frontendFramework) {
                case 'ANGULAR':
                    response = _this.codeToAngular.setAngularCode(object);
                    break;
                case 'PURE':
                    response = _this.codeToPure.setPureCode(object);
                    break;
                case 'REACT':
                    //TO-DO
                    break;
                case 'SVELTE':
                    //TO-DO
                    break;
                case 'VUE':
                    //TO-DO
                    break;
                default:
                    break;
            }
            return response;
        };
    }
    return FrontendCode;
}());
exports.FrontendCode = FrontendCode;
