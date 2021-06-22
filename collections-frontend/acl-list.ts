import { ActionTypeEnum, ActionVerbEnum, FrontendFrameworkEnum, ObjectToCode } from '../interfaces/frontend';

export const ACL_LIST: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "acl-list",
    title: "ACLs",
    table: [{
        id: "acl-list",
        data: {
            type: ActionTypeEnum.Api,
            verb: ActionVerbEnum.Get,
            url: "$ENV$/acls"
        },
        elements: [{
            column: {
                label: "Grupo",
                sort: true
            },
            row: {
                type: "string",
                field: "group"
            }
        }, {
            column: {
                label: "Módulo",
                sort: true
            },
            row: {
                type: "string",
                field: "module"
            }
        }, {
            column: {
                label: "Permissão",
                sort: true
            },
            row: {
                type: "string",
                field: "permission"
            }
        }, {
            column: {
                label: "Ações"
            },
            row: {
                type: "menu",
                icon: "more_vert",
                menu: [{
                    label: "Editar",
                    action: {
                        type: ActionTypeEnum.Link,
                        url: "$ENV$/companies/{id}"
                    }
                }, {
                    label: "Remover",
                    action: {
                        type: ActionTypeEnum.Api,
                        verb: ActionVerbEnum.Get,
                        url: "$ENV$/people/{id}"
                    },
                    validator: "$VALIDATOR_CONFIRM_ACTION$"
                }]
            }
        }]
    }]
};