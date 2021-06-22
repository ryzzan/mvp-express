"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedFunctions = void 0;
var SharedFunctions = /** @class */ (function () {
    function SharedFunctions() {
        this.idToPropertyName = function (id) {
            var propertyName = '';
            var array = id.split('-');
            propertyName += array[0];
            for (var i = 0; i < array.length; i++) {
                var element = array[i];
                if (i > 0)
                    propertyName += element.charAt(0).toUpperCase() + element.slice(1);
            }
            return propertyName;
        };
        this.idToClassName = function (id) {
            var className = '';
            var array = id.split('-');
            className += array[0].charAt(0).toUpperCase() + array[0].slice(1);
            for (var i = 0; i < array.length; i++) {
                var element = array[i];
                if (i > 0)
                    className += element.charAt(0).toUpperCase() + element.slice(1);
            }
            return className;
        };
    }
    return SharedFunctions;
}());
exports.SharedFunctions = SharedFunctions;
