import { ActionType, ActionVerb, ButtonType, FrontendFramework, InputType, ObjectToCode } from '../interfaces/frontend';

export const COMPANY_LIST: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "company-list",
    table: [{
        id: "company-list",
        action: {
            type: ActionType.Api,
            verb: ActionVerb.Get,
            url: "$ENV$/companies"
        },
        elements: [{
            column: {
                label: "Nome fantasia",
                sort: true
            },
            row: {
                type: "string",
                field: "businessName"
            }
        }, {
            column: {
                label: "CNPJ"
            },
            row: {
                type: "string",
                field: "uniqueId"
            }
        }, {
            column: {
                label: "Data de abertura",
                sort: true
            },
            row: {
                type: "string",
                field: "openingDate"
            }
        }, {
            // TO-DO where filter on code maker
            column: {
                label: "Telefone"
            },
            row: {
                type: "array",
                field: "contacts",
                filter: {
                    type: "object",
                    where: [{
                        attribute: "type",
                        operator: "equal",
                        value: "mobile"
                    }]
                }
            }
        }, {
            column: {
                label: "E-mail"
            },
            row: {
                type: "array",
                field: "contacts",
                filter: {
                    type: "object",
                    where: [{
                        attribute: "type",
                        operator: "equal",
                        value: "email"
                    }]
                }
            }
        }, {
            column: {
                label: "Ações"
            },
            row: {
                type: "menu",
                icon: {
                    ui: "material",
                    name: "more_vert"
                },
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
                }, {
                    label: "Bloquear",
                    action: {
                        type: "api",
                        verb: "put",
                        url: "$ENV$/people/{id}",
                        body: {
                            isBlocked: true
                        }
                    },
                    validator: "$VALIDATOR_CONFIRM_ACTION$"
                }, {
                    label: "Desbloquear",
                    action: {
                        type: "api",
                        verb: "put",
                        url: "$ENV$/people/{id}",
                        body: {
                            isBlocked: false
                        }
                    },
                    validator: "$VALIDATOR_CONFIRM_ACTION$"
                }]
            }
        }]
    }]
};