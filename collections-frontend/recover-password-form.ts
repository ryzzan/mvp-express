import {ObjectToCode, FrontendFrameworkEnum, ButtonTypeEnum, InputTypeEnum, ActionTypeEnum, ActionVerbEnum} from '../interfaces/frontend';
export const RECOVER_PASSWORD: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "recover-password",
    title: "Recuperar senha",
    form: [{
        id: "recoverPassword",
        elements: [{
            input: {
                id: "email",
                type: InputTypeEnum.Email,
                label: "E-mail",
                required: true,
                name: "email",
                placeholder: "E-mail do usuário que esqueceu a senha",
            }
        }, {
            input: {
                id: "repeatEmail",
                type: InputTypeEnum.Email,
                label: "Repetir e-mail",
                required: true,
                name: "repeatEmail",
                placeholder: "Repetir e-mail do usuário",
            }
        }, {
            button: {
                id: "create",
                type: ButtonTypeEnum.Submit,
                label: "ENVIAR",
                icon:  "add",
                action: {
                    type: ActionTypeEnum.Api,
                    verb: ActionVerbEnum.Post,
                    url: "$ENV$/acl"
                }
            }
        }]
    }]
};