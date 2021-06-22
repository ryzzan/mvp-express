import { ActionTypeEnum, ActionVerbEnum, FilterComparisonOperatorEnum, FilterTypeEnum, FrontendFrameworkEnum, ObjectToCode } from '../interfaces/frontend';

export const USER_LIST: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "user-list",
    title: "Usuário",
    table: [{
        id: "user-list",
        data: {
            type: ActionTypeEnum.Api,
            verb: ActionVerbEnum.Get,
            url: "$ENV$/users"
        },
        elements: [{
            column: {
                label: "CPF"
            },
            row: {
                type: "string",
                field: "uniqueId"
            }
        }, {
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
                label: "Gênero",
                sort: true
            },
            row: {
                type: "string",
                field: "gender"
            }
        }, {
            column: {
                label: "Data de nascimento"
            },
            row: {
                type: "string",
                field: "birthday"
            }
        }, {
            column: {
                label: "Telefone"
            },
            row: {
                type: "array",
                field: "mobile"
            }
        }, {
            column: {
                label: "E-mail"
            },
            row: {
                type: "array",
                field: "email"
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
                        verb: ActionVerbEnum.Delete,
                        url: "$ENV$/people/{id}"
                    },
                    validator: "$VALIDATOR_CONFIRM_ACTION$"
                }, {
                    label: "Bloquear",
                    action: {
                        type: ActionTypeEnum.Api,
                        verb: ActionVerbEnum.Put,
                        url: "$ENV$/people/{id}",
                        body: {
                            isBlocked: true
                        }
                    },
                    validator: "$VALIDATOR_CONFIRM_ACTION$"
                }, {
                    label: "Desbloquear",
                    action: {
                        type: ActionTypeEnum.Api,
                        verb: ActionVerbEnum.Put,
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