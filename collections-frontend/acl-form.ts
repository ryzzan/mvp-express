import {ObjectToCode, FrontendFrameworkEnum, ButtonTypeEnum, InputTypeEnum, RequestTypeEnum, ActionTypeEnum, ActionVerbEnum} from '../interfaces/frontend';
export const ACL_FORM: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "acl-form",
    title: "ACL",
    form: [{
        id: "acl-form",
        elements: [{
            input: {
                id: "group",
                type: InputTypeEnum.Text,
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
                    type: RequestTypeEnum.Object,
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
                isMultiple: true,
                options: {
                    type: RequestTypeEnum.Object,
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
        }],
        actions: {
            id: "acl-form-action",
            elements: [{
                button: {
                    id: "create",
                    type: ButtonTypeEnum.Submit,
                    label: "CRIAR",
                    icon:  "add",
                    action: {
                        type: ActionTypeEnum.Api,
                        verb: ActionVerbEnum.Post,
                        url: "$ENV$/acl"
                    }
                }
            }]
        }
    }]
};