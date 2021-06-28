import {ObjectToCode, FrontendFrameworkEnum, ButtonTypeEnum, InputTypeEnum, RequestTypeEnum, ActionVerbEnum} from '../interfaces/frontend';
export const FAQ_FORM: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "login-form",
    title: "Login",
    form: [{
        id: "login-form",
        elements: [{
            input: {
                id: "user",
                type: InputTypeEnum.Text,
                label: "Usuário",
                required: true,
                name: "user",
                placeholder: "CPF, CNPJ, e-mail ou nome de usuário",
                // regex: /^\d+$/
            }
        }, {
            input: {
                id: "password",
                type: InputTypeEnum.Password,
                label: "Senha",
                required: true,
                name: "password",
                placeholder: "Senha de acesso",
                // regex: /^\d+$/
            }
        }, {
            button: {
                id: "create",
                type: ButtonTypeEnum.Submit,
                label: "ENTRAR",
                icon:  "add",
                action: {
                    type: RequestTypeEnum.Api,
                    verb: ActionVerbEnum.Post,
                    url: "$ENV$/auth/login"
                }
            }
        }]
    }]
};