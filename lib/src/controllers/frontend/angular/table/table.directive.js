"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableDirective = void 0;
var shared_functions_1 = require("../shared-functions");
var TableDirective = /** @class */ (function () {
    function TableDirective() {
        var _this = this;
        this.sharedFunction = new shared_functions_1.SharedFunctions;
        this.setDialog = function (dialog) {
            var tableIdAsPropertyName = _this.sharedFunction.setIdToPropertyName(dialog.id), tableIdAsClassName = _this.sharedFunction.setIdToClassName(dialog.id);
            var codeAction = tableIdAsPropertyName + "OpenDialog = () => {";
            codeAction += "const " + tableIdAsPropertyName + "DialogRef = this." + tableIdAsPropertyName + "Dialog.open(" + dialog.templateFolder + "),{";
            if (dialog.dialogDataInterface) {
                codeAction += ",data:";
                codeAction += _this.sharedFunction.objectToString(dialog.dialogDataInterface);
            }
            codeAction += "})";
            codeAction += "};";
        };
    }
    return TableDirective;
}());
exports.TableDirective = TableDirective;
