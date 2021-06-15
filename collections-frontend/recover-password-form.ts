import {ObjectToCode, FrontendFramework, ButtonType, InputType, OptionType, ActionType, ActionVerb} from '../interfaces/frontend';
export const RECOVER_PASSWORD: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "recover-password",
    form: [{
        id: "recoverPassword",
        elements: [{
            input: {
                id: "email",
                type: InputType.Email,
                label: "E-mail",
                required: true,
                name: "email",
                placeholder: "E-mail do usuário que esqueceu a senha",
            }
        }, {
            input: {
                id: "repeatEmail",
                type: InputType.Email,
                label: "Repetir e-mail",
                required: true,
                name: "repeatEmail",
                placeholder: "Repetir e-mail do usuário",
            }
        }, {
            button: {
                id: "create",
                type: ButtonType.Submit,
                label: "ENVIAR",
                icon:  "add",
                action: {
                    type: ActionType.Api,
                    verb: ActionVerb.Post,
                    url: "$ENV$/acl"
                }
            }
        }]
    }]
};