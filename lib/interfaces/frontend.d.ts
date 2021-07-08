export interface ObjectToCode {
    backendFramework?: BackendFrameworkEnum;
    frontendFramework?: FrontendFrameworkEnum;
    module: string;
    title: string;
    form?: FormInterface;
    table?: TableInterface;
    tree?: TreeInterface;
}
/**
 * Form
 */
export interface FormInterface {
    elements: Array<FormElementInterface>;
    id: string;
    label: string;
    actions?: Array<FormElementInterface>;
    title?: string;
    subtitle?: string;
    attributes?: FormAttributeEnum;
}
export interface FormElementInterface {
    array?: FormInterface;
    button?: ButtonInterface;
    datalist?: DatalistInterface;
    fieldset?: FieldsetInterface;
    input?: InputInterface;
    label?: LabelInterface;
    legend?: LegendInterface;
    optgroup?: OptgroupInterface;
    option?: OptionInterface;
    output?: OutputInterface;
    select?: SelectInterface;
    slide?: InputInterface;
    tabs?: Array<FormInterface>;
    textarea?: TextareaInterface;
}
export interface ButtonInterface {
    type: FormButtonTypeEnum;
    label: string;
    dialog?: DialogInterface;
    name?: string;
    isAutofocus?: boolean;
    isDisabled?: boolean;
    isFormNoValidate?: boolean;
    icon?: string;
    value?: string;
    form?: string;
    formAction?: string;
    formEnctype?: FormEncTypeEnum;
    formMethod?: FormMethodEnum;
    formTarget?: FormTargetEnum;
}
export interface DatalistInterface {
}
export interface FieldsetInterface {
}
export interface InputInterface {
    type: FormInputTypeEnum;
    label: string;
    name: string;
    placeholder: string;
    isAutoFocus?: boolean;
    isChecked?: boolean;
    isDisabled?: boolean;
    isFormNoValidate?: boolean;
    isMultiple?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    accept?: string;
    alt?: string;
    autocomplete?: 'on' | 'off';
    dirname?: string;
    form?: string;
    formEnctype?: FormEncTypeEnum;
    formMethod?: FormMethodEnum;
    formTarget?: FormTargetEnum;
    height?: number;
    list?: string;
    max?: number | Date;
    maxLength?: number;
    min?: number | Date;
    minLength?: number;
    pattern?: RegExp;
    size?: number;
    src?: string;
    step?: number | any;
    validators?: Array<string>;
    value?: string;
    width?: number;
}
export interface LabelInterface {
}
export interface LegendInterface {
}
export interface OptgroupInterface {
    label: string;
    options?: Array<OptionInterface>;
    isDisabled?: boolean;
}
export interface OptionInterface {
    label: string;
    value: string;
    isDisabled?: boolean;
    isSelected?: boolean;
}
export interface OutputInterface {
}
export interface SelectInterface {
    name: string;
    label: string;
    optgroups?: Array<OptgroupInterface>;
    optionsObject?: Array<OptionInterface>;
    optionsApiEndpoint?: string;
    size?: number;
    validators?: Array<string>;
    isAutofocus?: boolean;
    isDisabled?: boolean;
    isMultiple?: boolean;
    isRequired?: boolean;
}
export interface TextareaInterface {
}
/**
 * Table
 */
export interface TableInterface {
    id: string;
    data: RequestInterface;
    elements: Array<TableElementInterface>;
    actions?: FormInterface;
    object?: Array<Object>;
    subtitle?: string;
    title?: string;
}
export interface TableElementInterface {
    column: {
        label: string;
        sort?: boolean;
        comment?: string;
    };
    row: {
        type: string;
        field?: string;
        icon?: string;
        filter?: FilterInterface;
        menu?: Array<{
            action: RequestInterface;
            label: string;
            dialog?: DialogInterface;
            icon?: string;
            validator?: string;
        }>;
        comment?: string;
    };
}
export interface RowMenuElementInterface {
    label: string;
    icon?: string;
    action: RequestInterface;
    validator?: string;
}
/**
 * Tree
 */
export interface TreeInterface {
    id: string;
    elements: Array<TreeElementInterface>;
}
export interface TreeElementInterface {
    id: string;
    nodes: TreeNodeInterface;
}
export interface TreeNodeInterface {
    type: RequestTypeEnum;
    url?: string;
    object?: Array<TreeNodeObjectInterface>;
}
export interface TreeNodeObjectInterface {
    name: string;
    children?: Array<TreeNodeObjectInterface>;
    menu?: Array<{
        label: string;
        icon?: string;
        action: RequestInterface;
        validator?: string;
    }>;
}
/**
 * Dialog
 */
export interface DialogInterface {
    templateFolder: string;
    id: string;
    dialogDataInterface?: Object;
}
/**
 * Request
 */
export interface RequestInterface {
    type: RequestTypeEnum;
    verb?: ActionVerbEnum;
    url?: string;
    body?: Object;
}
export interface FilterWhereInterface {
    attribute?: string;
    comparison?: FilterComparisonOperatorEnum;
    logical?: FilterLogicalOperatorEnum;
    value?: string;
}
export interface FilterInterface {
    type: FilterTypeEnum;
    where?: Array<FilterWhereInterface>;
}
/**
 * Frontend
 */
export interface DirectiveElements {
    dialog?: boolean;
    form?: boolean;
    formArray?: boolean;
    formValidators?: boolean;
    router?: boolean;
    routerActivatedRoute?: boolean;
    routerRouter?: boolean;
}
/**
 * Enum: Form
 */
export declare enum FormAttributeEnum {
    AcceptCharset = "accept-charset",
    Action = "action",
    Autocomplete = "autocomplete",
    Enctype = "enctype",
    Method = "method",
    Name = "name",
    Novalidate = "novalidate",
    Rel = "rel",
    Target = "target"
}
export declare enum FormInputTypeEnum {
    Button = "button",
    Checkbox = "checkbox",
    Color = "color",
    Date = "date",
    DatetimeLocal = "datetime-local",
    Email = "email",
    File = "file",
    Hidden = "hidden",
    Image = "image",
    Month = "month",
    Number = "number",
    Password = "password",
    Radio = "radio",
    Range = "range",
    Reset = "reset",
    Search = "search",
    Submit = "submit",
    Tel = "tel",
    Text = "text",
    Time = "time",
    Url = "url",
    Week = "week"
}
export declare enum FormButtonTypeEnum {
    Button = "button",
    Reset = "reset",
    Submit = "submit",
    Delete = "button"
}
export declare enum FormEncTypeEnum {
    Application = "application/x-www-form-urlencoded",
    Mutipart = "multipart/form-data",
    Text = "text/plain"
}
export declare enum FormMethodEnum {
    Get = "get",
    Post = "post"
}
export declare enum FormTargetEnum {
    Blank = "_blank",
    Self = "_self",
    Parent = "_parent",
    Top = "_top"
}
/**
 * Enum: Event
 */
export declare enum EventEnum {
    /**
     * Window events
     */
    OnAfterPrint = "onafterprint",
    OnBeforePrint = "onbeforeprint",
    OnBeforeUnload = "onbeforeunload",
    OnError = "onerror",
    OnHashChange = "onhashchange",
    OnLoad = "onload",
    OnMessage = "onmessage",
    OnOffline = "onoffline",
    OnOnline = "ononline",
    OnPageHide = "onpagehide",
    OnPageShow = "onpageshow",
    OnPopState = "onpopstate",
    OnResize = "onresize",
    OnStorage = "onstorage",
    OnUnload = "onunload",
    /**
     * Form events
     */
    OnBlur = "onblur",
    OnChange = "onchange",
    OnContextMenu = "oncontextmenu",
    OnFocus = "onfocus",
    OnInput = "oninput",
    OnInvalid = "oninvalid",
    onReset = "onreset",
    OnSearch = "onsearch",
    OnSelect = "onselect",
    OnSubmit = "onsubmit",
    /**
     * Keyboard events
     */
    OnKeyDown = "onkeydown",
    OnKeyPress = "onkeypress",
    OnKeyUp = "onkeyup",
    /**
     * Mouse events
     */
    OnClick = "onclick",
    OnDoubleClick = "ondblclick",
    OnMouseDown = "onmousedown",
    OnMouseMove = "onmousemove",
    OnMouseOut = "onmouseout",
    OnMouseOver = "onmouseover",
    OnMouseUp = "onmouseup",
    OnWheel = "onwheel",
    /**
     * Drag events
     */
    OnDrag = "ondrag",
    OnDragEnd = "ondragend",
    OnDragEnter = "ondragenter",
    OnDragLeave = "ondragleave",
    OnDragOver = "ondragover",
    OnDragStart = "ondragstart",
    OnDrop = "ondrop",
    OnScroll = "onscroll",
    /**
     * Clipoard events
     */
    OnCopy = "oncopy",
    OnCut = "oncut",
    OnPaste = "onpaste",
    /**
     * Media events
     */
    /**
     * Micellaneous events
     */
    OnToggle = "ontoggle"
}
/**
 * Enum: Filter
 */
export declare enum FilterTypeEnum {
    Api = "API",
    Object = "OBJECT"
}
export declare enum FilterComparisonOperatorEnum {
    Equal = "eq",
    Greater = "gt",
    GreaterOrEqual = "gte",
    InArray = "in",
    Less = "lt",
    LessOrEqual = "lte",
    NotEqual = "ne",
    NotInArray = "nin"
}
export declare enum FilterLogicalOperatorEnum {
    And = "and",
    Not = "not",
    Nor = "nor",
    Or = "or"
}
/**
 * Enum: Frameworks
 */
export declare enum BackendFrameworkEnum {
    Loopback = "LOOPBACK",
    Nest = "NEST",
    Fastify = "FASTIFY",
    Express = "EXPRESS",
    Springboot = "SPRINGBOOT"
}
export declare enum FrontendFrameworkEnum {
    Angular = "ANGULAR",
    Pure = "PURE",
    React = "REACT",
    Svelte = "SVELTE",
    Vue = "VUE"
}
/**
 * Enum: Requisition
 */
export declare enum RequestTypeEnum {
    Api = "API",
    Object = "OBJECT",
    Link = "LINK",
    Dialog = "DIALOG"
}
export declare enum ActionVerbEnum {
    Post = "POST",
    Get = "GET",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
