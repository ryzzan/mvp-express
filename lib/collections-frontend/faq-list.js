"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAQ_LIST = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.FAQ_LIST = {
    frontendFramework: frontend_1.FrontendFramework.Angular,
    module: "faq-list",
    table: [{
            id: "faq-list",
            action: {
                type: frontend_1.ActionType.Api,
                verb: frontend_1.ActionVerb.Get,
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
