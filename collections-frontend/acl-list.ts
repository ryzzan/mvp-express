import { ActionType, ActionVerb, FrontendFramework, ObjectToCode } from '../interfaces/frontend';

export const ACL_LIST: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "acl-list",
    table: [{
        id: "acl-list",
        action: {
            type: ActionType.Api,
            verb: ActionVerb.Get,
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
                        type: "link",
                        url: "$ENV$/companies/{id}"
                    }
                }, {
                    label: "Remover",
                    action: {
                        type: "api",
                        verb: "delete",
                        url: "$ENV$/people/{id}"
                    },
                    validator: "$VALIDATOR_CONFIRM_ACTION$"
                }]
            }
        }]
    }]
};