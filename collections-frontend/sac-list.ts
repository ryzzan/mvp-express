import { RequestTypeEnum, ActionVerbEnum, FrontendFrameworkEnum, ObjectToCode } from '../interfaces/frontend';

export const SAC_LIST: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "sac-list",
    title: "SAC",
    table: [{
        id: "sac-list",
        data: {
            type: RequestTypeEnum.Api,
            verb: ActionVerbEnum.Get,
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
                        type: RequestTypeEnum.Link,
                        url: "$ENV$/companies/{id}"
                    }
                }, {
                    label: "Remover",
                    action: {
                        type: RequestTypeEnum.Api,
                        verb: ActionVerbEnum.Delete,
                        url: "$ENV$/people/{id}"
                    },
                    validator: "$VALIDATOR_CONFIRM_ACTION$"
                }]
            }
        }]
    }]
};