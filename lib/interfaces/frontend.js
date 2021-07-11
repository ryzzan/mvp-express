"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionVerbEnum = exports.RequestTypeEnum = exports.FrontendFrameworkEnum = exports.BackendFrameworkEnum = exports.FilterLogicalOperatorEnum = exports.FilterComparisonOperatorEnum = exports.FilterTypeEnum = exports.EventEnum = exports.FormTargetEnum = exports.FormMethodEnum = exports.FormEncTypeEnum = exports.FormButtonTypeEnum = exports.FormInputTypeEnum = exports.FormAttributeEnum = void 0;
;
;
;
/**
 * Enum: Form
 */
var FormAttributeEnum;
(function (FormAttributeEnum) {
    FormAttributeEnum["AcceptCharset"] = "accept-charset";
    FormAttributeEnum["Action"] = "action";
    FormAttributeEnum["Autocomplete"] = "autocomplete";
    FormAttributeEnum["Enctype"] = "enctype";
    FormAttributeEnum["Method"] = "method";
    FormAttributeEnum["Name"] = "name";
    FormAttributeEnum["Novalidate"] = "novalidate";
    FormAttributeEnum["Rel"] = "rel";
    FormAttributeEnum["Target"] = "target";
})(FormAttributeEnum = exports.FormAttributeEnum || (exports.FormAttributeEnum = {}));
var FormInputTypeEnum;
(function (FormInputTypeEnum) {
    FormInputTypeEnum["Button"] = "button";
    FormInputTypeEnum["Checkbox"] = "checkbox";
    FormInputTypeEnum["Color"] = "color";
    FormInputTypeEnum["Date"] = "date";
    FormInputTypeEnum["DatetimeLocal"] = "datetime-local";
    FormInputTypeEnum["Email"] = "email";
    FormInputTypeEnum["File"] = "file";
    FormInputTypeEnum["Hidden"] = "hidden";
    FormInputTypeEnum["Image"] = "image";
    FormInputTypeEnum["Month"] = "month";
    FormInputTypeEnum["Number"] = "number";
    FormInputTypeEnum["Password"] = "password";
    FormInputTypeEnum["Radio"] = "radio";
    FormInputTypeEnum["Range"] = "range";
    FormInputTypeEnum["Reset"] = "reset";
    FormInputTypeEnum["Search"] = "search";
    FormInputTypeEnum["Submit"] = "submit";
    FormInputTypeEnum["Tel"] = "tel";
    FormInputTypeEnum["Text"] = "text";
    FormInputTypeEnum["Time"] = "time";
    FormInputTypeEnum["Url"] = "url";
    FormInputTypeEnum["Week"] = "week";
})(FormInputTypeEnum = exports.FormInputTypeEnum || (exports.FormInputTypeEnum = {}));
var FormButtonTypeEnum;
(function (FormButtonTypeEnum) {
    FormButtonTypeEnum["Button"] = "button";
    FormButtonTypeEnum["Reset"] = "reset";
    FormButtonTypeEnum["Submit"] = "submit";
    FormButtonTypeEnum["Delete"] = "delete";
})(FormButtonTypeEnum = exports.FormButtonTypeEnum || (exports.FormButtonTypeEnum = {}));
var FormEncTypeEnum;
(function (FormEncTypeEnum) {
    FormEncTypeEnum["Application"] = "application/x-www-form-urlencoded";
    FormEncTypeEnum["Mutipart"] = "multipart/form-data";
    FormEncTypeEnum["Text"] = "text/plain";
})(FormEncTypeEnum = exports.FormEncTypeEnum || (exports.FormEncTypeEnum = {}));
var FormMethodEnum;
(function (FormMethodEnum) {
    FormMethodEnum["Get"] = "get";
    FormMethodEnum["Post"] = "post";
})(FormMethodEnum = exports.FormMethodEnum || (exports.FormMethodEnum = {}));
var FormTargetEnum;
(function (FormTargetEnum) {
    FormTargetEnum["Blank"] = "_blank";
    FormTargetEnum["Self"] = "_self";
    FormTargetEnum["Parent"] = "_parent";
    FormTargetEnum["Top"] = "_top";
})(FormTargetEnum = exports.FormTargetEnum || (exports.FormTargetEnum = {}));
/**
 * Enum: Event
 */
var EventEnum;
(function (EventEnum) {
    /**
     * Window events
     */
    EventEnum["OnAfterPrint"] = "onafterprint";
    EventEnum["OnBeforePrint"] = "onbeforeprint";
    EventEnum["OnBeforeUnload"] = "onbeforeunload";
    EventEnum["OnError"] = "onerror";
    EventEnum["OnHashChange"] = "onhashchange";
    EventEnum["OnLoad"] = "onload";
    EventEnum["OnMessage"] = "onmessage";
    EventEnum["OnOffline"] = "onoffline";
    EventEnum["OnOnline"] = "ononline";
    EventEnum["OnPageHide"] = "onpagehide";
    EventEnum["OnPageShow"] = "onpageshow";
    EventEnum["OnPopState"] = "onpopstate";
    EventEnum["OnResize"] = "onresize";
    EventEnum["OnStorage"] = "onstorage";
    EventEnum["OnUnload"] = "onunload";
    /**
     * Form events
     */
    EventEnum["OnBlur"] = "onblur";
    EventEnum["OnChange"] = "onchange";
    EventEnum["OnContextMenu"] = "oncontextmenu";
    EventEnum["OnFocus"] = "onfocus";
    EventEnum["OnInput"] = "oninput";
    EventEnum["OnInvalid"] = "oninvalid";
    EventEnum["onReset"] = "onreset";
    EventEnum["OnSearch"] = "onsearch";
    EventEnum["OnSelect"] = "onselect";
    EventEnum["OnSubmit"] = "onsubmit";
    /**
     * Keyboard events
     */
    EventEnum["OnKeyDown"] = "onkeydown";
    EventEnum["OnKeyPress"] = "onkeypress";
    EventEnum["OnKeyUp"] = "onkeyup";
    /**
     * Mouse events
     */
    EventEnum["OnClick"] = "onclick";
    EventEnum["OnDoubleClick"] = "ondblclick";
    EventEnum["OnMouseDown"] = "onmousedown";
    EventEnum["OnMouseMove"] = "onmousemove";
    EventEnum["OnMouseOut"] = "onmouseout";
    EventEnum["OnMouseOver"] = "onmouseover";
    EventEnum["OnMouseUp"] = "onmouseup";
    EventEnum["OnWheel"] = "onwheel";
    /**
     * Drag events
     */
    EventEnum["OnDrag"] = "ondrag";
    EventEnum["OnDragEnd"] = "ondragend";
    EventEnum["OnDragEnter"] = "ondragenter";
    EventEnum["OnDragLeave"] = "ondragleave";
    EventEnum["OnDragOver"] = "ondragover";
    EventEnum["OnDragStart"] = "ondragstart";
    EventEnum["OnDrop"] = "ondrop";
    EventEnum["OnScroll"] = "onscroll";
    /**
     * Clipoard events
     */
    EventEnum["OnCopy"] = "oncopy";
    EventEnum["OnCut"] = "oncut";
    EventEnum["OnPaste"] = "onpaste";
    /**
     * Media events
     */
    // TODO
    /**
     * Micellaneous events
     */
    EventEnum["OnToggle"] = "ontoggle";
})(EventEnum = exports.EventEnum || (exports.EventEnum = {}));
/**
 * Enum: Filter
 */
var FilterTypeEnum;
(function (FilterTypeEnum) {
    FilterTypeEnum["Api"] = "API";
    FilterTypeEnum["Object"] = "OBJECT";
})(FilterTypeEnum = exports.FilterTypeEnum || (exports.FilterTypeEnum = {}));
var FilterComparisonOperatorEnum;
(function (FilterComparisonOperatorEnum) {
    FilterComparisonOperatorEnum["Equal"] = "eq";
    FilterComparisonOperatorEnum["Greater"] = "gt";
    FilterComparisonOperatorEnum["GreaterOrEqual"] = "gte";
    FilterComparisonOperatorEnum["InArray"] = "in";
    FilterComparisonOperatorEnum["Less"] = "lt";
    FilterComparisonOperatorEnum["LessOrEqual"] = "lte";
    FilterComparisonOperatorEnum["NotEqual"] = "ne";
    FilterComparisonOperatorEnum["NotInArray"] = "nin";
})(FilterComparisonOperatorEnum = exports.FilterComparisonOperatorEnum || (exports.FilterComparisonOperatorEnum = {}));
var FilterLogicalOperatorEnum;
(function (FilterLogicalOperatorEnum) {
    FilterLogicalOperatorEnum["And"] = "and";
    FilterLogicalOperatorEnum["Not"] = "not";
    FilterLogicalOperatorEnum["Nor"] = "nor";
    FilterLogicalOperatorEnum["Or"] = "or";
})(FilterLogicalOperatorEnum = exports.FilterLogicalOperatorEnum || (exports.FilterLogicalOperatorEnum = {}));
/**
 * Enum: Frameworks
 */
var BackendFrameworkEnum;
(function (BackendFrameworkEnum) {
    BackendFrameworkEnum["Loopback"] = "LOOPBACK";
    BackendFrameworkEnum["Nest"] = "NEST";
    BackendFrameworkEnum["Fastify"] = "FASTIFY";
    BackendFrameworkEnum["Express"] = "EXPRESS";
    BackendFrameworkEnum["Springboot"] = "SPRINGBOOT";
})(BackendFrameworkEnum = exports.BackendFrameworkEnum || (exports.BackendFrameworkEnum = {}));
;
var FrontendFrameworkEnum;
(function (FrontendFrameworkEnum) {
    FrontendFrameworkEnum["Angular"] = "ANGULAR";
    FrontendFrameworkEnum["Pure"] = "PURE";
    FrontendFrameworkEnum["React"] = "REACT";
    FrontendFrameworkEnum["Svelte"] = "SVELTE";
    FrontendFrameworkEnum["Vue"] = "VUE";
})(FrontendFrameworkEnum = exports.FrontendFrameworkEnum || (exports.FrontendFrameworkEnum = {}));
;
/**
 * Enum: Requisition
 */
var RequestTypeEnum;
(function (RequestTypeEnum) {
    RequestTypeEnum["Api"] = "API";
    RequestTypeEnum["Object"] = "OBJECT";
    RequestTypeEnum["Link"] = "LINK";
    RequestTypeEnum["Dialog"] = "DIALOG";
})(RequestTypeEnum = exports.RequestTypeEnum || (exports.RequestTypeEnum = {}));
;
var ActionVerbEnum;
(function (ActionVerbEnum) {
    ActionVerbEnum["Post"] = "POST";
    ActionVerbEnum["Get"] = "GET";
    ActionVerbEnum["Patch"] = "PATCH";
    ActionVerbEnum["Put"] = "PUT";
    ActionVerbEnum["Delete"] = "DELETE";
})(ActionVerbEnum = exports.ActionVerbEnum || (exports.ActionVerbEnum = {}));
;
