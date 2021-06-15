import { ActionType, ActionVerb, FrontendFramework, ObjectToCode } from '../interfaces/frontend';

export const ADXTV_PACKAGE_LIST: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "adxtv-package-list",
    table: [{
        id: "adxtv-package-list",
        action: {
            type: ActionType.Api,
            verb: ActionVerb.Get,
            url: "$ENV$/adxtv"
        },
        elements: [{
            column: {
                label: "Nome",
                sort: true
            },
            row: {
                type: "string",
                field: "name"
            }
        }, {
            column: {
                label: "Valor"
            },
            row: {
                type: "number",
                field: "price"
            }
        }, {
            column: {
                label: "Descrição"
            },
            row: {
                type: "string",
                field: "description"
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