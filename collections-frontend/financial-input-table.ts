import { RequestTypeEnum, ActionVerbEnum, FrontendFrameworkEnum, ObjectToCode } from '../interfaces/frontend';

export const FINANCIAL_INPUT_LIST: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "acl-list",
    title: "Finaceira",
    table: [{
        id: "acl-list",
        data: {
            type: RequestTypeEnum.Api,
            verb: ActionVerbEnum.Get,
            url: "$ENV$/acls"
        },
        elements: [{
            column: {
                label: "Fonte",
                sort: true
            },
            row: {
                type: "string",
                field: "source"
            }
        }, {
            column: {
                label: "Descrição",
            },
            row: {
                type: "string",
                field: "description"
            }
        }, {
            column: {
                label: "Valor",
            },
            row: {
                type: "number",
                field: "price"
            }
        }, {
            column: {
                label: "Data do recebimento",
                sort: true,
            },
            row: {
                type: "number",
                field: "date"
            }
        }, {
            column: {
                label: "Status",
                sort: true,
            },
            row: {
                type: "text",
                field: "status"
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
                }]
            }
        }]
    }]
};