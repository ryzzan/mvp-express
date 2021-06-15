"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAQ_FORM = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.FAQ_FORM = {
    frontendFramework: frontend_1.FrontendFramework.Angular,
    module: "faq-list",
    form: [{
            id: "faq",
            elements: [{
                    input: {
                        id: "question",
                        type: frontend_1.InputType.Text,
                        label: "Pergunta",
                        required: true,
                        name: "question",
                        placeholder: "Pergunta frequentemente feita",
                        // regex: /^\d+$/
                    }
                }, {
                    input: {
                        id: "answer",
                        type: frontend_1.InputType.Text,
                        label: "Resposta",
                        required: true,
                        name: "answer",
                        placeholder: "Resposta à pergunta",
                        // regex: /^\d+$/
                    }
                }, {
                    button: {
                        id: "create",
                        type: frontend_1.ButtonType.Submit,
                        label: "CRIAR",
                        icon: "add",
                        action: {
                            type: frontend_1.ActionType.Api,
                            verb: frontend_1.ActionVerb.Post,
                            url: "$ENV$/auth/faq"
                        }
                    }
                }]
        }]
};
