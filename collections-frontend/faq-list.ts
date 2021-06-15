import { ActionType, ActionVerb, FrontendFramework, ObjectToCode } from '../interfaces/frontend';

export const FAQ_LIST: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "faq-list",
    table: [{
        id: "faq-list",
        action: {
            type: ActionType.Api,
            verb: ActionVerb.Get,
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