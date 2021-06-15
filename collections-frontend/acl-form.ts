import {ObjectToCode, FrontendFramework, ButtonType, InputType, OptionType, ActionType, ActionVerb} from '../interfaces/frontend';
export const ACL_FORM: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "acl-list",
    form: [{
        id: "acl",
        elements: [{
            input: {
                id: "group",
                type: InputType.Text,
                label: "Grupo",
                required: true,
                name: "group",
                placeholder: "Identificador de grupo de permissões",
                // regex: /^\d+$/
            }
        }, {
            select: {
                id: "module",
                label: "Módulo",
                required: true,
                name: "module",
                placeholder: "Fluxo de uso",
                options: {
                    type: OptionType.Object,
                    object: [{
                        value: "user-list",
                        valueView: "Usuários"
                    }, {
                        value: "client-list",
                        valueView: "Clientes"
                    }, {
                        value: "financial-list",
                        valueView: "Financeiros"
                    }, {
                        value: "acl-list",
                        valueView: "ACLs"
                    }]
                }
            }
        }, {
            select: {
                id: "permission",
                label: "Permissão",
                required: true,
                name: "permission",
                options: {
                    type: OptionType.Object,
                    object: [{
                        value: "create",
                        valueView: "Criar"
                    }, {
                        value: "read",
                        valueView: "Ler"
                    }, {
                        value: "update",
                        valueView: "Atualizar"
                    }, {
                        value: "delete",
                        valueView: "Remover"
                    }]
                },
                placeholder: "Verbo de ação"
            }
        }, {
            button: {
                id: "create",
                type: ButtonType.Submit,
                label: "CRIAR",
                icon:  "add",
                action: {
                    type: ActionType.Api,
                    verb: ActionVerb.Post,
                    url: "$ENV$/acl"
                }
            }
        }]
    }]
};