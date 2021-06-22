import {ObjectToCode, FrontendFrameworkEnum, ButtonTypeEnum, InputTypeEnum, ActionTypeEnum, ActionVerbEnum} from '../interfaces/frontend';
export const FAQ_FORM: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "faq-form",
    title: "FAQ",
    form: [{
        id: "faq-form",
        elements: [{
            input: {
                id: "question",
                type: InputTypeEnum.Text,
                label: "Pergunta",
                required: true,
                name: "question",
                placeholder: "Pergunta frequentemente feita",
                // regex: /^\d+$/
            }
        }, {
            input: {
                id: "answer",
                type: InputTypeEnum.Text,
                label: "Resposta",
                required: true,
                name: "answer",
                placeholder: "Resposta à pergunta",
                // regex: /^\d+$/
            }
        },],
        actions: {
            id:"faq-form-action",
            elements: [{
                button: {
                    id: "create",
                    type: ButtonTypeEnum.Submit,
                    label: "CRIAR",
                    icon:  "add",
                    action: {
                        type: ActionTypeEnum.Api,
                        verb: ActionVerbEnum.Post,
                        url: "$ENV$/auth/faq"
                    }
                }
            }]
        }
    }]
};