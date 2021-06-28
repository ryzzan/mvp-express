import { RequestTypeEnum, ActionVerbEnum, FrontendFrameworkEnum, FilterTypeEnum, FilterComparisonOperatorEnum, ObjectToCode } from '../interfaces/frontend';

export const COMPANY_LIST: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "company-list",
    title: "Empresa",
    table: [{
        id: "company-list",
        data: {
            type: RequestTypeEnum.Api,
            verb: ActionVerbEnum.Get,
            url: "$ENV$/adxtv"
        },
        elements: [{
            column: {
                label: "CNPJ"
            },
            row: {
                type: "string",
                field: "uniqueId"
            }
        }, {
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
                    type: FilterTypeEnum.Object,
                    where: [{
                        attribute: "type",
                        comparison: FilterComparisonOperatorEnum.Equal,
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
                    type: FilterTypeEnum.Object,
                    where: [{
                        attribute: "type",
                        comparison: FilterComparisonOperatorEnum.Equal,
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
                        type: RequestTypeEnum.Link,
                        verb: ActionVerbEnum.Delete,
                        url: "$ENV$/people/{id}"
                    },
                    validator: "$VALIDATOR_CONFIRM_ACTION$"
                }, {
                    label: "Bloquear",
                    action: {
                        type: RequestTypeEnum.Api,
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
                        type: RequestTypeEnum.Api,
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