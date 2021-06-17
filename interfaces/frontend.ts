export enum BackendFramework {
    Loopback = 'LOOPBACK',
    Nest = 'NEST',
    Fastify = 'FASTIFY',
    Express = 'EXPRESS',
    Springboot = 'SPRINGBOOT'
};

export enum FrontendFramework {
    Angular = 'ANGULAR',
    Pure = 'PURE',
    React = 'REACT',
    Svelte = 'SVELTE',
    Vue = 'VUE',
};

export enum InputType {
    Text = 'text',
    Password = 'password',
    Email = 'email',
    Date = 'date'
};

export enum ButtonType {
    Submit = 'submit',
    Reset = 'reset',
    Link = 'link'
};

export enum OptionType {
    Api = 'API',
    Object = 'OBJECT'
};

export enum ActionType {
    Api = 'API'
};

export enum ActionVerb {
    Post = 'POST',
    Get = 'GET',
    Patch = 'PATCH',
    Put = 'PUT',
    Delete = 'DELETE'
};

export interface FormElement {
    array?: { 
        id: string;
        label: string;
        elements: Array<FormElement>;
    };
    input?: {
        id: string,
        type: InputType,
        label: string,
        required?: boolean,
        name: string,
        placeholder: string,
        defaultValue?: string,
    };
    select?: {
        id: string,
        label: string,
        required?: boolean,
        name: string,
        placeholder: string,
        defaultValue?: string,
        options: {
            type: OptionType,
            url?: string,
            object?: Array<{
                value: string,
                valueView: string
            }>
        }
    };
    checkbox?: {};
    radio?: {};
    autocomplete?: {};
    button?: {
        id: string,
        type: ButtonType,
        label: string,
        icon?: string,
        action: {
            type: ActionType,
            verb?: ActionVerb,
            url?: string
        }
    };
};

interface TableElement {};

export interface ObjectToCode {
    backendFramework?: BackendFramework;
    frontendFramework?: FrontendFramework;
    module: string;
    title: string;
    form?: [{
        id: string,
        elements: Array<FormElement>
    }];
    table?: [{
        id: string,
        action: {
            type: ActionType,
            verb: ActionVerb,
            url: string
        },
        elements: Array<TableElement>
    }];
};