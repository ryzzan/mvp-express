"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedFunctions = void 0;
var SharedFunctions = /** @class */ (function () {
    function SharedFunctions() {
        var _this = this;
        this.setIdToPropertyName = function (id) {
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
        this.setIdToClassName = function (id) {
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
        /**
         * @todo Set alternative attributes to substitute the original ones
         * @param objectOriginal
         * @param attributesToUseFromObjectOriginal
         * @param alternativeAttributesOnNewObject
         * @param isArray
         * @returns
         */
        this.objectTransform = function (objectOriginal, attributesToUseFromObjectOriginal, alternativeAttributesOnNewObject, isArray) {
            var newObject = isArray ? '' : '[';
            objectOriginal.forEach(function (objectBeingChecked) {
                newObject += "{";
                for (var i = 0; i < attributesToUseFromObjectOriginal.length; i++) {
                    var attributeBeingChecked = attributesToUseFromObjectOriginal[i];
                    if (Array.isArray(objectBeingChecked[attributeBeingChecked])) {
                        newObject += attributeBeingChecked + ": [";
                        newObject += _this.objectTransform(objectBeingChecked[attributeBeingChecked], attributesToUseFromObjectOriginal, alternativeAttributesOnNewObject, true);
                        newObject += "]";
                    }
                    if (objectBeingChecked[attributeBeingChecked] && !Array.isArray(objectBeingChecked[attributeBeingChecked])) {
                        newObject += attributeBeingChecked + ": '" + objectBeingChecked[attributeBeingChecked] + "',";
                    }
                }
                newObject += "},";
            });
            newObject += isArray ? '' : ']';
            return newObject.replace(/\,\]/gi, ']').replace(/\,\}/gi, '}').replace(/\,\,/gi, '');
        };
        /**
         *
         * @param objectOriginal
         * @returns
         */
        this.objectToString = function (objectOriginal) {
            var string = Array.isArray(objectOriginal) ? '[' : '';
            if (Array.isArray(objectOriginal)) {
                objectOriginal.forEach(function (object) {
                    string += "{";
                    for (var key in object) {
                        if (Object.prototype.hasOwnProperty.call(object, key)) {
                            var element = object[key];
                            string += key + ": " + element + ",";
                            if (Array.isArray(element)) {
                                string += Array.isArray(element) ? "[" : '';
                                string += _this.objectToString(element);
                                string += Array.isArray(element) ? "]" : '';
                            }
                        }
                    }
                    string += "}";
                });
            }
            if (!Array.isArray(objectOriginal)) {
                string += "{";
                for (var key in objectOriginal) {
                    if (Object.prototype.hasOwnProperty.call(objectOriginal, key)) {
                        var element = objectOriginal[key];
                        string += key + ": " + element + ",";
                        if (Array.isArray(element)) {
                            string += Array.isArray(element) ? "[" : '';
                            string += _this.objectToString(element);
                            string += Array.isArray(element) ? "]" : '';
                        }
                    }
                }
                string += "}";
            }
            string += Array.isArray(objectOriginal) ? ']' : '';
            return string;
        };
    }
    return SharedFunctions;
}());
exports.SharedFunctions = SharedFunctions;
