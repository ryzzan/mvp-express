import { RequestTypeEnum, ActionVerbEnum, FrontendFrameworkEnum, ObjectToCode } from '../interfaces/frontend';

export const ADXTV_PACKAGE_LIST: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "adxtv-package-list",
    title: "Pacotes",
    table: [{
        id: "adxtv-package-list",
        data: {
            type: RequestTypeEnum.Api,
            verb: ActionVerbEnum.Get,
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
                    icon: "edit",
                    action: {
                        type: RequestTypeEnum.Link,
                        url: "$ENV$/companies/{id}"
                    }
                }, {
                    label: "Remover",
                    icon: "delete",
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