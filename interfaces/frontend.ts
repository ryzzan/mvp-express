export interface ObjectToCode {
    backendFramework?: BackendFrameworkEnum;
    frontendFramework?: FrontendFrameworkEnum;
    module: string;
    title: string;
    comments?: string;
    form?: FormInterface;
    table?: TableInterface;
    tree?: TreeInterface;
};

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
    // TO-DO
}

export interface FieldsetInterface {
    // TO-DO
}

export interface InputInterface {
    type: FormInputTypeEnum;
    label: string;
    name: string;
    placeholder: string;
    condition?: string;
    isAutoFocus?: boolean; // Specifies that an <input> element should automatically get focus when the page loads
    isChecked?: boolean; // Specifies that an <input> element should be pre-selected when the page loads (for type="checkbox" or type="radio")
    isDisabled?: boolean;
    isFormNoValidate?: boolean;
    isMultiple?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    accept?: string; // Specifies a filter for what file types the user can pick from the file input dialog box (only for type="file")
    alt?: string;
    autocomplete?: 'on' | 'off';
    dirname?: string;
    form?: string;
    formEnctype?: FormEncTypeEnum;
    formMethod?: FormMethodEnum;
    formTarget?: FormTargetEnum;
    height?: number; // Specifies the height of an <input> element (only for type="image")
    list?: string; // 	Refers to a <datalist> element that contains pre-defined options for an <input> element
    max?: number | Date;
    maxLength?: number;
    min?: number | Date;
    minLength?: number;
    pattern?: RegExp;
    size?: number;
    src?: string; // Specifies the URL of the image to use as a submit button (only for type="image")
    step?: number | any; // Specifies the interval between legal numbers in an input field
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
    condition?: string;
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
        icon?:  string;
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
};

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
};

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
    dialogDataInterface?: Object; // Two way data bind over dialog
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

export enum FormAttributeEnum {
    AcceptCharset = 'accept-charset',
    Action = 'action',
    Autocomplete = 'autocomplete',
    Enctype = 'enctype',
    Method = 'method',
    Name = 'name',
    Novalidate = 'novalidate',
    Rel = 'rel',
    Target = 'target'
}

export enum FormInputTypeEnum {
    Button = 'button',
    Checkbox = 'checkbox',
    Color = 'color',
    Date = 'date',
    DatetimeLocal = 'datetime-local',
    Email = 'email',
    File = 'file',
    Hidden = 'hidden',
    Image = 'image',
    Month = 'month',
    Number = 'number',
    Password = 'password',
    Radio = 'radio',
    Range = 'range',
    Reset = 'reset',
    Search = 'search',
    Submit = 'submit',
    Tel = 'tel',
    Text = 'text',
    Time = 'time',
    Url = 'url',
    Week = 'week',
}

export enum FormButtonTypeEnum {
    Button = 'button',
    Reset = 'reset',
    Submit = 'submit',
    Delete = 'delete'
}

export enum FormEncTypeEnum {
    Application = 'application/x-www-form-urlencoded',
    Mutipart = 'multipart/form-data',
    Text = 'text/plain',
}

export enum FormMethodEnum {
    Get = 'get',
    Post = 'post'
}

export enum FormTargetEnum {
    Blank = '_blank',
    Self = '_self',
    Parent = '_parent',
    Top = '_top'
}

/**
 * Enum: Event
 */
export enum EventEnum {
    /**
     * Window events
     */
    OnAfterPrint = 'onafterprint',
    OnBeforePrint = 'onbeforeprint',
    OnBeforeUnload = 'onbeforeunload',
    OnError = 'onerror',
    OnHashChange = 'onhashchange',
    OnLoad = 'onload',
    OnMessage = 'onmessage',
    OnOffline = 'onoffline',
    OnOnline = 'ononline',
    OnPageHide = 'onpagehide',
    OnPageShow = 'onpageshow',
    OnPopState = 'onpopstate',
    OnResize = 'onresize',
    OnStorage = 'onstorage',
    OnUnload = 'onunload',
    /**
     * Form events
     */
    OnBlur = 'onblur', // Fires the moment that the element loses focus
    OnChange = 'onchange', // Fires the moment when the value of the element is changed
    OnContextMenu = 'oncontextmenu', // Script to be run when a context menu is triggered
    OnFocus = 'onfocus', // Fires the moment when the element gets focus
    OnInput = 'oninput', // Script to be run when an element gets user input
    OnInvalid = 'oninvalid', // Script to be run when an element is invalid
    onReset = 'onreset', // Fires when the Reset button in a form is clicked
    OnSearch = 'onsearch', // Fires when the user writes something in a search field (for <input="search">)
    OnSelect = 'onselect', // Fires after some text has been selected in an element
    OnSubmit = 'onsubmit', // Fires when a form is submitted
    /**
     * Keyboard events
     */
    OnKeyDown = 'onkeydown',
    OnKeyPress = 'onkeypress',
    OnKeyUp = 'onkeyup',
    /**
     * Mouse events
     */
    OnClick = 'onclick',
    OnDoubleClick = 'ondblclick',
    OnMouseDown = 'onmousedown',
    OnMouseMove = 'onmousemove',
    OnMouseOut = 'onmouseout',
    OnMouseOver = 'onmouseover',
    OnMouseUp = 'onmouseup',
    OnWheel = 'onwheel',
    /**
     * Drag events
     */
     OnDrag = 'ondrag',
     OnDragEnd = 'ondragend',
     OnDragEnter = 'ondragenter',
     OnDragLeave = 'ondragleave',
     OnDragOver = 'ondragover',
     OnDragStart = 'ondragstart',
     OnDrop = 'ondrop',
     OnScroll = 'onscroll',
     /**
      * Clipoard events
      */
      OnCopy = 'oncopy',
      OnCut = 'oncut',
      OnPaste = 'onpaste',
     /**
      * Media events
      */
     // TODO
     /**
      * Micellaneous events
      */
      OnToggle = 'ontoggle',
}

/**
 * Enum: Filter
 */


 export enum FilterTypeEnum {
    Api = 'API',
    Object = 'OBJECT'
}

export enum FilterComparisonOperatorEnum {
    Equal = 'eq',
    Greater = 'gt',
    GreaterOrEqual = 'gte',
    InArray = 'in',
    Less = 'lt',
    LessOrEqual = 'lte',
    NotEqual = 'ne',
    NotInArray = 'nin',

}

export enum FilterLogicalOperatorEnum {
    And = 'and',
    Not = 'not',
    Nor = 'nor',
    Or = 'or'
}

/**
 * Enum: Frameworks
 */
 export enum BackendFrameworkEnum {
    Loopback = 'LOOPBACK',
    Nest = 'NEST',
    Fastify = 'FASTIFY',
    Express = 'EXPRESS',
    Springboot = 'SPRINGBOOT'
};

export enum FrontendFrameworkEnum {
    Angular = 'ANGULAR',
    Pure = 'PURE',
    React = 'REACT',
    Svelte = 'SVELTE',
    Vue = 'VUE',
};

/**
 * Enum: Requisition
 */
 export enum RequestTypeEnum {
    Api = 'API',
    Object = 'OBJECT', 
    Link = 'LINK',
    Dialog = 'DIALOG',
};

export enum ActionVerbEnum {
    Post = 'POST',
    Get = 'GET',
    Patch = 'PATCH',
    Put = 'PUT',
    Delete = 'DELETE'
};