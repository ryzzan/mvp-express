import {
    ObjectToCode,
    FrontendFrameworkEnum,
    ButtonTypeEnum,
    InputTypeEnum,
    ActionTypeEnum,
    ActionVerbEnum
} from '../interfaces/frontend';
export const CHANGE_PASSWORD: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "change-password",
    title: "Mudar senha",
    form: [{
        id: "changePassword",
        elements: [{
            input: {
                id: "password",
                type: InputTypeEnum.Password,
                label: "Senha",
                required: true,
                name: "password",
                placeholder: "Mínimo de 8 caracteres",
            }
        }, {
            input: {
                id: "repeatPassword",
                type: InputTypeEnum.Password,
                label: "Repetir senha",
                required: true,
                name: "repeatPassword",
                placeholder: "Repita sua nova senha",
            }
        }, {
            button: {
                id: "create",
                type: ButtonTypeEnum.Submit,
                label: "ALTERAR",
                icon: "add",
                action: {
                    type: ActionTypeEnum.Api,
                    verb: ActionVerbEnum.Post,
                    url: "$ENV$/acl"
                }
            }
        }]
    }]
};