import {ObjectToCode, FrontendFramework, ButtonType, InputType, OptionType, ActionType, ActionVerb} from '../interfaces/frontend';
export const FAQ_FORM: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "login-list",
    form: [{
        id: "login",
        elements: [{
            input: {
                id: "user",
                type: InputType.Text,
                label: "Usuário",
                required: true,
                name: "user",
                placeholder: "CPF, CNPJ, e-mail ou nome de usuário",
                // regex: /^\d+$/
            }
        }, {
            input: {
                id: "password",
                type: InputType.Password,
                label: "Senha",
                required: true,
                name: "password",
                placeholder: "Senha de acesso",
                // regex: /^\d+$/
            }
        }, {
            button: {
                id: "create",
                type: ButtonType.Submit,
                label: "ENTRAR",
                icon:  "add",
                action: {
                    type: ActionType.Api,
                    verb: ActionVerb.Post,
                    url: "$ENV$/auth/login"
                }
            }
        }]
    }]
};