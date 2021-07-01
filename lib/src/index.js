"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var frontend_1 = require("./controllers/frontend");
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.frontendCode = new frontend_1.FrontendCode;
        this.setObjectToCode = function (object) {
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
    }
    return Main;
}());
exports.Main = Main;
