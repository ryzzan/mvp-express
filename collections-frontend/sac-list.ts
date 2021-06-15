import { ActionType, ActionVerb, FrontendFramework, ObjectToCode } from '../interfaces/frontend';

export const SAC_LIST: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "sac-list",
    table: [{
        id: "sac-list",
        action: {
            type: ActionType.Api,
            verb: ActionVerb.Get,
            url: "$ENV$/sacs"
        },
        elements: [{
            column: {
                label: "Identificador"
            },
            row: {
                type: "string",
                field: "id"
            }
        }, {
            column: {
                label: "Tipo de contato",
                sort: true
            },
            row: {
                type: "string",
                field: "contactType"
            }
        }, {
            column: {
                label: "Valor"
            },
            row: {
                type: "string",
                field: "value"
            }
        }, {
            column: {
                label: "Complemento"
            },
            row: {
                type: "string",
                field: "complement"
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