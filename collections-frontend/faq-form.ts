import {ObjectToCode, FrontendFramework, ButtonType, InputType, OptionType, ActionType, ActionVerb} from '../interfaces/frontend';
export const FAQ_FORM: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "faq-list",
    form: [{
        id: "faq",
        elements: [{
            input: {
                id: "question",
                type: InputType.Text,
                label: "Pergunta",
                required: true,
                name: "question",
                placeholder: "Pergunta frequentemente feita",
                // regex: /^\d+$/
            }
        }, {
            input: {
                id: "answer",
                type: InputType.Text,
                label: "Resposta",
                required: true,
                name: "answer",
                placeholder: "Resposta à pergunta",
                // regex: /^\d+$/
            }
        }, {
            button: {
                id: "create",
                type: ButtonType.Submit,
                label: "CRIAR",
                icon:  "add",
                action: {
                    type: ActionType.Api,
                    verb: ActionVerb.Post,
                    url: "$ENV$/auth/faq"
                }
            }
        }]
    }]
};