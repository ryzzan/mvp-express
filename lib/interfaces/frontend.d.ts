export declare enum BackendFramework {
    Loopback = "LOOPBACK",
    Nest = "NEST",
    Fastify = "FASTIFY",
    Express = "EXPRESS",
    Springboot = "SPRINGBOOT"
}
export declare enum FrontendFramework {
    Angular = "ANGULAR",
    Pure = "PURE",
    React = "REACT",
    Svelte = "SVELTE",
    Vue = "VUE"
}
export declare enum InputType {
    Text = "text",
    Password = "password",
    Email = "email",
    Date = "date"
}
export declare enum ButtonType {
    Submit = "submit",
    Reset = "reset",
    Link = "link"
}
export declare enum OptionType {
    Api = "API",
    Object = "OBJECT"
}
export declare enum ActionType {
    Api = "API",
    Link = "LINK"
}
export declare enum ActionVerb {
    Post = "POST",
    Get = "GET",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export interface RowMenuElement {
    label: string;
    icon?: string;
    action: {
        type: ActionType;
        verb?: ActionVerb;
        url?: string;
        body?: Object;
    };
    validator?: string;
}
export interface FormElement {
    array?: {
        id: string;
        label: string;
        elements: Array<FormElement>;
    };
    input?: {
        id: string;
        type: InputType;
        label: string;
        required?: boolean;
        name: string;
        placeholder: string;
        defaultValue?: string;
        comment?: string;
    };
    select?: {
        id: string;
        label: string;
        required?: boolean;
        name: string;
        placeholder: string;
        defaultValue?: string;
        options: {
            type: OptionType;
            url?: string;
            object?: Array<{
                value: string;
                valueView: string;
            }>;
        };
    };
    checkbox?: {};
    radio?: {};
    autocomplete?: {};
    button?: {
        id: string;
        type: ButtonType;
        label: string;
        icon?: string;
        action: {
            type: ActionType;
            verb?: ActionVerb;
            url?: string;
        };
    };
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
        menu?: Array<RowMenuElement>;
        comment?: string;
    };
}
export interface ObjectToCode {
    backendFramework?: BackendFramework;
    frontendFramework?: FrontendFramework;
    module: string;
    title: string;
    form?: [
        {
            id: string;
            elements: Array<FormElement>;
        }
    ];
    table?: [
        {
            id: string;
            action: {
                type: ActionType;
                verb: ActionVerb;
                url: string;
            };
            elements: Array<TableElement>;
        }
    ];
}
