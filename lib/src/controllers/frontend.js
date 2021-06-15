"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontendCode = void 0;
var angular_1 = require("./frontend/angular");
var FrontendCode = /** @class */ (function (_super) {
    __extends(FrontendCode, _super);
    function FrontendCode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codeToAngular = new angular_1.CodeToAngular;
        _this.setFrontendCode = function (object) {
            var response;
            switch (object.frontendFramework) {
                case 'ANGULAR':
                    response = _this.codeToAngular.setAngularCode(object);
                    break;
                case 'PURE':
                    //TO-DO
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
        return _this;
    }
    return FrontendCode;
}(angular_1.CodeToAngular));
exports.FrontendCode = FrontendCode;
