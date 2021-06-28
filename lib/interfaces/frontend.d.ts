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
export declare enum InputTypeEnum {
    Text = "text",
    Password = "password",
    Email = "email",
    Date = "date",
    Number = "number"
}
export declare enum ButtonTypeEnum {
    Submit = "submit",
    Reset = "reset",
    Link = "link",
    Delete = "delete"
}
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
export interface ObjectToCode {
    backendFramework?: BackendFrameworkEnum;
    frontendFramework?: FrontendFrameworkEnum;
    module: string;
    title: string;
    form?: Array<Form>;
    table?: Array<Table>;
    tree?: Array<Tree>;
}
/**
 * Form
 */
export interface Form {
    id: string;
    title?: string;
    subtitle?: string;
    tabs?: Array<FormTabElementInterface>;
    dialog?: DialogInterface;
    isTable?: boolean;
    actions?: {
        id: string;
        elements: Array<FormElementInterface>;
    };
    elements?: Array<FormElementInterface>;
}
export interface FormElementInterface {
    array?: {
        id: string;
        label: string;
        elements: Array<FormElementInterface>;
    };
    input?: {
        id: string;
        type: InputTypeEnum;
        label: string;
        required?: boolean;
        name: string;
        placeholder?: string;
        defaultValue?: string;
        comment?: string;
    };
    slide?: {
        id: string;
        label: string;
        required?: boolean;
        name: string;
        defaultValue?: boolean;
        comment?: string;
    };
    select?: {
        id: string;
        label: string;
        required?: boolean;
        name: string;
        placeholder?: string;
        defaultValue?: string;
        isMultiple?: boolean;
        options: SelectOptionInterface;
    };
    checkbox?: {};
    radio?: {};
    autocomplete?: {};
    button?: {
        id: string;
        type: ButtonTypeEnum;
        label: string;
        icon?: string;
        action: RequestInterface;
    };
}
export interface SelectOptionInterface {
    type: RequestTypeEnum;
    url?: string;
    object?: Array<SelectOptionObjectInterface>;
}
export interface FormTabElementInterface {
    id: string;
    label: string;
    elements: Array<FormElementInterface>;
}
export interface SelectOptionObjectInterface {
    value: string;
    valueView: string;
}
/**
 * Table
 */
export interface Table {
    id: string;
    data: RequestInterface;
    title?: string;
    subtitle?: string;
    object?: Array<Object>;
    actions?: Form;
    elements: Array<TableElement>;
}
export interface TableElement {
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
            label: string;
            icon?: string;
            action: RequestInterface;
            validator?: string;
            dialog?: DialogInterface;
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
export interface Tree {
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
    template: string;
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
