import { ActionTypeEnum, ActionVerbEnum, FrontendFrameworkEnum, ObjectToCode } from '../interfaces/frontend';

export const FAQ_LIST: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "faq-list",
    title: "FAQ",
    table: [{
        id: "faq-list",
        data: {
            type: ActionTypeEnum.Api,
            verb: ActionVerbEnum.Get,
            url: "$ENV$/faqs"
        },
        elements: [{
            column: {
                label: "Pergunta"
            },
            row: {
                type: "string",
                field: "question"
            }
        }, {
            column: {
                label: "Resposta"
            },
            row: {
                type: "string",
                field: "answer"
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
                }]
            }
        }]
    }]
};