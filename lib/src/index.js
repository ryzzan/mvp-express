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
exports.Main = void 0;
var frontend_1 = require("./controllers/frontend");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frontendCode = new frontend_1.FrontendCode;
        _this.setObjectToCode = function (object) {
            if (object.frontendFramework) {
                try {
                    return _this.frontendCode.setFrontendCode(object);
                }
                catch (error) {
                    return error;
                }
            }
            if (object.backendFramework) {
                // TO-DO
            }
            return "No frontend nor backend chosen";
        };
        return _this;
    }
    return Main;
}(frontend_1.FrontendCode));
exports.Main = Main;
